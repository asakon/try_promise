var promise = new Promise(function(resolve, reject) {
  if(/* 成功、失敗を分ける処理 */) {
    resolve("処理が成功しました");
  }
  else {
    reject("処理が失敗しました");
  }
});

promise
.all([
  process1(),
  process2(),
  process3(),
])
.then(function() {
  console.log("最後の処理");
});