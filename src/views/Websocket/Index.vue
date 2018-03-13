<template lang="pug">
  .view-websocket
    h1.view-websocket__title.
      Взаимодействие с сервером по протоколу websocket

    transition-group.view-websocket__list(tag="ul" name="fade")
      li.view-websocket__item(v-for="item in list" :key="item.id")
        span {{ item.value }}
        img.view-websocket__icon(
          src="~mdi-svg/svg/close.svg" key="icon"
          @click="remove(item.id)"
        )
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import createWebsocketModule from './websocketModule';
import Api from './api';

const moduleName = 'websocket';
const { mapState, mapActions } = createNamespacedHelpers(moduleName);
const TIMEOUT = 3000;

export default {
  name: 'view-websocket',
  computed: {
    ...mapState(['list']),
  },
  created() {
    this.api = new Api('ws://echo.websocket.org/', TIMEOUT);
    this.$store.registerModule(moduleName, createWebsocketModule(this.api));
  },
  destroyed() {
    this.api.destroy();
    this.$store.unregisterModule(moduleName);
  },
  methods: {
    ...mapActions(['remove']),
  },
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.view-websocket
  width: 100%;
  padding: $gutter;

  display: flex;
  flex-direction: column;

  &__list
    margin: 0;
    padding: 0;
    list-style: none;

  &__item
    display: flex;
    align-items: center;
    margin-top: $gutter;
    margin-bottom: @margin-top;

  &__icon
    width: 16px;
    height: @width;
    margin-left: ($gutter / 2);
    cursor: pointer;
    transition: all $transition-delay.l;

    &:hover
      opacity: 0.5;
</style>
