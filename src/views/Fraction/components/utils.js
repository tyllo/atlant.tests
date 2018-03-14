export class Fraction {
  constructor({ numerator, denominator }) {
    if (denominator === 0) throw new Error('Делитель у дроби не может быть 0');

    const divider = numerator ? Fraction.getMinCommonDivider(numerator, denominator) : 1;
    this.numerator = numerator / divider;
    this.denominator = denominator / divider;
  }

  // алгоритм Эвклида - https://goo.gl/VREMiG
  static getMinCommonDivider(a, b) {
    return b ? Fraction.getMinCommonDivider(b, a % b) : a;
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }

  static add(a, b) {
    const numerator = (a.numerator * b.denominator) + (b.numerator * a.denominator);
    const denominator = a.denominator * b.denominator;
    return new Fraction({ numerator, denominator });
  }

  static substraction(a, b) {
    const numerator = (a.numerator * b.denominator) - (b.numerator * a.denominator);
    const denominator = a.denominator * b.denominator;
    return new Fraction({ numerator, denominator });
  }

  static multiply(a, b) {
    const numerator = a.numerator * b.numerator;
    const denominator = a.denominator * b.denominator;
    return new Fraction({ numerator, denominator });
  }

  static division(a, b) {
    const numerator = a.numerator * b.denominator;
    const denominator = a.denominator * b.numerator;
    return new Fraction({ numerator, denominator });
  }
}

function log(message) {
  if (process.env.NODE_ENV === 'development') {
    /* eslint no-console: 0 */
    console.log(message);
  }
}

function calcFraction(a, b, operation) {
  switch (operation) {
    case '+': {
      const result = Fraction.add(new Fraction(a), new Fraction(b));
      log(`${new Fraction(a)} + ${new Fraction(b)} = ${result}`);
      return result;
    }

    case '-': {
      const result = Fraction.substraction(new Fraction(a), new Fraction(b));
      log(`${new Fraction(a)} - ${new Fraction(b)} = ${result}`);
      return result;
    }

    case '*': {
      const result = Fraction.multiply(new Fraction(a), new Fraction(b));
      log(`${new Fraction(a)} * ${new Fraction(b)} = ${result}`);
      return result;
    }

    case '/': {
      const result = Fraction.division(new Fraction(a), new Fraction(b));
      log(`${new Fraction(a)} / ${new Fraction(b)} = ${result}`);
      return result;
    }

    default:
      throw new Error(`Calc for operation [${operation}] is not exist`);
  }
}

function getOperationPrioritet(operation) {
  switch (operation) {
    case '(':
      return -1;

    case '*':
    case '/':
      return 2;

    case ')':
      return 4;

    case '-':
    case '+':
      return 3;

    default:
      return 0;
  }
}

function handleOperand(result, stack, currentOperation) {
  if (!stack.length) {
    stack.push(currentOperation);
    return;
  }

  if (currentOperation === '(') {
    stack.push(currentOperation);
    return;
  }

  const prevOperation = stack.pop();

  if (prevOperation === '(' && currentOperation === ')') {
    return;
  }

  if (prevOperation === '(') {
    stack.push(prevOperation, currentOperation);
    return;
  }

  const prevPrioritet = getOperationPrioritet(prevOperation);
  const currentPrioritet = getOperationPrioritet(currentOperation);
  if (prevPrioritet <= currentPrioritet) {
    const b = result.pop();
    const a = result.pop();
    const c = calcFraction(a, b, prevOperation);
    result.push(c);
    handleOperand(result, stack, currentOperation);
  } else {
    stack.push(prevOperation, currentOperation);
  }
}

// https://habrahabr.ru/post/50196/
export function getResult(rawExpression) {
  const expression = [
    { type: 'operation', value: '(' },
    ...rawExpression,
    { type: 'operation', value: ')' },
  ];

  const result = [];
  const stack = [];

  /* eslint arrow-parens: 0 */
  expression.forEach(item => {
    switch (item.type) {
      case 'number':
        result.push(item.value);
        break;

      case 'operation':
        handleOperand(result, stack, item.value);
        break;

      default:
        console.warn(`Type [${item.type}] is not handle`);
    }
  });

  if (stack.length || result.length > 1) {
    throw new Error('Выражение неверно');
  }

  return result.pop();
}
