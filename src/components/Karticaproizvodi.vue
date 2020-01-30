<template>
<div class="Karticatrgovine">
    <div class="trgovina-inner">
        <div class="trgovina-text-wrap">
            
        </div>
        <div class="trgovina-image-wrap">
           
        </div>
        <div class="trgovina-detail">
            <h2>{{linkse.artikl}}</h2>
            <h4>Nova cijena: {{linkse.newprc}}</h4>  
            <p>Stara cijena: {{linkse.oldprc}}</p>
            <h6>Store: {{linkse.store}}</h6>
        </div>
    </div>
    <div class="trgovina-inner">
        <div class="trgovina-text-wrap">
            
        </div>
        <div class="trgovina-image-wrap">
            
        </div>
        <div class="trgovina-detail">
            <h2>{{instare.artikl}}</h2>
            <h4>Nova cijena: {{instare.newprc}}</h4>  
            <p>Stara cijena: {{instare.oldprc}}</p>
            <h6>Store: {{instare.store}}</h6>
        </div>
    </div>
  </div>
</template>

<script>
    import db from '@/main.js'
    export default{
        name: 'proizvodi',
        props: ['proizvodi'],
        data(){
        return{
            links:[],
            instar:[]
        }
    },
    created(){
        db.collection('Links').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data={
                    'artikl':doc.data().Artikl,
                    'oldprc':doc.data().Cijenastara,
                    'newprc':doc.data().Cijenanova,
                    'title':doc.data().Title,
                    'store':doc.data().Store 
                }
                this.links.push(data)
            })
        })
    },
    mounted(){
        db.collection('instar').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data={
                    'artikl':doc.data().Artikl,
                    'oldprc':doc.data().Cijenastara,
                    'newprc':doc.data().Cijenanova,
                    'title':doc.data().Title,
                    'store':doc.data().Store 
                }
                this.instar.push(data)
            })
        })
    }
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
        width: 100%;
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