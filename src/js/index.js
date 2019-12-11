// function hello(str) {
//   alert(str);
// }
//
// function callback() {
//   console.log("OK");
// }

let v = {
  authCode: ""
};

let vm = new Vue({
  el: ".rootVue",
  data : v,
  methods: {
    onLogin: onLogin
  }
});

function onLogin() {
  let code = v.authCode.replace(new RegExp(`"`,'g'),"");
  console.log(code);
  $.ajax({
    url: `${App.urlBase}login/DDlogin`,
    data: {code: code},
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      if (App.ca(data)){
        window.location.href='VueTest.html';
      }else {
        alert("登录失败")
      }
    }
  });


}
