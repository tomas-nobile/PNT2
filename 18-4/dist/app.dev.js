"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      valor: 'what?',
      cantidad: 0
    };
  },
  methods: {
    actualizarclicks: function actualizarclicks(e) {
      this.cantidad++;
    }
  }
});
app.component('personaje3', {
  data: function data() {
    return {};
  },
  template: "<div class=\"card\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{this.apellido}}, {{this.nombre}}</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n      <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n      <input type='button' @click='personajeClick()' value=\"Enviar!\">\n    </div>\n  </div>",
  props: ['nombre', 'apellido'],
  methods: {
    personajeClick: function personajeClick() {
      console.log('Se toco el personaje ' + this.nombre);
      this.$emit('click-personaje', 'click!!');
    }
  }
});
app.mount('#app');