<template lang="pug">
  input.operations-input(
    name="operations"
    @input="onInput"
  )
</template>

<script>

const REGEXP = /[-+/*()]+/;

export default {
  name: 'operations-input',
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    onInput(e) {
      let { value } = e.target;

      const isOperations = REGEXP.test(value);

      if (!isOperations && value) {
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

.operations-input
  width: (1.5 * $gutter);
  height: (1.5 * $gutter);
  text-align: center;
  border: 1px solid lightgray;
</style>
