const date = document.getElementById("birthday");

const button = document.getElementById("btn");

let result = document.getElementById("age");

// const span = document.querySelector("result > span");

button.addEventListener("click", (e) => {
    const bday = new Date(date.value);
    const today = new Date();
    const diffMilSec = today.getTime() - bday.getTime();
    const milliSecInYear = 365 * 24 * 60 * 60 * 1000;
    const year = Math.floor(diffMilSec / milliSecInYear);
    // result.innerText = `Your age is ${year} years old`;
    // span.innerText = year;
    result.innerText = `${year}`;
})

// let para = document.createElement("p");

// let cont = document.getElementsByClassName("container")[0];
// cont.innerHTML = `<h1>Age Calculator</h1>
//                   <div class="form">
//                     <label for="birthday">Enter your date of birth</label>
//                     <input type="date" id="birthday" name="birthday">
//                     <button id="btn">Calculate Age</button>
//                     <p id="result">Your age is <span id="age">21</span> years old</p>
//                   </div>`;

