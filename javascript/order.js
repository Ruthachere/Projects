form = document.querySelector(".orderForm");
let todo = [];
/* function to add error message*/
function addErrorElement(inputElement,errorMessage) {
    let errorEle = inputElement.parentElement.querySelector(".error");
    if (!errorEle) {
     errorEle = document.createElement("p");
     errorEle.setAttribute("class","error");
     inputElement.parentElement.appendChild(errorEle);  
    }
   errorEle.textContent = errorMessage;
}
//function to remove error message
function removeErrorElement(inputElement) {
    let errorEle = inputElement.parentElement.querySelector('.error');
    if (errorEle) {
        errorEle.remove();
   }
}
//loading of eventlistener
form.addEventListener("submit", function(e) {
    e.preventDefault();
    //get form values
    const name = form.name;
    const email = form.email;
    const category = form.category;
    const meal = form.meal;
    const suggestions = form.suggestions;
    
    const todos = {
        name: name.value,
        email: email.value,
        category:category.value,
        meal: meal.value,
       suggestions:suggestions.value
    }
    //form validation
    let hasError = false;
    if (name.value.trim() == "") {
        addErrorElement(name, "This is required");
        hasError = true;
       } else if(name.value.length < 6){
        addErrorElement(name, "Enter atleast 6 characters");
        hasError = true;
       }
      else{

          removeErrorElement(name);
       }
       if (email.value.trim() == "") {
           addErrorElement(email, "This is required");
           hasError = true;
       }else{

          removeErrorElement(email);
       }
       if (meal.value.trim() == "") {
        addErrorElement(meal, "This is required");
        hasError = true;
    }  else{
       
       removeErrorElement(meal);
    }
    if (category.value.trim() == "") {
        addErrorElement(category, "This is required");
        hasError = true;
    }  else{
       
       removeErrorElement(category);
    }
    if (suggestions.value.trim() == "") {
        addErrorElement(suggestions, "This is required");
        hasError = true;
    }  else{
       
       removeErrorElement(suggestions);
    }
    if (hasError) {
        return;
    }
    form.reset();
    //function call of modal
    openPopup();
    //local storage
    let array = JSON.stringify(todos);
    localStorage.setItem('todo', array);
});
if(localStorage.getItem('todo')){
    array = localStorage.getItem('todo');
    todos = JSON.parse(array);   
}
//fuction to display modal
let popUp = document.getElementById('modals');
function openPopup(modes) {
    // popUp.classList.add("open-popup");
    const mode = ` <div class="modal">
    <h1>Thank You!</h1>
    <p>Your order has been taken and an email sent to you. <br> We will Get back to you immediately</p>
    <button class="btn" onclick="closePopup()">ok</button>
</div>`
popUp.innerHTML += mode;
};
//function to remove modal
function closePopup() {
    // popUp.remove;
    popUp.innerHTML = "";
};
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
