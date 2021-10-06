@@include("popup.js");
@@include("hover.js");


document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelectorAll(".form__input")
        .forEach(item => {
            item.value = "";
        });

    alert("Your message was send!");
})