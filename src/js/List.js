document.cookie = "JSESSIONID=A4D4B6A122C5ECF451179AC2ABE8C8D7; path=/;  HttpOnly;";
// domain=10.10.7.95;

let v = {
  arr: []
};

let vm = new Vue({
  el: ".rootVue",
  data : v,
  // methods: {
  //   onLogin: getHttpSrc()
  // },
  updated: getHttpSrc()
});

function getHttpSrc() {
  $.ajax({
    url: `${App.urlBase}JqList`,
    data: {},
    type: "GET",
    dataType: "json",
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    headers: {
      "Content-Type": "application/json"
    },
    success: function (data,status,xhr) {
      console.log(data);
      // console.log("Cookie:" + xhr.getAllResponseHeaders());
      // if (App.ca(data)){
      //   window.location.href='VueTest.html';
      // }else {
      //   alert("登录失败")
      // }
    }
  });
}
