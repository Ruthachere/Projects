const form = document.querySelector(".signupform");
let todos = [];
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
//function to toggle the password
const toggleVisibilty = document.getElementById("togglePassword");
toggleVisibilty.addEventListener("click", function () {
    var getPassword = document.getElementById("password");
    if(getPassword.type === "password"){
        getPassword.type ="text";
    }else{
        getPassword.type = "password";
    }  
})
   

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = form.email;
    const password = form.password;


    const todos = {
        email: email.value,
        password: password.value
    }
    //form validation
    let hasError = false;
    // if (email.value.trim() == "") {
    //     addErrorElement(email, "This is required");
    //     hasError = true;
    //    }
    //   else{

    //       removeErrorElement(email);
    //    }
    //    if (password.value.trim() == "") {
    //        addErrorElement(password, "This is required");
    //        hasError = true;
    //     } else if(email.value.length < 6){
    //         addErrorElement(email, "Enter atleast 6 characters");
    //         hasError = true;
    //        }
    //    else{

    //       removeErrorElement(password);
    //    }
    // function navigateTo() {
    //     window.location.href = `./${index.html}`;
    // }
    
    if (email.value.trim() === '' || password.value.trim() === '') {
       addErrorElement(email, "This is required");
       addErrorElement(password, "This is required");
            hasError = true;
    } else {
        // If all inputs are filled, navigate to the next page
        removeErrorElement(password);
        removeErrorElement(email);
       window.location.href = 'menu.html'; 
     } 
       form.reset();
       let array = JSON.stringify(todos);
       localStorage.setItem('task', array);
    });
    //storing of values in local storage
   if(localStorage.getItem('task')){
       array = localStorage.getItem('task');
       todos = JSON.parse(array);   
   }

// function toogleVisibilty() {
//     var getPassword = document.getElementById("password");
//     if(getPassword.type === "password"){
//         getPassword.type ="text";
//     }else{
//         getPassword.type = "password";
//     }
//    }