@@include("popup.js");
@@include("hover.js");


const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    alert("Your message was send!");
})