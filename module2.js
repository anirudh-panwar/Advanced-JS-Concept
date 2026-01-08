/* this keyword ek special keyword hai, qnki jse ki baaki saare keyword
ki value ya nature same rehta hai,  this ki value ya nature badal 
jaata hai iss bat se ki aap usey khn use kar rhe ho */

// this keyword in different contexts :-

// global scope mein this ki value window hoti hai .....
console.log(this);

// function scope mein bhi this ki value window hoti hai .....
function abcd() {
console.log(this);
}
abcd();

// method mein this ki value window nhi hoti ,method ke andr this ki value object ho jaati hai .....
let obj = {  
    name:"harsh",
    sayName: function () { // jab bhi koi aesa function , jo object k andr ho usey hum object kehte hein 
        console.log(this);
    },
};
obj.sayName();

// Event Handler mein this wo hota hai , jispe event listener laga ho .....

document.querySelector("h1")
.addEventListener("click", function (){ // iss event handler pe this hoga h1
    console.log(this);
})

/* this keyword value in different contexts :-

global - window
function - window 
method with es5 fnc - object
method with es6 arrow fnc - window
es5 function inside es5 method - window 
arrow function inside es5 method - object 
event handler - element
class - clank object 
*/

// arrow function and lexical this 
let obj1  = {
    sayName: () => {  // arrow fnc apne this ki value parent se lete hein ,
    //  parent h iss waqt obj ,
    //   aur obj bana hua h global space mein therefore this ki value hogi global ....
        console.log(this);

    },
}

// manual binding (call apply bind)
// function ko call karte waqt aap set kr skte ho ki uski this ki value kya hogi ...
let obj2 = {
    name: "Anirudh",
    age:22,
};
function vbr (){
    console.log(this);

}
vbr.call(obj); 