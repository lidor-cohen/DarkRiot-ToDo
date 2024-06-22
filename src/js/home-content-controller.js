import TaskController from "./task-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  (function contentController() {
    const sections = document.querySelectorAll(".content-section");
    const homeButton = document.getElementById("home-button");
    const listViewButton = document.getElementById("list-button");
    const listItemButton = document.getElementById("list-item-button");

    showSection("home-section");

    homeButton.addEventListener("click", () => showSection("home-section"));

    listViewButton.addEventListener("click", () =>
      showSection("list-view-section")
    );

    function showSection(sectionId) {
      // Hide all sections
      sections.forEach(function (section) {
        section.classList.remove("active");
      });

      // Show the selected section
      const selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
        selectedSection.classList.add("active");
      }
    }
  })();
});
