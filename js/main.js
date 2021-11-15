const rulesList = document.querySelector(".rules__list");
const rulesItems = rulesList.querySelectorAll(".rules__item");

rulesItems.forEach(item  => {
  item.addEventListener("click" , function() {
    item.classList.toggle("rules__item--active");
  })
});