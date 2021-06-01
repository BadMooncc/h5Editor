<template>
  <div id="app">
    <router-view/>
    <button @click="clickFn">点击</button>
    <button @click="clickFn2">点击2</button>
  </div>
</template>

<script>
import debounceFn from './utils/debounce'
import throttle from './utils/throttle'
export default {
  name: 'App',
  methods: {
    clickFn: debounceFn(() => {
      console.log(111);
    }),
    clickFn2: throttle(() => {
      console.log(222);
    })
  }
}  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
