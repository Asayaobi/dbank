import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  // console.log("Finished loading");
  const currentAmount = await dbank.checkBalance();
  // round the amount to 2 digits
  const roundAmount = Math.round(currentAmount * 100) / 100
  document.getElementById("value").innerText = roundAmount;
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();
  // console.log("Submitted.");

  //topUp functiom
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    console.log('topup amount:', inputAmount, typeof inputAmount);

    await dbank.topUp(inputAmount);
    console.log('topup done');
});

