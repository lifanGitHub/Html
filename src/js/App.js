const App = {
  urlBase : "http://10.10.7.95:8081/",

  ca:function(res) {
    try {
      return res.result.success == true ? true : false;
    } catch (e) {
      return false;
    }
  }
};
