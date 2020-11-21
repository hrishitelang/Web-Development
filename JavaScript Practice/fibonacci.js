function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    var output = []
    //Write your code here:
    var a = 0;
    var b = 1;
    var c = 0;
    for (i=0; i<n; i++){
        if (i===0 || i === 1){
            output.push(i)
        }
        else{
            c = a+b;
            output.push(c);
            a=b;
            b=c;
        }
    }

    //Return an array of fibonacci numbers starting from 0.
    console.log(output);
//Do NOT change any of the code below 👇
}
