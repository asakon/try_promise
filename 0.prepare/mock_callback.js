// myFetchはサーバにリクエストを送る処理と想定
myFetch('example1.txt', function(err, result1){
  myFetch('example2.txt', function(err, result2){
    myFetch('example3.txt', function(err, result3){
      // すべての処理が終わったあとの処理
    });
  });
});
// それぞれのコールバックの中でのエラー処理を考慮した結果、可読性が下がってしまう例