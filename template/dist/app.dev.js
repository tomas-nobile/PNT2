"use strict";

Vue.component('personajes', {
  data: function data() {
    return {};
  },
  template: "     \n    <div class=\"card\" style=\"width: 18rem;\" >\n    <img class=\"card-img-top\" :src=this.pic alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{this.name}}</h5>\n      </div>\n    </div>",
  props: ["name", "pic"]
});
var app = new Vue({
  el: '#app',
  data: {
    assets: []
  },
  mounted: function mounted() {
    return regeneratorRuntime.async(function mounted$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  computed: {},
  methods: {}
}); // Fetch data from a Service : 18-4 ejercicio 1