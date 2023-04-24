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
    "personajes": []
  },
  mounted: function mounted() {
    var aPersonajes;
    return regeneratorRuntime.async(function mounted$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(this.fetchApi('https://rickandmortyapi.com/api/character'));

          case 2:
            aPersonajes = _context.sent;
            this.setModel("personajes", aPersonajes.results);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  methods: {
    fetchApi: function fetchApi(sUrl) {
      var res;
      return regeneratorRuntime.async(function fetchApi$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = regeneratorRuntime;
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch(sUrl));

            case 3:
              _context2.t1 = _context2.sent.json();
              _context2.next = 6;
              return _context2.t0.awrap.call(_context2.t0, _context2.t1);

            case 6:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    setModel: function setModel(sModel, aData) {
      this[sModel] = aData;
    }
  }
});