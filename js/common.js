const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
});
//setAttribute - set:지정한다. attribute: html속성 어떤 html 속성을 지정한다.


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023