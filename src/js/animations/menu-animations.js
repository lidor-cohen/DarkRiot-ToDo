function AnimationController() {}

AnimationController.prototype = {
  applyMenuAnimations: function () {
    const clickableMenuItems = document.querySelectorAll(
      ".clickable-menu-item"
    );

    console.log(clickableMenuItems);

    clickableMenuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", (e) => {
        clickableMenuItems.forEach((element) =>
          element.classList.remove("active-menu-item")
        );
        menuItem.classList.add("active-menu-item");
      });
    });
  },
};

const animationController = new AnimationController();

export { animationController };
