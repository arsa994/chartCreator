<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
import Dashboard from './components/Dashboard'

export default {
  name: 'app',
  components: {
    Home, Dashboard
  }
}
</script>

<style>

</style>
