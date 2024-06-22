const clickableMenuItem = document.querySelectorAll(".clickable-menu-item");
const accountWrapper = document.querySelector("#account-wrapper");
const primaryButtons = document.querySelectorAll(".primary-button");

function buttonAnimation() {
  primaryButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      button.style.backgroundColor = "rgba(255,255,255,0.3)";
      button.style.outline = "1px solid rgba(255, 255, 255, 0.8)";
      button.style.transition = "0.1s ease";
    });

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "rgba(255,255,255,0.2)";
      button.style.outline = "1px solid rgba(255, 255, 255, 0.2)";
      button.style.transition = "0.1s ease";

      button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
        button.style.outline = "";

        setTimeout(() => {
          button.style.transition = "";
        }, 200);
      });
    });
  });
}
function addMenuItemsAnimations() {
  clickableMenuItem.forEach((button) => {
    button.addEventListener("click", () => {
      clickableMenuItem.forEach((button) => {
        button.style.backgroundColor = "";
        button.style.outline = "";
      });

      button.style.backgroundColor = "rgba(255,255,255,0.05)";
      button.style.outline = "1px solid rgba(255, 255, 255, 0.2)";
      button.style.transition = "0.2s ease";
    });
  });
}
function addAccountWrapperAnimations() {
  accountWrapper.addEventListener("mouseenter", () => {
    accountWrapper.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.502)";
    accountWrapper.style.transform = "translateY(-2px)";
    accountWrapper.style.transition = "0.2s ease";

    accountWrapper.addEventListener("mouseleave", () => {
      accountWrapper.style.transition = "0.2s ease";

      accountWrapper.style.boxShadow = "";
      accountWrapper.style.transform = "";

      setTimeout(() => {
        accountWrapper.style.transition = "";
      }, 200);
    });
  });
}

export default function addAllAnimations() {
  addMenuItemsAnimations();
  addAccountWrapperAnimations();
  buttonAnimation();
}

export function initMenu() {
  clickableMenuItem[0].style.backgroundColor = "rgba(255,255,255,0.05)";
  clickableMenuItem[0].style.outline = "1px solid rgba(255, 255, 255, 0.2)";
}
