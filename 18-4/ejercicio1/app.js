Vue.component('personajes',{
  data(){
    return {personajes:[{name:"hola"},{"name":"chau"}]}
  },
  template:`     
    <div class="card" style="width: 18rem;" >
      <div class="card-body">
        <h5 class="card-title">{{this.name}}</h5>
      </div>
    </div>`,
    props:["name"]
})

var app = new Vue({
    el: '#app',
    data: {
      "personajes":[]
    },
    mounted: async function() { 
      const aPersonajes= await this.fetchApi('https://rickandmortyapi.com/api/character');
      this.setModel("personajes",aPersonajes.results);
    },
    methods:{
      async fetchApi(sUrl){
        const res= await (await fetch(sUrl)).json();
        return res;
      },
      setModel(sModel,aData){
        this[sModel]= aData;
      }
    }
    
  });
  