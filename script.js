document.addEventListener("DOMContentLoaded", function () {
  const heightUnitLabel = document.getElementById("height-unit");
  const weightUnitLabel = document.getElementById("weight-unit");
  const unitRadios = document.querySelectorAll(
    'input[name="measurement-system"]'
  );

  unitRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "imperial") {
        heightUnitLabel.textContent = "in";
        weightUnitLabel.textContent = "lb";
      } else {
        heightUnitLabel.textContent = "cm";
        weightUnitLabel.textContent = "kg";
      }
    });
  });

  userHeight.addEventListener("input", displayWelcomeMessage);
  userWeight.addEventListener("input", displayWelcomeMessage);

  displayWelcomeMessage();
});
