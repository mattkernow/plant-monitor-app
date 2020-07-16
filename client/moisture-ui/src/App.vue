<template>
  <div id="app">
    <SensorDisplay/>
  </div>
</template>

<script>
import SensorDisplay from './components/SensorDisplay.vue'

export default {
  name: 'App',
  components: {
    SensorDisplay
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
