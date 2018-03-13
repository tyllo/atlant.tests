class Fraction {
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

function calcFraction(a, b, operation) {
  switch (operation) {
    case '+':
      return Fraction.add(new Fraction(a), new Fraction(b));

    case '-':
      return Fraction.substraction(new Fraction(a), new Fraction(b));

    case '*':
      return Fraction.multiply(new Fraction(a), new Fraction(b));

    case '/':
      return Fraction.division(new Fraction(a), new Fraction(b));

    default:
      throw new Error(`Calc for operation [${operation}] is not exist`);
  }
}

/**
 * Преобразование из инфиксной нотации в обратную польскую запись
 * https://goo.gl/DfeBDT
 *
 * @param {[]} expression
*/
export function toOpnExpression(expression) {
  const result = [];
  const stack = [];

  /* eslint arrow-parens: 0 */
  expression.forEach(item => {
    switch (item.type) {
      case 'number':
        result.push(item);
        break;

      case 'operation':
        if (/[-+/*(]/.test(item.value)) {
          stack.push(item);
        } else if (item.value === ')') {
          let operation;
          do {
            operation = stack.pop();
            result.push(operation);
          } while (operation.value !== '(' && stack.length);

          operation = result.pop();
          if (operation.value !== '(') throw new Error('Выражение неверно');
        }
        break;

      default:
        console.warn(`Type [${item.type}] is not handle`);
    }
  });

  return result.concat(stack);
}

/** Вычисление из обратной польской записи
 * https://goo.gl/DfeBDT
 */
export function calcOpnExpression(expression) {
  const stack = [];

  /* eslint arrow-parens: 0 */
  expression.forEach(item => {
    switch (item.type) {
      case 'number':
        stack.push(item);
        break;

      case 'operation':
        /* eslint no-case-declarations: 0 */
        const b = stack.pop();
        const a = stack.pop();
        const c = calcFraction(a.value, b.value, item.value);
        stack.push({ type: 'number', value: c });
        break;

      default:
        console.warn(`Type [${item.type}] is not handle`);
    }
  });

  return stack.pop().value;
}
