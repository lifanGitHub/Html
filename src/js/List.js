// document.cookie = "JSESSIONID=38FB90CD808BC142261E938E64E6ED0E; path=/; domain=10.10.7.95; HttpOnly;";
// console.log(document.cookie);

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
    headers: {
      "Content-Type": "application/json",
      "cookie":"JSESSIONID=5440FD1EAE7B10609A93732F7D8764E6"
    },
    success: function (data,status,xhr) {
      console.log(data);
      console.log("Cookie:" + xhr.getAllResponseHeaders());
      // if (App.ca(data)){
      //   window.location.href='VueTest.html';
      // }else {
      //   alert("登录失败")
      // }
    }
  });
}
