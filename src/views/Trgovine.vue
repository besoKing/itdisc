<template>
  <div class="container">
        <h4>Trgovine</h4>
        <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Links"><h4>Links</h4></router-link>
                        <router-link to="/Links"><img src="../assets/links.png"></router-link>
                    </div>
        
    </div>
    </div>


    <div class="card-body">
                <div class="kategorije-inner">
                   
                    <div class="kategorije-text-wrap">
                     
                        <router-link to="/Instar"><h4>Instar Informatika</h4></router-link>
                         <router-link to="/Instar"><img src="../assets/instar.png"></router-link>
                    </div>
        
    </div>
    </div>
  </div>

</template>

<script>

</script>



<style lang="scss">

  .card {
    margin: 100px;
    
  }

    .kategorije-inner{
        position: relative;
        padding: 75px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    
   
    
    .kategorije-text-wrap{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
    }
    
    
</style>
