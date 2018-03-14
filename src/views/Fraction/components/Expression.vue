<template lang="pug">
  .expression
      div.expression__button(@click="addFraction")
        img(src="~mdi-svg/svg/plus.svg")
        span add fraction

      transition-group.expression__main(tag="div" name="fade")
        template(v-for="(item, index) in list")
          fraction(
            v-if="item.type === 'number'"
            v-bind="item.value"
            class="expression__fraction"
            :key="item.id"
            @change="onChange(item, $event)"
          )

          operations-input.expression__operations(
            v-if="item.type === 'operation-list'"
            :value="item.value"
            :key="item.id"
            @change="onChange(item, $event)"
          )

        img.expression__icon(src="~mdi-svg/svg/equal.svg" key="icon")

        fraction(
          v-bind="result"
          class="expression__fraction"
          key="result"
          disabled
        )

      .expression__error-message {{ errorMessage }}
</template>

<script>
import Fraction from './Fraction';
import OperationsInput from './OperationsInput';
import { getResult } from './utils';

export default {
  name: 'expression',
  components: {
    Fraction,
    OperationsInput,
  },
  data: () => ({
    errorMessage: null,
    list: [
      { id: 0, type: 'number', value: undefined },
      { id: 1, type: 'operation-list', value: undefined },
      { id: 2, type: 'number', value: undefined },
    ],
    result: {},
  }),
  computed: {
    hasAllToken() {
      return !this.list.map(_ => _.value).includes(undefined);
    },
  },
  methods: {
    onChange(item, value) {
      this.errorMessage = null;
      this.result = null;

      const index = this.list.indexOf(item);
      this.list.splice(index, 1, { ...item, value });
      this.calculation();
    },
    addFraction() {
      this.errorMessage = null;
      this.result = null;

      this.list.unshift(
        { id: this.list + 1, type: 'number', value: undefined },
        { id: this.list + 2, type: 'operation-list', value: undefined },
      );
    },
    calculation() {
      if (!this.hasAllToken) return;
      const expression = this.list.reduce((sum, item) => {
        switch (item.type) {
          case 'number':
            return sum.concat(item);
          case 'operation-list':
            /* eslint no-case-declarations: 0 */
            const operationList = item.value.split('').map(_ => ({ type: 'operation', value: _ }));
            return sum.concat(operationList);
          default:
            console.warn(`Type [${item.type}] is not handle`);
            return sum;
        }
      }, []);


      try {
        this.result = getResult(expression);
      } catch (e) {
        this.errorMessage = e.message;
        console.error(e);
      }
    },
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.expression
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__button
    display: flex;
    align-items: center;

    margin-bottom: $gutter;
    cursor: pointer;
    user-select: none;
    transition: all $transition-delay.l;

    &:hover
      opacity: 0.5;

  &__main
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

  &__fraction
    margin: ($gutter / 2  ) 0;

  &__operations
    margin-left: ($gutter / 2);
    margin-right: @margin-left;

  &__icon
    margin-left: ($gutter / 2);
    margin-right: @margin-left;

  &__error-message
    margin-top: auto;
    color: red;
    font-size: 12px;
</style>
