<template>
<div class="container">
<div class="links">
     <h2>Instar</h2>
    <div class="card-body" v-for="instare in instar" v-bind:key="instare.artikl">
    <div class="links-inner">
        <div class="links-text-wrap">
            
        </div>
        <div class="links-image-wrap">
            
        </div>
        <div class="links-detail">
            <h2>{{instare.artikl}}</h2>
            <h4>Nova cijena: {{instare.newprc}}</h4>  
            <p>Stara cijena: {{instare.oldprc}}</p>
        </div>
    </div>
  </div>  
</div>
</div>
</template>

<script>
import db from '@/main.js'
export default {
    name:'instar',
    data(){
        return{
            instar:[]
        }
    },
    created(){
        db.collection('instar').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data={
                    'artikl':doc.data().Artikl,
                    'oldprc':doc.data().Cijenastara,
                    'newprc':doc.data().Cijenanova,
                    'title':doc.data().Title 
                }
                this.instar.push(data)
            })
        })
    }
}
</script>

<style scoped>
.container{
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

   
    display: flex;
    justify-content: center;
    align-items: center;
}
    .links{
        flex: 1 1 33.333%;
        width: 100%;
        padding: 25px;
    }
    .links-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    .links-image-wrap{
        position: relative;
        z-index: 1;
        transform-origin: center;
    }
    .links-image-wrap .image{
        width: 100%;
        filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
    }
    .links-text-wrap{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
    }
    .links-text-wrap h2{
        color: #313131;
        font-size: 128px;
        font-weight: 900;
        opacity: 0.2;
        transform-origin: center;
    }
    .links-detail{
        background-color: #FFF;
        padding: 25px;
        margin: 0px-25px;
    }
    .links-detail h2{
        font-size: 24px;
        font-weight: 700;
        color:#676767;
        margin-bottom: 15px;
    }
    .links-detail p{
        font-size: 14px;
        line-height: 1.5;
        font-weight: 300;
        color: #676767;
}

</style>