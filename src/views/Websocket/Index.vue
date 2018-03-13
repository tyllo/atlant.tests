<template lang="pug">
  .view-websocket
    .h1(:class="$options.name").
      Взаимодействие с сервером по протоколу websocket
</template>

<script>
export default {
  name: 'view-websocket',
};
</script>

<style lang="stylus">
@require "~@/styles/variables";

.view-websocket
  width: 100%;
  padding: $gutter;

  display: flex;
  align-items: center;
  justify-content: center;
</style>
