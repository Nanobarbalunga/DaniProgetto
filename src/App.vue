

<template>
  <header v-if="old">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper" :class="{
      'green': color,
      'red': !color
    }" >
      <CinappiWorld msg="ciaooooo!" :data="datetime" @OnPlay="onPlay" v-if="state">
        <h1>Bello il Lunedí!!!!</h1>
        <template #header>
          dfvfdsa
        </template>
      </CinappiWorld>


      <div v-else>Niente</div>
    </div>

    <div><h1>Datetime: {{ dataOggi }} <span id="cippo"></span></h1></div>
  </header>

  <main v-if="old">
    <button @click="onClickDateNow($event)" >Data di oggi</button>
    <button @click="onClickChangeColor($event)" >CambiaColore</button>
    <button @click="toggleState" >Toggle visibility!!!</button>

  </main>
  <div v-if="old">
    <h2>Esempio di un for</h2>
    <hr />
    <div class="box" v-for="(item, i) in listaProdotti" :key="item" :id="'myId-'+i">
      <h4>{{item.nome}}</h4>
      <p>{{ item.costo }}</p>
      <br />
    </div>
  </div>
</template>

<script >
// import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import CinappiWorld from './components/CinappiWorld.vue'

export default {
  name: 'App',
  components: {
    CinappiWorld,
    TheWelcome
  },
  data() {
    return {
      old:false,
      datetime: null,
      color: true,
      state:true,
      listaProdotti:[
        {
          nome:'panino',
          costo:12
        },
        {
          nome:'hamburger',
          costo:122
        },
        {
          nome:'banaa',
          costo:1
        }
      ]
    }
  },
  methods: {
    toggleState(){
      this.state=!this.state;
    },
    onPlay(e){
      // const $=this.JQuery;
      console.log('onplay: ',e)
      console.log('scope this: ',this)
      console.log('scope global: ',this.Window)

      // $(`#cippo`).text('vghjuikjbvghjmnbhjmnbhjmnbhjmnb')

    },
    onClickDateNow(e){
      console.log('evento:',e)
      this.datetime = Date.now();
    },
    onClickChangeColor(e){
      this.color=!this.color;
    },
    formattedDatetime(time='1900-01-01 00:00:00') {
      return new Date(time).toLocaleString();
    }
  },
  computed:{
    dataOggi(){
      return this.formattedDatetime(this.datetime);
    }
  },
  mounted(){
    this.datetime = '1988-10-24 00:00:00';
  }
}

</script>

<style scoped>

.red{
  background-color: red;
}

.green{
  background-color: green;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
