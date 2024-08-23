//Get all the required DOM elements

const modeSwitch = document.querySelector(".menu ul li:last-child"),
    modeBtn = document.querySelector(".menu ul li:last-child i"),
    body = document.querySelector("body");


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

//courses section js

const htmlCss = document.querySelector(".html-css"),
    js = document.querySelector(".js"),
    java = document.querySelector(".java"),
    python = document.querySelector(".python"),
    swift = document.querySelector(".swift"),
    php = document.querySelector(".php");

htmlCss.addEventListener("click", () => {
    let pageUrl = "https://developer.mozilla.org/en-US/docs/Web/HTML";
    window.open(pageUrl, '_blank');
})

js.addEventListener("click", () => {
    let pageUrl = "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/";
    window.open(pageUrl, '_blank');
})

java.addEventListener("click", () => {
    let pageUrl = "https://www.freecodecamp.org/news/learn-java-free-java-courses-for-beginners/";
    window.open(pageUrl, '_blank');
})

python.addEventListener("click", () => {
    let pageUrl = "https://www.freecodecamp.org/news/python-programming-course/";
    window.open(pageUrl, '_blank');
});

swift.addEventListener("click", () => {
    let pageUrl = "https://www.codecademy.com/catalog/language/swift";
    window.open(pageUrl, '_blank');
});

php.addEventListener("click", () => {
    let pageUrl = "https://www.codecademy.com/learn/paths/php-skill";
    window.open(pageUrl, '_blank');
});

// footer section js

const submitBtn = document.querySelector(".submit-button"),
    box = document.querySelector(".email-section"),
    email = document.querySelector(".email-id");


submitBtn.addEventListener("click", () => {
    let emailId = email.value;
    box.innerHTML = `
        
    Thank You,
    ${emailId}
    <br>
    <br>
    Your email-id has been successfully registered with us!
`
});