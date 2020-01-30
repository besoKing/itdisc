<template>
    <div class="container">
        <h4>Kategorije</h4>
    <div class="card text-center">
        <div class="card-body">
           <router-link to="/Chargers"><h4>Punjači</h4></router-link>
        </div>
    </div>

    <div class="card text-center">
        <div class="card-body">
            <router-link to="/Laptopi"><img src="@/assets/laptop.png"></router-link>
            <h4>Laptopi</h4>
        </div>
    </div>

    <div class="card text-center">
        <div class="card-body">
           <router-link to="/Games"><h4>Games</h4></router-link>
        </div>
    </div>

    <div class="card text-center">
        <div class="card-body">
            <router-link to="/Tinte"><h4>Tinte</h4></router-link>
        </div>
    </div>

    <div class="card text-center">
        <div class="card-body">
            <router-link to="/Mobile"><h4>Mobiteli</h4></router-link>
        </div>
    </div>
    

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.card {
    margin: 10px
  }
  
</style>