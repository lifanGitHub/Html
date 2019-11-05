function hello(str) {
  alert(str);
}

function callback() {
  console.log("OK");
}

function onLogin(id) {
  let sendDara = {
    DLZH: 'test',
    MM: 'test',
    DLPT: '0',
    IMEI: '0'
  };


  $.ajax({
    url: "http://10.10.7.95:8081/lddwFront/login",
    // data: {name: 'jenny'},
    type: "GET",
    dataType: "json",
    data: JSON.stringify(sendDara),
    success: function(data) {
      console.log(data)
    }
  });

  window.location.href='JQList.html';

  // $.ajax({
  //   url: 'http://10.10.7.95:8081/lddwFront/login',
  //   method: 'GET',
  //   // dataType: 'json', // 设置返回值类型
  //   async:false,
  //   dataType: "jsonp",
  //   jsonp: "callback",
  //   contentType: 'application/json', // 设置参数类型
  //   headers: {'Content-Type': 'application/json'},// 设置请求头
  //   xhrFields: {withCredentials: true}, // 跨域携带 cookie
  //   // data: JSON.stringify(sendDara), // 传递参数
  //
  //   error: function (xhr, status) {  // 错误处理
  //     console.log(xhr);
  //     console.log(status);
  //   },
  //   success: function (data, status) {  // 获取结果
  //     console.log(data);
  //   }
  // });

}
