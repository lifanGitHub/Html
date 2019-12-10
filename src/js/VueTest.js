let classBtn = false;
let className = "btn";
let tt = "1";
let isA1 = false;
let isA2 = false;
let isA3 = true;
var v = {
  showData : "0",
  className : className,
  tt:tt,
  isA1:isA1,
  isA2:isA2,
  isA3:isA3,
  getBtn : function () {
    return "btn"
    // return classBtn ? "btn" : "btn2";
  }

};
let vm = new Vue({
  el: "#rootVue",
  data : v,
  methods: {
    reverseMessage: function () {
      // this.message = this.message.split('').reverse().join('')
      v.showData = (parseInt(v.showData)+1).toString();
      console.log(v.showData);
      console.log(vm.$data.showData);
    },
    click2: function () {
      // console.log(className);
      // className = className === "btn" ? "btn2" : "btn";
      v.tt = (parseInt(v.tt)+1).toString();
    }
  }

});
