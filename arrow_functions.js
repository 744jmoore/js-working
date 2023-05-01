//Ah-ha moment
//Reducing functions to use the arrow function


function sum(a,b){
    return a+b
}

let sum2 = (a,b) => a+b 


function isPositive(Number){
    return Number >=0
}

let isPositive2 = (Number) => Number >=0

function randomNumber(){
    return Math.random()
}

let randomNumber2 =() => Math.random()

document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener('click', ()=> console.log('click'))

/// add content to the page
const body = document.body
const div =document.createElement('div')
div.textContent="Adding some content"

