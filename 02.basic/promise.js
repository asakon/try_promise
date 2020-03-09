var promise = new Promise(function(resolve, reject) {
  if(/* 成功、失敗を分ける処理 */) {
    resolve("処理が成功しました");
  }
  else {
    reject("処理が失敗しました");
  }
});

promise
  .then(function(){
  console.log("最初の処理");
})
 .then(function(){
   console.log("２番目の処理");
 })
 .catch(function(){
   console.log("エラー発生時の処理");
 })
 .then(function(){
   console.log("最後の処理");
 });