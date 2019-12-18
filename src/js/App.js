const App = {
  urlBase : "http://10.10.7.95:8081/",
  // urlBase : "http://10.10.2.13:8081/",
  session: "hello",
  ca:function(res) {
    try {
      return res.result.success == true ? true : false;
    } catch (e) {
      return false;
    }
  }
};
