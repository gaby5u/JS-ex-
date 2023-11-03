let calculation = "";
localStorage.getItem(calculation);

function updateCalculation(value) {
  calculation += value;
  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
