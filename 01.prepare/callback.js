var sayWorld = function(){
  console.log('World!');
};

var sayHello = function(callback){
  console.log('Hello, ');
  callback();
}

sayHello(sayWorld);