//this is for navigate in blog page

let blogPage = document
  .getElementById("blogPage")
  .addEventListener("click", function () {
    window.location.href = "blog.html";
  });

// this is three card button id ---- 
let donateHandle1 = document.getElementById("donationHandle1");
let donateHandle2 = document.getElementById("donationHandle2");
let donateHandle3 = document.getElementById("donationHandle3");

// this is three card inner amount 
let currentDonate1 = document.getElementById("currentDonate1");
let currentDonate2 = document.getElementById("currentDonate2");
let currentDonate3 = document.getElementById("currentDonate3");

// this is three card title 
let card_title1 = document.getElementById("card-title1");
let card_title2 = document.getElementById("card-title2");
let card_title3 = document.getElementById("card-title3");

// this is my main balance
let mybalance = document.getElementById("mybalance");

let donateBtn = document.getElementById("donateBtn");
let historyBtn = document.getElementById("historyBtn");
let donatePage = document.getElementById("donatePage");
let historyPage = document.getElementById("historyPage");


//this is a functionality for swap in to history and donation page 
donateBtn.addEventListener("click", function () {
  donatePage.classList.remove("hidden");
  historyPage.classList.add("hidden");
  donateBtn.classList.add("btn-active", "!bg-[#B4F461]", "border-none");
  historyBtn.classList.remove("btn-active", "!bg-[#B4F461]", "border-none");
});

historyBtn.addEventListener("click", function () {
  historyPage.classList.remove("hidden");
  donatePage.classList.add("hidden");
  historyBtn.classList.add("btn-active", "!bg-[#B4F461]", "border-none");
  donateBtn.classList.remove("btn-active", "!bg-[#B4F461]", "border-none");
});
// swap end

