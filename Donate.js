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

// there is all code for donate 
function handleDonation(donateHandle, inputName, currentDonate, cardTitle) {
  donateHandle.addEventListener("click", function (e) {
    e.preventDefault();
    let form = e.target.form;
    let donateAmount = form.querySelector(`input[name='${inputName}']`).value;

    if (isNaN(donateAmount) || donateAmount.trim() === "") {
      return alert(
        "Please enter a valid numeric value for the donation amount."
      );
    }

    donateAmount = parseFloat(donateAmount);
    if (donateAmount <= 0) {
      return alert("Invalid donation amount.");
    }

    let balance = parseFloat(mybalance.innerText);
    if (balance < donateAmount) {
      return alert("Insufficient balance.");
    }

    if (balance >= donateAmount) {
      let publicDonation = balance - donateAmount;
      mybalance.innerText = publicDonation.toFixed(2);
      let cardCurrentBalance = parseFloat(currentDonate.innerText);
      let newBalance = cardCurrentBalance + donateAmount;
      currentDonate.innerText = newBalance.toFixed(2);

      let div = document.createElement("div");
      div.classList.add("stats", "shadow", "border", "w-full");
      div.innerHTML = `
        <div class="stat w-full">
          <p class="text-xl font-semibold">${donateAmount} Taka is donated to ${
        cardTitle.innerText
      }</p>
          <p>Date : ${new Date().toLocaleString()}</p>
        </div>
      `;
      historyPage.appendChild(div);

      if (typeof my_modal_1 !== "undefined") {
        my_modal_1.showModal();
      } else {
        console.error("Modal reference (my_modal_1) is not defined.");
      }
    }
  });
}

// common function call
handleDonation(donateHandle1, "donate1", currentDonate1, card_title1);
handleDonation(donateHandle2, "donate2", currentDonate2, card_title2);
handleDonation(donateHandle3, "donate3", currentDonate3, card_title3);
