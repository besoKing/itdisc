<template>

<div id="links">
    <div class="container">
        <h4>Links</h4>
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
</template>

<script>
import db from '../components/firebaseInit'
export default {
    name:'links',
    data(){
        return{
            links:[]
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
    }
}
</script>

<style scoped>
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
</style>