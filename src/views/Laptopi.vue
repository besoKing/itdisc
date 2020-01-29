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
            Artikl: '',
            Cijenastara: '',
            Cijenanova:'',
            Title: Laptop
        }
    },
    watch:{
        '$route':'fetchData'
    },
    methods:{
        fetchData(){
            db.collection('Links').where('Title', '==', 'Laptop').get()
            .then(querySnapshot=>{
                this.Artikl=doc.data().Artikl,
                this.Cijenastara=doc.data().Cijenastara,
                this.Cijenanova=doc.data().Cijenanova
            })
        }
    }

}
</script>

<style scoped>

</style>