"use strict"; //for using newest JS features

const AUTHOR = 'Dolgopolov';
let message = 'input your name';
let userAge = 0;  // "let" instantiate keyword instead of old "var"
let weapon = null;
let personalTalant = 'power';

let sword = {
	name: "sword",
	damage: 10,
	power: 5, //min power of player to use
	agility: 5, // min agility of player to use
	intellect: 1 //min intellect of player to use
}

let armor = {
	name: "chain armor",
	value: 5
}



//alert(message);
//alert(` author is ${AUTHOR}`);
userAge = prompt(message, 25); //input text popup window

alert(`You are ${userAge} years.`); //show message

console.log(userAge); //show variable value in DevTools console

let isArmed = confirm('You found a weapon! Take it?'); //choose Y/N
if(isArmed) {
	weapon = sword;
	alert('You now have a ' + weapon.name);
} else {
	alert('You take nothing.');
};

//arrow function
let result = n => n - armor.value;
alert('damage on armored solder = ' + result(sword["damage"]) ); // alter option for access value of object field

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
ask ("start journey?",
()=> alert("let's begin with " + weapon.name),
()=> alert("canchled")
);

let namedWeapon = prompt("name your weapon 'sting'", "sword");
let personalWeapon = {  		// create new object
	[namedWeapon]:weapon.damage // use result from prompt function to create and name parameter of new object, and set value from weapon damage
	};
alert(personalWeapon.sting ? personalWeapon.sting : 'you name it wrong'); //if weapon named as 'sting' show damage from 'sting' parameter

//create object using function
function makeBoost(name, val) {
	return {
		name,
		val
	};
}
let boost = makeBoost(personalTalant, 2);
if (boost.name !== undefined) {
	alert("function makeBoost just make: " + boost.name);
}

alert("name" in boost);  // check if field "name" in object "boost" exists. alert show 'true' if exists

//loop object
console.log("loop through weapon object");
for(let key in weapon) {
	console.log(key);
	console.log(weapon[key]);
}

typeof message;