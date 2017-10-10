let userString, upperCaseMinusE, upperCasedString;
userString= prompt("What do you want to UPPeRCASe?");
upperCaseMinusE=function(string){
let result;
result = "";
for (let i=0; i < string.length; i=i+1){
  let letter;
  letter = string[i];
  if ( letter=== "e"){
    result = result + letter;
  } else {
    result = result + letter.toUpperCase();
  }
}
return result;
};
upperCasedString=upperCaseMinusE(userString);
$("#response").html(upperCasedString);
