let numbers = [1,2,3];
let doubledNumbers = numbers.map(function(x){
  return x * 2;
});
$("#response").html(doubledNumbers);
