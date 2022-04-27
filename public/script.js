// form submit event
function calculateAmount(value) {

  // the default percentage will be 0.05 if user didn't click percentage buttom
  let percentage = (value == undefined) ? 0.05 : value/100
    
  let totalBill = document.querySelector('#totalBill').value
  let numberOfPeople = document.querySelector('#numOfPeople').value

  let customPercentage = document.querySelector("#customPercentage").value

  let totalTipAmount = 0.00
  let totalAmount = 0.00

  if(customPercentage == "") {

    totalTipAmount = (parseFloat(totalBill)*percentage)/parseInt(numberOfPeople)
    totalAmount = (parseFloat(totalBill)/parseInt(numberOfPeople))+totalTipAmount

    document.querySelector('#tipAmount').textContent = totalTipAmount.toFixed(2)
    document.querySelector('#totalAmount').textContent = totalAmount.toFixed(2)

  } else {

    percentage = parseFloat(customPercentage)/100

    totalTipAmount = (parseFloat(totalBill)*percentage)/parseInt(numberOfPeople)
    totalAmount = (parseFloat(totalBill)/parseInt(numberOfPeople))+totalTipAmount

    document.querySelector('#tipAmount').textContent = totalTipAmount.toFixed(2)
    document.querySelector('#totalAmount').textContent = totalAmount.toFixed(2)

  }
  
}
  