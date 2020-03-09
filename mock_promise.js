var promise = myFetch("example.txt");
promise.then(function(result){
  console.log("成功時の処理");
}).catch(function(error){
  console.log("失敗時の処理");
});