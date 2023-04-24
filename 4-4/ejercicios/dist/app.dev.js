"use strict";

var app = new Vue({
  el: '#app',
  data: {
    assets: []
  },
  mounted: function mounted() {
    var res;
    return regeneratorRuntime.async(function mounted$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = regeneratorRuntime;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch('https://api.coincap.io/v2/assets/'));

          case 3:
            _context.t1 = _context.sent.json();
            _context.next = 6;
            return _context.t0.awrap.call(_context.t0, _context.t1);

          case 6:
            res = _context.sent;
            this.assets = res.data;
            this.assets.sort(function (a, b) {
              return b.changePercent24Hr - a.changePercent24Hr;
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
});