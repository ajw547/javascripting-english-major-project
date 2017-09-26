let userInput;
userInput=prompt("Type a number.");
for(let i=1; i<=userInput; i=i+1){
if (i%2===0){
$("#response").append("<br />"+i+ " is even.");
}
if (i%2!==0){
$("#response").append("<br />"+i+ " is odd.");
}
}

let tipCalculator;
tipCalculator = function(total, tipRate){
  let tipAmount;
  tipAmount = tipRate * total;
  $("#response").html("Your tip is $" + tipAmount);
};
tipCalculator(50.00, 0.2);
