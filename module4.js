// API ek URL hota hai jispe jaane pe aapko kuch na kuch data milta hai .....
// aur data JSON format mein hota hai (Javascript Object Notation)
/* for ex :- JSON Format = 
{
 "name " : "Anirudh"
 }
*/
// fetch API -> Js mein inbuilt fnc h, jiska naam h fetch() iske andr aap jo mann mein aye wo URL likh sakte ho ....
fetch("https://randomuser.me/api/") // fetch iss URL pe jaata h aur data leke aata hai....
.then((rawdata) => { // fetch qnki promise based hai toh isko use krne ke 2 tareeke hai ....
    console.log(rawdata);
    return rawdata.json();
})
.then((data) => {
    console.log(data.results[0].name.first);
})
.catch((err) => {
    console.log(err);
});
    /* WORKING OF FETCH API ---> Sabse pehle fetch() mein aap ek URL feed karte ho, jo bhi api ka data hai 
    fetch internet pe jaata hai uss data ko nikaalta hai .
    Pehle then ke andar aapke paas raw data aata h jise aap use nhi kar skte toh aapko hmesha use json 
    mein convert karna padta hai */

    /* GET - > kissi URL pe jaao aur data leke aao , POST -> kissi 
    URL pe data bhejoo... */