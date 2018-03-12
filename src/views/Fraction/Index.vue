<template lang="pug">
  .view-fraction
    .h1(:class="$options.name")
      span {{ $options.name }}
</template>

<script>
export default {
  name: 'view-fraction',
};
</script>

<style lang="stylus">
.view-fraction
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
</style>
