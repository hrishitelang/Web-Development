prompt("Enter your name:");
prompt("Enter your partner's name:");
var n = Math.random();
n = n * 100;
n = Math.round(n) + 1;
if (n > 70) {
  alert("Your love percentage is: "+n+"%. You both are such love birds!");
}
if (n <= 70 && n > 30) {
  alert("Your love percentage is: "+n+"%. You both are just okay couples.");
}
if (n <= 30 && n > 0) {
  alert("Your love percentage is: "+n+"%.");
}
