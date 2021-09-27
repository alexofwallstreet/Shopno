const popup = document.querySelector("#popup");

const gallery = document.querySelectorAll(".gallery__item");

gallery.forEach(galleryItem => {
    galleryItem.addEventListener("click", () => {
        popup.querySelector("source").srcset = galleryItem.querySelector("source").srcset;
        popup.querySelector(".popup__img").src = galleryItem.querySelector("img").src;
        popup.classList.add("popup__show");
        document.body.classList.add("scroll_off");
    })
})

popup.addEventListener("click", (e) => {
    if (e.target !== popup.querySelector("img")) {
        popup.classList.remove("popup__show");
        document.body.classList.remove("scroll_off");
    }
});

