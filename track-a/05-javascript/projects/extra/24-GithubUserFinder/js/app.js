console.log("✅ utils.js loaded");

/* STATE MANAGEMENT */

function showState(stateName) {
  const stateContainers = document.querySelectorAll(".state-container");

  stateContainers.forEach((stateContainer) => {
    stateContainer.classList.remove("show");
  });
  document.getElementById("profileContent").classList.remove("show");

  const elementID = STATE_ELEMENTS[stateName]; // get state id

  if (!elementID) {
    console.warn(
      `⚠️ showState: Invalid state "${stateName}", defaulting to empty`,
    );
    document.getElementById(STATE_ELEMENTS.empty).classList.add("show");
    return;
  }

  document.getElementById(elementID).classList.add("show"); // add class show to the element

  console.log(`📍 State changed to: ${stateName}`);
}

/* INITIALIZATION */

function initApp() {
  showState(STATES.EMPTY);
}

document.addEventListener("DOMContentLoaded", initApp);
