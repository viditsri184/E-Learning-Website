
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

// section buttons js

const knowBtn = document.querySelector(".know-more"),
    followBtn = document.querySelector(".follow"),
    knowMoreSection = document.querySelector(".container3"),
    followSection = document.querySelector(".container2");

knowBtn.addEventListener("click", () => {
    knowMoreSection.scrollIntoView({behavior: 'smooth'});
});

followBtn.addEventListener("click", () => {
    followSection.scrollIntoView({behavior: 'smooth'});
});

//profile-cards js

const msgBtns = document.querySelectorAll(".msg-button"),
    messageForm = document.querySelector(".contact-container");

msgBtns.forEach(msgBtn => {
    msgBtn.addEventListener("click", () => {
        messageForm.scrollIntoView({behavior: 'smooth'});
    });
});

//changing the heart buttons on clicking

const likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("active");
        if(likeBtn.classList.contains("active")){
            likeBtn.classList.replace("bx-heart", "bxs-heart");
            likeBtn.style.color = "red";
        }
        else{
            likeBtn.classList.replace("bxs-heart", "bx-heart");
            likeBtn.style.color = "var(--heading-color)";

        }
    });
});

//contact form display js

document.addEventListener('DOMContentLoaded', function () {

    const urlParams = new URLSearchParams(window.location.search);
    const messageSuccess = urlParams.get('messageSuccess');

    if (messageSuccess === 'true') {
        alert('Thank you! We have received your message successfully.');
    } else if (messageSuccess === 'false') {
        alert('Message submission failed. Please try again.');
    }
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