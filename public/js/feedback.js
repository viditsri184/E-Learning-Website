const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    console.log(e.target);
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.textContent;
    }
    if(e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.textContent;
    }

})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        
        Thank You!
        
        Feedback : ${selectedRating}
        <br>
        We'll use your feedback to improve our customer support
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}


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
