const mainContentSection = document.getElementById("content-container");

function showSection(sections, sectionId) {
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

// Assign to each button his section change
(function contentController() {
  // Get buttons
  const sections = document.querySelectorAll(".content-section");
  const homeButton = document.getElementById("home-button");
  const listViewButton = document.getElementById("list-button");

  // Show default section
  showSection(sections, "home-section");

  // Add functionality to home button
  homeButton.addEventListener("click", () =>
    showSection(sections, "home-section")
  );

  // Add functionality to 'my-lists' button
  listViewButton.addEventListener("click", () =>
    showSection(sections, "list-view-section")
  );
})();

function createSection(sectionName) {
  const sections = document.querySelectorAll(".content-section");

  // create section id `{sectionName}-section`
  let sectionID = sectionName + "-section";

  // create wrapper div
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content-section");

  // create section Title
  const sectionTitle = document.createElement("h1");
  sectionTitle.textContent = sectionName;
  contentDiv.appendChild(sectionTitle);

  if (document.getElementById(sectionID) === null) {
    contentDiv.id = sectionID;
    mainContentSection.appendChild(contentDiv);

    showSection(sections, sectionID);
  } else {
    console.log("List already exists");
  }
}

createSection("army");
