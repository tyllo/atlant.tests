<template lang="pug">
  .view-fraction
    h1.view-fraction__title Калькулятор дробей

    section.view-fraction__main
      expression
</template>

<script>
import Expression from './components/Expression';

export default {
  name: 'view-fraction',
  components: {
    Expression,
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.view-fraction
  padding: $gutter;
  width: 100%;

  display: flex;
  flex-direction: column;

  &__main
    height: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
</style>
