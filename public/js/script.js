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

//section buttons learn and follow js

const learn = document.querySelector(".learn")
    follow = document.querySelector(".follow"),
    learnSection = document.querySelector(".container3"),
    messageSection = document.querySelector(".contact-container");

learn.addEventListener("click", () => {
    learnSection.scrollIntoView({ behavior: 'smooth' });
});

follow.addEventListener("click", () => {
    messageSection.scrollIntoView({ behavior: 'smooth' });
});


//Message box js
document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const messageSuccess = urlParams.get('messageSuccess');

    if (messageSuccess === 'true') {
        alert('Thank you! We have received your message successfully.');
    } else if (messageSuccess === 'false') {
        alert('Message submission failed. Please try again.');
    }
});

// profile-card js

const ratings = document.querySelectorAll(".rating i");

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        rating.classList.toggle("active");
        if(rating.classList.contains("active")){
            rating.classList.replace("fas", "far");
        }
        else{
            rating.classList.replace("far", "fas");
        }
    });
})

// footer section js

const submitBtn = document.querySelector(".submit-button"),
    box = document.querySelector(".email-section"),
    email = document.querySelector(".email-id");

    console.log(submitBtn, box, email);


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

