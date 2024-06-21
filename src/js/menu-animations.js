const clickableMenuItem = document.querySelectorAll(".clickable-menu-item");
const accountWrapper = document.querySelector("#account-wrapper");

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

      button.addEventListener("mouseleave", () => {
        button.style.transition = "";
      });
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
}

export function initMenu() {
  clickableMenuItem[0].style.backgroundColor = "rgba(255,255,255,0.05)";
  clickableMenuItem[0].style.outline = "1px solid rgba(255, 255, 255, 0.2)";
}
