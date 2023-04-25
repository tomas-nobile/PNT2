"use strict";

Vue.component("persona", {
  data: function data() {
    return {
      nombre: this.nombre,
      bandeja: [{
        desde: "ww",
        texto: "hola"
      }, {
        desde: "we",
        texto: "chau"
      }],
      mensaje: {
        desde: this.nombre,
        para: "",
        texto: ""
      },
      destinatarios: []
    };
  },
  computed: function computed() {
    console.log(this.mensaje);
  },
  mounted: function mounted() {
    this.setDestinatarios();
    console.log(this.destinatarios);
  },
  template: "    \n  <div class=\"card\" style=\"width: 18rem;\">\n  <h3>Bandeja de entrada de {{this.nombre}} </h3>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" v-for=\"m in bandeja\"><b>{{m.desde}}: </b>{{ m.texto }}</li>\n  </ul>\n  <div class=\"input-group mb-3\">\n  <select v-model=\"mensaje.para\" class=\"form-select\" aria-label=\"Default select example\">\n  <option value=\"\" selected disabled>Para</option>\n  <option v-for=\"d in destinatarios\" :value=\"d\">{{d}}</option>\n</select>\n  <input type=\"text\" v-model=\"mensaje.texto\" class=\"form-control\" placeholder=\"Escribe un mensaje\">\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-outline-secondary\" @click=enviarMensaje type=\"button\">Enviar</button>\n  </div>\n</div>\n</div>\n  ",
  props: ["nombre"],
  methods: {
    enviarMensaje: function enviarMensaje() {
      try {
        this.validarCampos();
        this.$emit("enviar", this.mensaje);
        this.resetMensaje();
      } catch (e) {
        alert(e);
      }
    },
    setDestinatarios: function setDestinatarios() {
      var _this = this;

      this.$parent.$children.forEach(function (e) {
        var nombreDest = e._props.nombre;
        if (nombreDest != _this.nombre) _this.destinatarios.push(e._props.nombre);
      });
    },
    validarCampos: function validarCampos() {
      if (this.mensaje.para == "" || this.mensaje.texto == "") throw new Error("completa los campos del usuario \"".concat(this.nombre, "\""));
    },
    resetMensaje: function resetMensaje() {
      this.mensaje = {
        desde: this.nombre,
        para: "",
        texto: ""
      };
    }
  }
});
var app = new Vue({
  el: "#app",
  data: {},
  mounted: function mounted() {},
  computed: {},
  methods: {
    transferirMensaje: function transferirMensaje(mensaje) {
      var destinatario = this.$children.find(function (e) {
        return e.nombre == mensaje.para;
      });
      destinatario.bandeja.push(mensaje);
    }
  }
});