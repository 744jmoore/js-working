//Updated answers had I taken the time to write the code in vs vs notepad

function multiply(a,b){
   return a*b
}
console.log(multiply);

const numbers = [1, 2, 3, 4, 5]
let sum = 0

for(let i=0; i<numbers.length;i++){
  sum += numbers[i];
}

console.log(sum);


const words =["One","Two","Three","Four","Five"]
let add_exclamation = words.map(function(add) {
  return add +"!"
});
console.log(add_exclamation);