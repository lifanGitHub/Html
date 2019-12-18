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
  // console.log(code);
  // $.ajax({
  //   url: `${App.urlBase}login/DDlogin`,
  //   data: {code: code},
  //   type: "GET",
  //   dataType: "json",
  //   // headers: {
  //   //   "Content-Type": "application/json"
  //   // },
  //   crossDomain: true,
  //   xhrFields: {
  //     withCredentials: true
  //   },
  //   success: function (data,status,xhr) {
  //     console.log(data);
  //     console.log(xhr);
  //     console.log("Cookie:" + xhr.getAllResponseHeaders());
  //     // console.log(document);
  //     // if (App.ca(data)){
  //     //   localStorage.setItem( "session", JSON.stringify( window.sessvars) );
  //     //   localStorage.setItem( "session", JSON.stringify(sessionStorage.getItem()) );
  //     //   window.location.href='List.html';
  //     // }else {
  //     //   alert("登录失败")
  //     // }
  //   }
  // });

}

