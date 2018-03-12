<template lang="pug">
    ul.main-nav
      li(v-for="item in navList" :key="item.label")
        router-link.main-nav__link(:to="item.to").
          {{ item.label }}
</template>

<script>
const NAV_LIST = [
  { label: 'Калькулятор дробей', to: { name: 'fraction' } },
  { label: 'websocket server', to: { name: 'websocket' } },
];

export default {
  name: 'main-nav',
  created() {
    this.navList = NAV_LIST;
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.main-nav
  margin: 0;
  padding: 0;
  list-style: none;

  width: 100%;
  display: inline-flex;
  background-color: black;
  color: white;

  &__link
    display: inline-block;
    padding: $gutter;
    text-decoration: none;
    transition: all $transition-delay.l;

    &:hover,
    &.router-link-exact-active
      background-color: gray;

    &.router-link-active
      pointer-events: none;
</style>
