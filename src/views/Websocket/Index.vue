<template lang="pug">
  .h1(:class="$options.name")
    span {{ $options.name }}
</template>

<script>
export default {
  name: 'view-websocket',
};
</script>

<style lang="stylus">
.view-websocket
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
</style>
