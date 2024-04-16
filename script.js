// const header = document.getElementById('header');
// console.log('The header element:' ,header)

// camel casing

// let fName;

// console.log(fName);

// let lName = 'Tinubu';

// if(fName === undefined) {
//     fName = 'Bola'
//     console.log(fName);
// }


// let isMarried = !true 

// if (isMarried) {
//     console.log('married')
// } else {
//     console.log('single')
// }


// const age = prompt('Enter your age')
// let message = null


// if(age > 18) {
//     message = "You're a young adult"
//     console.log(message)
// } else {
//     console.log(message)
// }




// object literal


// const actor = {
//     fName: 'Al',
//     lName: 'Pacino',
//     age: 60,
//     isMarried: true,
//     terminalIllness: undefined,
//     movies: {
//         action: 'Heat',
//         drama: 'Godfather',
//         thriller: 'The scent of a woman'
//     }
// }

// console.log(actor)


// remove margin from body

// document.body.style.margin = 0;

// const element = document.getElementById('container')


// // dynamically create h1
// const childElement = document.createElement('h1');

// // dynamically create text content
// const text = document.createTextNode('Hello');

// // append text content to h1
// childElement.appendChild(text);

// // append h1 to div container
// element.appendChild(childElement);

// // style h1
// function styleChildElement() {

// childElement.style.backgroundColor = '#FFC94A'
// childElement.style.color = "#A34343";
// childElement.style.margin = 0;
// childElement.style.textAlign = "center";
// childElement.style.padding = '1rem';
// }

// styleChildElement()

// let text = "Hello world!";


//  const answer = text.toUpperCase();

// console.log(answer)
// console.log(text)


// let fName = 'david';

// const firstLetter = fName.slice(0, 1)
// console.log(firstLetter);

// const capitaliasedFirstLetter = firstLetter.toUpperCase();
// console.log(capitaliasedFirstLetter)


// const otherLetters = fName.slice(1, 5);
// console.log(otherLetters);

// const newFName = `${capitaliasedFirstLetter}${otherLetters}`

// const concatenantedResult = capitaliasedFirstLetter + " " + otherLetters;

// console.log(newFName);
// console.log(fName);
// console.log(concatenantedResult)



// let academy = "FLICKERAVE ACADEMY"


// // END RESULT
// let newAcademy = "Flickerave Academy";

//create or define our function that calls my name

function sayName() {
    console.log('David');
}

// function invocation

// sayName()

// create a fn that adds up two numbers


function addTenAndTwo() {
    console.log(10 + 2)
}

// addTenAndTwo()

// re-usable functions

function addTwoNumbers(dodo, rice) {
    console.log(dodo + rice)
}

// addTwoNumbers(10, 15);
// addTwoNumbers(12, 4);
// addTwoNumbers(100, 200);


// function greetUser(greeting, user) {
//     console.log(`${greeting}, ${user}`)
// }


// let myGreeting = "good day"
// let user = 'Mike'

// greetUser('Hello', 'David')
// greetUser('hi', 'Deji')
// greetUser(myGreeting, user)



// let username = prompt('enter your username')
// let password = prompt('enter your password')



// let details = getDetails(username, password)
// console.log(details)

// function squareNum(num) {
//     return num**2;
// }

// let fiveSquare = squareNum(5)
// let tenSquare = squareNum(10)

// console.log('five square:' ,fiveSquare)
// console.log('ten square:' ,tenSquare)


// create a reusable pure function that raises a number to the power of 3

// function squareToThree(num) {
//     // return num * num * num
//     return num**3
// }

// let raise5ToPower3 = squareToThree(5)
// console.log(raise5ToPower3)


// default parameters

// function welcomeUser(greeting = 'hello', username = 'user') {
//     return `${greeting}, ${username}`
// }

// let user1 = welcomeUser('hi', 'Deji')
// console.log('user1:' , user1)


// function mulltiplyTwoNumbers(num1 = 2, num2 = 3) {
    
//     return `${num1 * num2}`
// }

// let twoTimesThree = mulltiplyTwoNumbers()
// console.log('2 * 3:' , twoTimesThree);


// function getDetails(username, password) {
//     let message = `${username} ${password}`
//     console.log('username param:' ,username)
//     console.log('password param:' , password)
//     return message;
// }


// let details2 = getDetails('deji123', '123')
// console.log(details2)


// function expression

// let functionName = function (fName) {    
//     return `${fName}`
// }


// let result = functionName('Deji')
// console.log(result)

// create a program that verfies a users voting right > 18

// pseudo code



// - get users age with prompt
//- pass the age from user into our verify fn
//- return boolean true/false
//use Boolean somewhere else



// let userAge = prompt('Enter your age')


// function verfiyAge(age) {
//     if(age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// let userSufferage =  verfiyAge(userAge)


// function checkUserSufferage(sufferage) {
//     if(sufferage) {
//         return `This user is eligible enough to vote`
//     } else {
//         return `This user is not eligible to vote`
//     }
// }

// let canUserVote = checkUserSufferage(userSufferage)
// console.log('can user vote?:' , canUserVote )


// let userAge = prompt('Enter your age')

//let verifyAge = function(age) {

// }
// let verfiyAge = function (age) {
//     if(age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }

// let userSufferage =  verfiyAge(userAge)

// let checkUserSufferage =  function (sufferage) {
//     if(sufferage) {
//         return `This user is eligible enough to vote 👍`
//     } else {
//         return `This user is not eligible to vote ❌`
//     }
// }

// let canUserVote = checkUserSufferage(userSufferage)
// console.log('can user vote?:' , canUserVote )

// dynamically create an element

() => {}  //anonymous arrow function (perfect for callbacks)
let arrowFunction = () => {}  //named arrow function

let sayHello = greeting =>  `${greeting}`  //implicit return
let result = sayHello('Hello')
// console.log(result)


// explicit return
let explicitReturn = (num1, num2, num3) => {
    return `${num1 + num2 + num3}`
} 

// let result2 = explicitReturn(1, 2, 3)
// console.log(result2);

//tipping calculator


let item = 'eggs'
let qty = 10
let price = 150
let receipt;

let totalCost = price * qty

let calcTip = (percentage , cost ) => {
    let calculatedTip = (percentage/100) * cost
    receipt = `Your total cost is ${cost}, your tip is ${calculatedTip}`
    return receipt;  
}

let result3 = calcTip( totalCost)
let result4 = calcTip( 1000)
console.log(result3)
console.log(result4)