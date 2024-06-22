function primaryButtonsAnimations() {
  const primaryButtons = document.querySelectorAll(".primary-button");

  // Default styling
  function defaultStyle(event) {
    if (event != undefined) event.stopPropagation();

    this.style.backgroundColor = "";
    this.style.transition = "0.1s ease";
  }

  // Hover styling
  function hoverStyle(event) {
    if (event != undefined) event.stopPropagation();

    this.style.backgroundColor = "rgba(255,255,255,0.1)";
    this.style.transition = "0.1s ease";
  }

  // Click styling
  function clickStyle(event) {
    if (event != undefined) event.stopPropagation();

    this.style.backgroundColor = "rgba(255,255,255,0.3)";
    this.style.transition = "0.1s ease";

    // Delay to allow for transition
    setTimeout(() => {
      defaultStyle.call(this);
    }, 100);
  }

  primaryButtons.forEach((button) => {
    button.addEventListener("click", clickStyle);
    button.addEventListener("mouseenter", hoverStyle);
    button.addEventListener("mouseleave", defaultStyle);
  });
}

function menuButtonsAnimations() {
  const menuButtons = document.querySelectorAll(".clickable-menu-item");
  let menuClicked = menuButtons[0];

  // Click styling
  function clickStyle(button = menuClicked) {
    // Set selected button to hover style
    button.style.backgroundColor = "rgba(255,255,255,0.05)";
    button.style.outline = "1px solid rgba(255,255,255,0.4)";
    button.style.transition = "0.1s ease";
  }

  // Click styling
  function resetStyle(button) {
    // Set selected button to hover style
    button.style.backgroundColor = "";
    button.style.outline = "";
    button.style.transition = "0.1s ease";
  }

  // Click handling
  function handleClick(event) {
    menuClicked = this;

    // Stop from inheriting styles from parent element
    if (event != undefined) event.stopPropagation();

    // Reset every other button to default
    menuButtons.forEach((button) => resetStyle(button));

    // Set selected button to click style
    clickStyle(menuClicked);
  }

  menuButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  document.addEventListener("DOMContentLoaded", () => clickStyle(menuClicked));
}

export default function updateDom() {
  primaryButtonsAnimations();
  menuButtonsAnimations();
}
