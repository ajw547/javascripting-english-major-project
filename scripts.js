let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort();
let removeSai;
removeSai = weapons.filter(function(weapon){
  return weapon.includes("o")+ weapon.includes("k");
}).join (", ");
$("#response").html(removeSai + ", and sai");
