// synchronous and asynchronous JS
/*koi v line JS mein line by line chalega aur ye natural pattern
  bhi hota hai ki code line by line chale,
  but kabhi kabaar aise cases aate hai life mein jaha par aapka code
  wait karta hai utni der mein agla code chal jaata hai */
console.log("hey1");
console.log("hey2");
setTimeout(() => {
  console.log("hey3");
}, 2000);
console.log("hey4");

/* aesa code jo line by line chale wo hota hai sync code (synchronous)
  aur aisa code jo jab chalne ke liye ready ho jaaye wo hai async */

// Callback -> ek fnc ko agar aap ek aur function bhej de rahe ho parameter mein , to wo
// parameter wala fnc kehlata hai callback ....
function kuchderBaadChalunga(fnc) {
  setTimeout(fnc, 3000);
}
kuchderBaadChalunga(function () {
  // callback hota hai ek fnc k andr ek fnc pass karna ...
  console.log("hey");
});

/* Promises - aap ek promise bnaate ho jo ki 2 states mein se ek state mein 
 jaa skta hai and wo yaa to 
 resolve hoga ya toh reject hoga ab wo kya hoga ye toh waqt he btaayega 
 par humein dono k liye code likhna padta hai 
*/

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res(" resolved with " + rn);
    else " rejected with " + rn;
  }, 3000);
});
pr.then(function (val) {
  // resolve hua toh then chlega
  console.log(val);
}).catch(function (val) {
  //reject hua toh catch chlega
  console.log(val);
});

// async-await syntax -> cleaner way to resolve and reject promise .....
let pr1 = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res(" resolved with " + rn);
    else " rejected with " + rn;
  }, 1000);
});
async function abcd() {
  try {
    let val = await pr1;
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}
abcd();
