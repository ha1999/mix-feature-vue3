<script>
import HelloWorld from "@cp/HelloWorld.vue";
export default {
    name: 'Root',
    components: { HelloWorld }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld name="Le Ngoc Ha" :age="18" :date="1999" />
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
  margin-top: 60px;
}
</style>
