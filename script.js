const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const bullet = document.querySelectorAll(".step hr");
const inputField1 = document.querySelector("input.one");
const inputField2 = document.querySelector("input.two");
const inputField3 = document.querySelector("input.three");

let current = 1;

function updateButtonState() {
    if (current === 1) {
        const inputValue = inputField1.value.trim();
        const isInputEmpty = inputValue === "";

        nextBtnFirst.disabled = isInputEmpty;
        if (nextBtnFirst.disabled) {
            nextBtnFirst.classList.add("disabled");   
        } else {
            nextBtnFirst.classList.remove("disabled");
        }
    } else if (current === 2) {
        const inputValue = inputField2.value.trim();
        const isInputEmpty = inputValue === "";

        nextBtnSec.disabled = isInputEmpty;
        if (nextBtnSec.disabled) {
            nextBtnSec.classList.add("disabled"); 
        } else {
            nextBtnSec.classList.remove("disabled");
        }
    } else if (current === 4) {
        const inputValue = inputField3.value.trim();
        const isInputEmpty = inputValue === "";

        submitBtn.disabled = isInputEmpty;
        if (submitBtn.disabled) {
            submitBtn.classList.add("disabled");
        } else {
            submitBtn.classList.remove("disabled");
        }
    }
}

inputField1.addEventListener("input", updateButtonState);
inputField2.addEventListener("input", updateButtonState);
inputField3.addEventListener("input", updateButtonState);

nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    current += 1;
    updateButtonState();
});

nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    current += 1;
    updateButtonState();
});

nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    current += 1;
    updateButtonState();
});

submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    current += 1;
    updateButtonState();
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    current -= 1;
    updateButtonState();
});

prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    current -= 1;
    updateButtonState();
});

prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    current -= 1;
    updateButtonState();
});

updateButtonState();