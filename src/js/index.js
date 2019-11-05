function hello(str) {
  alert(str);
}

function onLogin(id) {
  console.log("OK");
  let sendDara = {
    DLZH: 'test',
    MM: 'test',
    DLPT: '0',
    IMEI: '0'
  };

  $.ajax({
    url: 'http://10.10.7.95:8081/lddwFront/login',
    method: 'GET',
    // dataType: 'json', // 设置返回值类型
    dataType: "jsonp",
    jsonp: "callback",
    contentType: 'application/json', // 设置参数类型
    headers: {'Content-Type': 'application/json'},// 设置请求头
    xhrFields: {withCredentials: true}, // 跨域携带 cookie
    withCredentials: true,
    data: JSON.stringify(sendDara), // 传递参数
    error: function (xhr, status) {  // 错误处理
      console.log(xhr, status);
    },
    success: function (data, status) {  // 获取结果
      console.log(data);
    }
  })
}
