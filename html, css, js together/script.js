console.log(
  document.querySelector(".js-button").classList.contains("js-button")
);

function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    turnOFFPreviousButton();

    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function turnOFFPreviousButton() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
