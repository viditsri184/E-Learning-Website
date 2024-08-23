//Get all the required DOM elements

const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

//js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if(pwField.type === "password"){
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            }
            else{
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});

//js code to appear signup and login form
signUp.addEventListener("click", () =>{
    container.classList.add("active");
});

login.addEventListener("click", () =>{
    container.classList.remove("active");
});


//Dark and Light Mode configuration

//Get all the required DOM elements

const modeSwitch = document.querySelector(".menu ul li:last-child"),
    modeBtn = document.querySelector(".menu ul li:last-child i"),
    body = document.querySelector("body");

console.log(modeSwitch);


//check if the mode is already set to "Dark Mode" in localStorage
if(localStorage.getItem("mode") === "Dark Mode"){
    //add "dark" class to body and set modeSwitch text to "Light Mode"
    body.classList.add("dark");
    modeBtn.classList.replace("fa-regular", "fa-solid");
}

//add a click event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
    //toggle the "dark" class on the body element
    body.classList.toggle("dark");
    //check if the "dark" class is currently present on the body element
    const isDarkMode = body.classList.contains("dark");
    //set modeSwitch text based on "dark" class presence
    isDarkMode
    ? modeBtn.classList.replace("fa-regular", "fa-solid")
    : modeBtn.classList.replace("fa-solid", "fa-regular");
    //set localStorage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});


// footer section js

const submitBtn = document.querySelector(".submit-button"),
    box = document.querySelector(".email-section"),
    email = document.querySelector(".email-id");


submitBtn.addEventListener("click", () => {
    let emailId = email.value;
    box.innerHTML = `
        
    Thank You!
    ${emailId}
    <br>
    <br>
    Your email-id has been successfully registered with us!
`
});