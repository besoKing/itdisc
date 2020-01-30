<template>
  <div class="container">
        <h4>Trgovine</h4>
        <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Links"><h4>Links</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Links"><img src="../assets/links.png"></router-link>
        </div>
    </div>
    </div>


    <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Instar"><h4>Instar Informatika</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
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
    margin: 10px
  }

    .kategorije-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    .kategorije-image-wrap{
        position: relative;
        z-index: 1;
        transform-origin: center;
    }
    .kategorije-image-wrap .image{
        width: 100%;
        filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
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
