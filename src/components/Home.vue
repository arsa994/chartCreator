<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <h1 id="title-header" class="display-1">ChartLAB</h1>
        <p id="title-description" class="lead">Create data visualization with ChartLAB!</p>
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

.btn-primary{
  background: linear-gradient(to right, #0099ff, #00ccff);
  border: none;
  border-radius: 0;
}

#title-header, #title-description{
  
}
</style>
