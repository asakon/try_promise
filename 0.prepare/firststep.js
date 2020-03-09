// 非同期処理
var getHelloWorld = function(){
  // setTimeoutを利用して非同期処理を施す
  setTimeout(function(){
    return 'Hello, World!'
  }, 0);
};

var result = getHelloWorld();
console.log(result);
