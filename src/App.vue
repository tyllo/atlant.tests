<template lang="pug">
  #app
    header.app-header
      main-nav

    main.app-main
      router-view
  </div>
</template>

<script>
import MainNav from '@/components/MainNav';

export default {
  name: 'app',
  components: {
    MainNav,
  },
};
</script>

<style lang="stylus" src="@/styles/main.styl"></style>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

.app-header
  width: 100%;

.app-main
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-wrap: wrap;
</style>
