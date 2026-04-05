const themeToggleButton = document.querySelector("#theme-toggle");

function updateThemeButtonLabel() {
  if (!themeToggleButton) {
    return;
  }

  if (document.body.classList.contains("dark")) {
    themeToggleButton.textContent = "Switch to Light Mode";
  } else {
    themeToggleButton.textContent = "Switch to Dark Mode";
  }
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeButtonLabel();
  });

  updateThemeButtonLabel();
}
