<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-1">ChartLAB</h1>
        <p class="lead">Create data visualization with ChartLAB!</p>
        <router-link to="/dashboard"><div class="btn btn-primary btn-lg">Go to chart creator</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.jumbotron{
  text-align: center;
}

.lead{
  margin-bottom: 100px;
}
</style>
