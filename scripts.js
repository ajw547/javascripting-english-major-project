let userInput;
userInput= prompt("Type a number");
if(userInput.isInteger()){
  $("#response").html("<br/>" + "The number is an integer.");
} else {
  $("#response").append("<br/>" + "The number is not an integer.");
}
