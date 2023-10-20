const buttons = document.querySelectorAll("[data-carousel-button]");
 buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1:-1;
        const slides = button.
        closest("[data-carousel]") 
        .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) { 
            newIndex = slides.children.length - 1;
        }
        if (newIndex >= slides.children.length ) {
            newIndex = 0;
        } 

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
            
        
    })
 });

//  function myFunction() {
//     var x = document.getElementsByClassName("ul");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
const menu = document.querySelector(".ul");
const menuItems = document.querySelectorAll(".lis");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeicon");
const menuIcon = document.querySelector(".menuicon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
});
