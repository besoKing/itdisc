<template>
    <div id="proizvodi">
    <div class="container">
        <h4>Laptopi</h4>
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
    name:'laptopi',
    data(){
        return{
            links:[],
            instar:[]
        }
    },
    created(){
        db.collection('Links').where('Title','==','Laptop').get().then(querySnapshot => {
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
        db.collection('instar').where('Title','==','Laptop').get().then(querySnapshot => {
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

</style>