import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async function() {
  // console.log("Finished loading");
  await updateBalance()
});

document.querySelector("form").addEventListener("submit", async function(event) {
  //prevent the form from reload
  event.preventDefault();
  // console.log("Submitted.");

  //button
  const button = event.target.querySelector("#submit-btn");
  //input
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    //while calling the function, makes the button disable
    button.setAttribute("disabled",true);

    //only top up/ withdraw the amount when there's a value in the input
    //if it's nan then the length of that value will be 0
    if (document.getElementById("input-amount").value.length !== 0){
      await dbank.topUp(inputAmount);
    }
    if (document.getElementById("withdrawal-amount").value.length !== 0){
      await dbank.withdraw(withdrawAmount);
    }
    
    //add the interest
    await dbank.compound()
    
    //when the function is done, 
    //update the balance
    await updateBalance()

    //reset the input to an empty input
    document.getElementById("input-amount").value=""
    document.getElementById("withdrawal-amount").value=""
    //remove disabled button
    console.log('transaction completed');
    button.removeAttribute("disabled");
});

async function updateBalance() {
  const currentAmount = await dbank.checkBalance();
  // round the amount to 2 digits
  const roundAmount = Math.round(currentAmount * 100) / 100
  document.getElementById("value").innerText = roundAmount;
};