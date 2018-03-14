<template lang="pug">
    input.fraction-input(
      ref="input"
      name="denominator"
      :value="value"
      @input="onInput"
      :disabled="disabled"
    )
</template>

<script>

const REGEXP = /^[-\d]+$/;

export default {
  name: 'fraction-input',
  props: {
    value: Number,
    disabled: Boolean,
  },
  watch: {
    value() {
      this.$nextTick(this.handleSize);
    },
  },
  mounted() {
    this.margin = this.$el.offsetWidth - this.$el.clientWidth;
  },
  methods: {
    onInput(e) {
      let { value } = e.target;

      if (!REGEXP.test(value)) {
        if (value !== '') {
          value = this.value;
          e.target.value = value;
        }
      }

      this.$emit('input', value !== '' ? +value : undefined);
      this.$emit('change');
    },
    handleSize() {
      const { input } = this.$refs;
      input.style.width = null;
      const { offsetWidth, scrollWidth } = input;

      if (offsetWidth < scrollWidth) {
        input.style.width = `${scrollWidth + this.margin}px`;
      }
    },
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.fraction-input
  min-width: 100%;
  width: (1.5 * $gutter);
  height: (1.5 * $gutter);
  padding: 0 ($gutter / 4);
  text-align: center;
  font-size: 16px;
  border: 1px solid lightgray;

  &[disabled]
    background: white;
</style>
