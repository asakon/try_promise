var promise = new Promise(function(resolve, reject) {
  if(/* 成功、失敗を分ける処理 */) {
    resolve("処理が成功しました");
  }
  else {
    reject("処理が失敗しました");
  }
});

promise.then(function(result) {
  console.log("成功時の処理");
}, function(err) {
  console.log("失敗時の処理");
});