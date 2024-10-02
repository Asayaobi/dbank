import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  // console.log("Finished loading");
  await updateBalance()
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();
  // console.log("Submitted.");

  //button
  const button = event.target.querySelector("#submit-btn");

  //call topUp functiom
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    console.log('topup amount:', inputAmount, typeof inputAmount);
    //while calling the function, makes the button disable
    button.setAttribute("disabled",true);
    await dbank.topUp(inputAmount);
    //when the function is done, 
    //update the balance
    await updateBalance()
    //reset the input to an empty input
    document.getElementById("input-amount").value=""
    //remove disabled button
    console.log('topup done');
    button.removeAttribute("disabled");
});

async function updateBalance() {
  const currentAmount = await dbank.checkBalance();
  // round the amount to 2 digits
  const roundAmount = Math.round(currentAmount * 100) / 100
  document.getElementById("value").innerText = roundAmount;
};