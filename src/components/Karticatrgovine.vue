<template>
<div class="Karticatrgovine">
    <div class="trgovina-inner">
        <div class="trgovina-text-wrap">
            
        </div>
        <div class="trgovina-image-wrap">
            <router-link to="/Links"><img :src="trgovina.src" class="image"></router-link>
        </div>
        <div class="trgovina-detail">
            <h2>{{trgovina.title}}</h2>
            
            <p>{{trgovina.text}}</p>
        </div>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'trgovina',
        props: ['trgovina']
    }
</script>



<style lang="scss">
    .Karticatrgovine{
        flex: 1 1 33.333%;
        width: 100%;
        padding: 25px;
    }
    .trgovina-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    .trgovina-image-wrap{
        position: relative;
        z-index: 1;
        transform-origin: center;
    }
    .trgovina-image-wrap .image{
        width: 40%;
        filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
    }
    .trgovina-text-wrap{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
    }
    .trgovina-text-wrap h2{
        color: #313131;
        font-size: 128px;
        font-weight: 900;
        opacity: 0.2;
        transform-origin: center;
    }
    .trgovina-detail{
        background-color: #FFF;
        padding: 25px;
        margin: 0px-25px;
    }
    .trgovina-detail h2{
        font-size: 24px;
        font-weight: 700;
        color:#676767;
        margin-bottom: 15px;
    }
    .trgovina-detail p{
        font-size: 14px;
        line-height: 1.5;
        font-weight: 300;
        color: #676767;

    }
</style>