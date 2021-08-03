console.log("Hello world");
confirm("If you have any problem then please contact us at the chat/mail");

// const search = document.getElementById("search");
// const submit = document.getElementById("submit");

console.log(submit);
console.log(search);

// YOUR CODE  :-)

// function search(){


// }

const search = document.getElementById("search");
const submit = document.getElementById("submit");
//CKECKING IF IT IS WORKING OR NOT.

search.addEventListener('click',()=>{
console.log("Search button has been clicked");
});
submit.addEventListener('click',()=>{
console.log("submit button has been clicked");
});