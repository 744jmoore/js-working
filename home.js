
// let amount = Number.parseFloat("123.12a");
// let amount = +(Number.parseFloat(123.92645).toFixed());
// console.log(amount)

// console.log(typeof amount)

// function showMessage(message) {
//     document.getElementById('message').textContent = message;
// }
function showMessage(message) {
    document.querySelector('#message').textContent = message;
}

let person ={
    firstname: 'testy',
    lastname: 'tester',
    age: 38
};
function incrementAge(){
    person.age++;
}
incrementAge(person);
showMessage(person.age)


// showMessage(person.lastname);

// (amount < 120) ? showMessage('yes'): showMessage('no')
// console.log(showMessage)


// let message = 'hello';
// function changemessage(message){
//     message = 'Hi!';
//     console.log(this.message)
// }
// changemessage(message);
// showMessage(message);


// let s = 'hello';
// showMessage(s.charAt(1));

// const button = document.getElementById('see-review');
// button.addEventListener('click', function () {
//     console.log('click');

//     const review = document.getElementById('review');
//     if (review.classList.contains('d-none')) {
//         review.classList.remove('d-none');
//         button.textContent="CLose Review";
//         button.style.color='Red';
//     } else {
//         review.classList.add('d-none');
//         button.textContent="See review";
//         button.style.color='black';
//     }
// });

// // find
// const values=['a','bbb','c','dddd','z'];

// values.forEach(function(item){
// // console.log(item);
// if(item === "z"){
//     console.log('true')
// }else{console.log('false')}
// });


// hide an array item
// const containers = document.getElementsByClassName('container');
// containers[0].classList.add('d-none');

// console.log(containers);


// function foo(a, b, c) {
//     console.log( b );
//   }
//   foo( 4, 5, 6 );

//   for (let i=0; i <= 5; i++) {
//     console.log(i);
//   }