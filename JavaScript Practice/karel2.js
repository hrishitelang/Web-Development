/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){
   goDiagonal();
   goDiagonal();
   goDiagonal();
   goDiagonal();
   putBeeper();
}

function goDiagonal(){
   putBeeper();
   move();
   turnLeft();
   move();
   turnRight();
}
