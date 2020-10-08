"use strict";

const AUTHOR = 'Dolgopolov';
let message = 'input your name';
let userAge = 0;

//alert(message);
//alert(` author is ${AUTHOR}`);
userAge = prompt(message, 25); //input text

alert(`You are ${userAge} years.`); //show message

let covidPositive = confirm('Are you COVID-19 positive?'); //choose Y/N
if(covidPositive) {
	alert('Go to home and use ginger');
} else {
	alert('Good, use mask anyway!');
};

//arrow function
let result = n => n * 2;
alert( result(3) );

//chang first var to var with arrows
/*function ask(question, yes, no) { //var1
	if (confirm(question)) yes()
		else no();
}*/
let ask = (question, yes, no) => confirm(question)?yes():no();
/*ask( "Do you agree?", 			//var1
function() { alert("You are agree"); },
function() { alert("cachled"); }
);*/
ask ("agree?",
()=> alert("agree!"),
()=> alert("no")
);



typeof message;