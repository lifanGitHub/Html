// let showData = "11";
var v = {
  showData : "0"
};
let vm = new Vue({

  el: ".btn",
  data : v,

  methods: {
    reverseMessage: function () {
      // this.message = this.message.split('').reverse().join('')
      v.showData = (parseInt(v.showData)+1).toString();
      console.log(v.showData);
      console.log(vm.$data.showData);
    }
  }

});
