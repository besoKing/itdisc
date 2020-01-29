<template>
  <main id="Trgovine">
      <section class="karticatrgovina">
          <Karticatrgovine v-for="trgovina in Trgovina" :key="trgovina.color" :trgovina="trgovina"> 

          </Karticatrgovine>
         
      </section>
  </main>
</template>



<script>
import Karticatrgovine from '@/components/Karticatrgovine';

  export default {
    name: 'Trgovine',
    components: {
      Karticatrgovine
    },
    data(){
        return{
            Trgovina:[
                {
                  title:'Links',
                  text:'Links d.o.o želi ponajprije zahvaliti svim onima koji su nam u proteklom periodu pružili povjerenje. Nadamo se da smo barem dijelom uspjeli opravdati Vaša očekivanja te Vam pomoći u odabiru informatičkog rješenja primjerenog Vašim zahtjevima.',
                  bgtext:'LINKS',
                  src: require('@/assets/links.png')
                },
                {
                  title:'Instar',
                  text: 'Tvrtka Instar informatika d.o.o. posluje od 2008. godine i bavi se maloprodajom, uvozom i veleprodajom informatičke i elektroničke opreme. Naši dobavljači su renomirani domaći, europski i svjetski distributeri i proizvođači IT opreme. Zahvaljujući efikasnim logističkim rješenjima, u mogućnosti smo ponuditi najbolje cijene za artikle koje prodajemo. Držimo samo najkvalitetniju robu na tržištu po izuzetno povoljnim cijenama, što potvrđuje velik broj stalnih kupaca te kontinuirani rast novih.',
                  bgtext:'INSTAR',
                  src: require('@/assets/instar.png')   
                }
            ]
        }
    }
}
</script>



<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'montseratt', sans-serif;
  }
  main{
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;

    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .karticatrgovina{
    display: flex;
    max-width: 1280px;
    padding: 25px;
    margin: 0 auto;
  }
</style>
