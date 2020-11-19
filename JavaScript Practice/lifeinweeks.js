function lifeInWeeks(age) {
/************Don't change the code above************/
var remaining = 90-age;
var month = 12 * remaining;
var week = 52 * remaining;
var days = 365 * remaining;
console.log("You have "+days+" days, "+week+" weeks, and "+month+" months left.")
/*************Don't change the code below**********/
}

lifeInWeeks(56);
