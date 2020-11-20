var output = [];
var a = 1;
function FizzBuzz(){
  if (a%3 === 0 && a%5 === 0){
      output.push('FizzBuzz');
  }
  else if (a%3 === 0){
      output.push('Fizz')
  }
  else if (a%5 === 0){
      output.push('Buzz')
  }
  else{
      output.push(a)
  }
  console.log(output);
  a=a+1;
}

FizzBuzz();
