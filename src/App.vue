<script>
import HelloWorld from "@cp/HelloWorld.vue";
export default {
    name: 'Root',
    components: { HelloWorld }
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
