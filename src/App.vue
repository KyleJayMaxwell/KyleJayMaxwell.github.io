<template>
  <div id="app">
    <MainContainer title="KyleJayMaxwell"/>
  </div>
</template>

<script>

import MainContainer from './components/MainContainer.vue';

export default {
  name: 'App',
  components: {
    MainContainer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
