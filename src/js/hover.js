const team = document.querySelectorAll(".team__list-item");

team.forEach(team_member => {
    const hover = team_member.querySelector(".team__hover-window");

    team_member.addEventListener("mouseenter", () => {
        hover.classList.add("team__hover-window-show");
    });

    team_member.addEventListener("mousemove", () => {

    });

    team_member.addEventListener("mouseleave", () => {
        hover.classList.remove("team__hover-window-show");
    });
})