console.log("I'm connected!")

function toggleCollapsibleNavbar() {
    console.log("you clicked the thing");
    var nav_items = document.querySelectorAll(".navbar-collapsible-item");

    nav_items.forEach(function (element) {

        if (element.classList.contains("navbar-item-visible")) {
            element.classList.remove("navbar-item-visible");
            element.classList.add("navbar-item-hidden-on-mobile");
        } else {
            element.classList.remove("navbar-item-hidden-on-mobile");
            element.classList.add("navbar-item-visible");
        }
    });
}

document.querySelector(".hamburger").addEventListener("click", toggleCollapsibleNavbar);
