<template lang="pug">
  input.operands-input(
    name="operand"
    @input="onInput"
  )
</template>

<script>

const REGEXP = /[-+/*()]+/;

export default {
  name: 'operands-input',
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    onInput(e) {
      let { value } = e.target;

      const isOperands = REGEXP.test(value);

      if (!isOperands && value) {
        value = this.value;
      }

      e.target.value = value || '';

      this.$emit('input', value || undefined);
      this.$emit('change', value || undefined);
    },
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.operands-input
  width: (1.5 * $gutter);
  height: (1.5 * $gutter);
  text-align: center;
  border: 1px solid lightgray;
</style>
