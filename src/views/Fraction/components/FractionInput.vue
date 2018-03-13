<template lang="pug">
    input.fraction-input(
      name="denominator"
      v-mask="'################'"
      :value="value"
      @input="onInput"
      :disabled="disabled"
    )
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'fraction-input',
  directives: {
    mask,
  },
  props: {
    value: Number,
    disabled: Boolean,
  },
  mounted() {
    this.margin = this.$el.offsetWidth - this.$el.clientWidth;
  },
  methods: {
    onInput(e) {
      e.target.style.width = null;
      const { offsetWidth, scrollWidth } = e.target;

      if (offsetWidth < scrollWidth) {
        e.target.style.width = `${scrollWidth + this.margin}px`;
      }

      const { value } = e.target;
      this.$emit('input', value !== '' ? +value : undefined);
      this.$emit('change');
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
