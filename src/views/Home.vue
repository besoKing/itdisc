<template>

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Dobrodošli</h1>
    <p class="lead">Na ovoj stranici možete pronaći sve IT proizvode koji su na akciji na jednom mjestu</p>
    <router-link to="/Kategorije"><button v-on:click="say('hi')">Say hi</button></router-link>
  </div>
</div>
  

  
</template>

<script>
  export default{
    
  }
</script>
<style>
.jumbotron{
    
    background-color: lightcyan;
}
</style>
