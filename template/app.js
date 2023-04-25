Vue.component('personajes',{
  data(){
    return {}
  },
  template:`     
    <div class="card" style="width: 18rem;" >
    <img class="card-img-top" :src=this.pic alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{this.name}}</h5>
      </div>
    </div>`,
    props:["name","pic"]
})


const app = new Vue({
    el: '#app',
    data: {
      assets: []
    },
    mounted: async function() {

    },
    computed:{
      
    },
    methods:{
      
    }
  });
  


  // Fetch data from a Service : 18-4 ejercicio 1
