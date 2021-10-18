const hambg = document.getElementsByClassName("header__menu");
hambg[0].addEventListener("click", function () {
    this.classList.toggle("open");
});