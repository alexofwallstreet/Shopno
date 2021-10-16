const popup = document.querySelector("#popup");

const gallery = document.querySelector(".gallery");


gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        const galleryImg = e.target;
        popup.querySelector("source").srcset = galleryImg.srcset;
        popup.querySelector(".popup__img").src = galleryImg.src;
        popup.classList.add("popup_show");
        document.body.classList.add("scroll_off");
    }
})

popup.addEventListener("click", (e) => {
    if (e.target !== popup.querySelector("img")) {
        popup.classList.remove("popup_show");
        document.body.classList.remove("scroll_off");
    }
});

