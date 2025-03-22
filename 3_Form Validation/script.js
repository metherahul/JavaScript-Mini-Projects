let form = document.getElementById("myform")
let username = document.getElementById("username");
let password = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");
let errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (event)=>{
    event.preventDefault(); // Prevent default form submission initially
    let isValid = true;

    // Clear previous error messages
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    //Username validation
    if(username.value.trim() === ""){
        usernameError.innerHTML = "Username field is empty";
        isValid = false;
    }else if(username.value.length < 3){
        usernameError.innerHTML = "Username requires a minimum of 3 characters"
        isValid = false;
    }

    //Password Validation
    if(password.value.trim() === ""){
        passwordError.innerHTML = ("Password field is empty")
        isValid = false;
    }else if(password.value.length <8){
        passwordError.innerHTML = "Password requires a minimum of 8 characters"
        isValid = false;
    }

    // If valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        form.submit(); // Now submit the form
    }
});
