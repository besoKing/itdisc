<template>
    <div class="container">
        <h4>Kategorije</h4>
        <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Chargers"><h4>Punjači</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            
        </div>
        <div class="kategorije-detail">
            
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Laptopi"><h4>Laptopi</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            
        </div>
        <div class="kategorije-detail">
            
        </div>
    </div>
  </div>

   <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Games"><h4>Games</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            
        </div>
        <div class="kategorije-detail">
            
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Tinte"><h4>Tinte</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            
        </div>
        <div class="kategorije-detail">
            
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Mobile"><h4>Mobiteli</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            
        </div>
        <div class="kategorije-detail">
            
        </div>
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
     .kategorije-detail{
        background-color: #FFF;
        padding: 25px;
        margin: 0px-25px;
    }
  
</style>