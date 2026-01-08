// Scope ,Execution Context, and Closures
/* scope hai ki aap apne created variables and functions kahan tak  use kar skte ho */
/*function abcd() {
  var a = 12; // var is function scoped , can be used only inside its parent function ...
} */

// agar aapka code kissi bhi {} ke andar nahi hai to aapka code global hai ....

// Execution Context ( Thoda Abstract hai => Hypothetical Scenario )
/* JS sabse pehle jse he aapka func dekhta hai sbse pehle js 
 bnata hai Execution Context, ye ek process h jo 
 diff phases mein chalta hai , memory phase and doosre ka
 naam hai execution phase ..... 
*/

// Lexical Scope vs Dynamic Scope
// JS mein bss lexical scoping chalti hai ....
/* lexical scoping kehti hai ki khn pr aap physically available ho, ye poori
 tareeke se depend krta hai ki aap ky access kr paaoge */
function abcd() {
  let a = 12;
  function defg() {
    console.log(a);
  }
}

// Closures - hote hein func, jo ki kissi parent func. k andr ho aur andr wala func return ho raha ho ,
// and returning fnc use kare , parent func ka variable ....
function maar() {
  let a = 12;
  return function () {
    console.log(a);
  };
}
maar(); 
