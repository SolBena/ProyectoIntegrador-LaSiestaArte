const iconoMenu = document.querySelector("#icon-menu");
menu = document.querySelector("#menu");

iconoMenu.addEventListener("click", (e)=> {
    menu.classList.toggle("active");
    document.body.classList.toggle("opacity")
});