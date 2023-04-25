Vue.component("persona", {
  data() {
    return {
      nombre:this.nombre,
      bandeja: [{desde:"ww", texto: "hola" }, { desde:"we",texto: "chau" }],
      mensaje: { desde: this.nombre, para: "", texto: "" },
      destinatarios: [],
    };
  },
  computed: function () {
    console.log(this.mensaje);
  },
  mounted: function () {
    this.setDestinatarios()
    console.log(this.destinatarios);
  },
  template: `    
  <div class="card" style="width: 18rem;">
  <h3>Bandeja de entrada de {{this.nombre}} </h3>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" v-for="m in bandeja"><b>{{m.desde}}: </b>{{ m.texto }}</li>
  </ul>
  <div class="input-group mb-3">
  <select v-model="mensaje.para" class="form-select" aria-label="Default select example">
  <option value="" selected disabled>Para</option>
  <option v-for="d in destinatarios" :value="d">{{d}}</option>
</select>
  <input type="text" v-model="mensaje.texto" class="form-control" placeholder="Escribe un mensaje">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" @click=enviarMensaje type="button">Enviar</button>
  </div>
</div>
</div>
  `,
  props: ["nombre"],
  methods: {
    enviarMensaje() {
      try {
        this.validarCampos()
        this.$emit("enviar", this.mensaje)
        this.resetMensaje()
      } catch (e) {
        alert(e)
      }

    },
    setDestinatarios() {
      this.$parent.$children.forEach((e) => {
        const nombreDest= e._props.nombre;
        if(nombreDest!= this.nombre) this.destinatarios.push(e._props.nombre);
      });
    },
    validarCampos(){
      if(this.mensaje.para=="" || this.mensaje.texto=="" ) throw new Error(`completa los campos del usuario "${this.nombre}"`)
    },
    resetMensaje(){
      this.mensaje= { desde: this.nombre, para: "", texto: "" }
    }
  },
});

const app = new Vue({
  el: "#app",
  data: {},
  mounted: function () {},
  computed: {},
  methods: {
    transferirMensaje(mensaje){
      const destinatario=this.$children.find(e=>
        e.nombre == mensaje.para);

        destinatario.bandeja.push(mensaje)

    }
      
  },
});
