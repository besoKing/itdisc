<template>
    <div id="proizvodi">
    <div class="container">
        <div class="card text-center">
        <div class="card-body" v-for="linkse in links" v-bind:key="linkse.artikl">
            <div class="artikl">
                {{linkse.artikl}}
            </div>
            <div class="price">
                <h4>Nova cijena: {{linkse.newprc}}</h4>
                <h8>Stara cijena: {{linkse.oldprc}}</h8>
            </div>
        </div>
        </div>
        <div class="card text-center">
         <div class="card-body" v-for="instare in instar" v-bind:key="instare.artikl">
            <div class="artikl">
                {{instare.artikl}}
            </div>
            <div class="price">
                <h4>Nova cijena: {{instare.newprc}}</h4>
                <h8>Stara cijena: {{instare.oldprc}}</h8>
            </div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
    import db from '../components/firebaseInit'
    export default {
    name:'proizvodi',
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
                    'title':doc.data().Title 
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
                    'title':doc.data().Title 
                }
                this.instar.push(data)
            })
        })
    }
}
</script>

<style lang="scss">
    .container{
        flex: 1 1 33.333%;
        width: 100%;
        padding: 25px;
    }
    .card-body{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
      .card {
    margin: 10px
  }
</style>