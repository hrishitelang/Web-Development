/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){
   line1();
   rightWall();
   line2();
   leftWall();
   line1();
   rightWall();
   line2();
   leftWall();
   line1();
}

function line1(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function rightWall(){
   turnLeft();
   move();
   turnLeft();
}

function line2(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function leftWall(){
   turnRight();
   move();
   turnRight();
}
