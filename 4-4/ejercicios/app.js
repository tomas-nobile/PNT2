var app = new Vue({
    el: '#app',
    data: {
      assets: []
    },
    mounted: async function() { 
      const res= await (await fetch('https://api.coincap.io/v2/assets/')).json();
        this.assets = res.data
        this.assets.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr);
    }
  });
  