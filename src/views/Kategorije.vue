<template>
    <div class="container">
        <h4>Kategorije</h4>
        <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Chargers"><h4>Punjači</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Chargers"><img src="../assets/punjaci.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Laptopi"><h4>Laptopi</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Laptopi"><img src="../assets/laptopi.png"></router-link>
        </div>
    </div>
  </div>

   <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Games"><h4>Games</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Games"><img src="../assets/games.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Tinte"><h4>Tinte</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Tinte"><img src="../assets/tinte.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Mobile"><h4>Mobiteli</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Mobile"><img src="../assets/mobile.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Keyboard"><h4>Tipkovnice</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Keyboard"><img src="../assets/tipkovnice.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Headphones"><h4>Slušalice</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Headphones"><img src="../assets/slusalice.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Adapteri"><h4>Adapteri</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Adapteri"><img src="../assets/adapteri.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Mouse"><h4>Miševi</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Mouse"><img src="../assets/miševi.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Podloge"><h4>Podloge za miš</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Podloge"><img src="../assets/podloga.png"></router-link>
        </div>
    </div>
  </div>

  <div class="card-body">
                <div class="kategorije-inner">
                    <div class="kategorije-text-wrap">
                        <router-link to="/Printeri"><h4>Printeri</h4></router-link>
                    </div>
        <div class="kategorije-image-wrap">
            <router-link to="/Printeri"><img src="../assets/printer.png"></router-link>
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
</style>