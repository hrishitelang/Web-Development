var n = 99;
function nnbottles(){
    while(n >= 0){
        if (n === 1){
        console.log(n+" bottles of beer on the wall, "+n+" bottles of beer.");
        n--;
        console.log("Take one down and pass it around, no more bottles of beer.");
     }
        else if(n === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        n--;
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
     }
        else{
        console.log(n+" bottles of beer on the wall, "+n+" bottles of beer.");
        n--;
        console.log("Take one down and pass it around, "+n+" bottles of beer on the wall.");
     }
    }

}
