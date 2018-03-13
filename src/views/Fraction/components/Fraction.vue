<template lang="pug">
  .fraction
    fraction-input.fraction__input(
      name="numerator"
      :value="localNumerator"
      :disabled="disabled"
      @input="localNumerator = $event"
      @change="onChange"
    )

    hr.fraction__divider

    fraction-input.fraction__input(
      name="denominator"
      :value="localDenominator"
      :disabled="disabled"
      @input="localDenominator = $event"
      @change="onChange"
    )
</template>

<script>
import FractionInput from './FractionInput';

export default {
  name: 'fraction',
  components: {
    FractionInput,
  },
  props: {
    numerator: Number,
    denominator: Number,
    disabled: Boolean,
  },
  data: () => ({
    localNumerator: undefined,
    localDenominator: undefined,
  }),
  watch: {
    numerator: {
      immediate: true,
      handler(value) {
        this.localNumerator = value;
      },
    },
    denominator: {
      immediate: true,
      handler(value) {
        this.localDenominator = value;
      },
    },
  },
  methods: {
    onChange() {
      if (this.localNumerator !== undefined && this.localDenominator !== undefined) {
        this.$emit('change', {
          numerator: this.localNumerator,
          denominator: this.localDenominator,
        });
      } else {
        this.$emit('change');
      }
    },
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.fraction
  display: iinline-flex;
  flex-direction: column;
  align-items: center;

  &__input
    width: (1.5 * $gutter);

    padding: ($gutter / 4);
    text-align: center;
    font-size: 16px;

  &__divider
    width: 100%;
    border-style: solid;
</style>
