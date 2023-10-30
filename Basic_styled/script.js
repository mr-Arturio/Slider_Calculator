// Function to update the monthly payment
function updateMonthlyPayment() {
  const treatmentCost = parseInt(
    document.getElementById("treatment-cost").value
  );
  const initialPayment = parseInt(
    document.getElementById("initial-payment").value
  );
  const termLength = parseInt(document.getElementById("term-length").value);

  // Calculate the monthly payment
  let monthlyPayment = (treatmentCost - initialPayment) / termLength;

  // Ensure that the monthlyPayment is never negative
  monthlyPayment = Math.max(0, monthlyPayment);

  // Display the result
  document.getElementById("monthly-payment").value = monthlyPayment.toFixed(2);
}

// Function to update slider position when a number is typed into an input field
function updateSliderFromInput(inputId, sliderId) {
  const inputElement = document.getElementById(inputId);
  const inputValue = parseInt(inputElement.value);
  const slider = document.getElementById(sliderId);
  const max = parseInt(inputElement.getAttribute("max"));

  if (inputId === "term-length") {
    // Check if the input value exceeds the maximum specified by the term-slider
    const termSliderMax = parseInt(
      document.getElementById("term-slider").getAttribute("max")
    );
    if (inputValue > termSliderMax) {
      inputElement.value = termSliderMax;
      slider.value = termSliderMax;
    } else {
      slider.value = inputValue;
    }
  }

  if (inputValue > max) {
    inputElement.value = max;
  } else if (inputId === "initial-payment") {
    const treatmentCost = parseInt(
      document.getElementById("treatment-cost").value
    );
    if (inputValue > treatmentCost) {
      // Prevent "Initial Payment" from being more than "Treatment Cost"
      inputElement.value = treatmentCost;
      slider.value = treatmentCost;
    } else {
      slider.value = inputValue;
    }

    // Set the maximum value of the "payment-slider" based on the "treatment-cost"
    slider.max = treatmentCost;
  } else {
    slider.value = inputValue;
  }

  updateMonthlyPayment();
}

// Attach event listeners to sliders
document.getElementById("cost-slider").addEventListener("input", function () {
  document.getElementById("treatment-cost").value = this.value;
  updateMonthlyPayment();
});

document
  .getElementById("payment-slider")
  .addEventListener("input", function () {
    document.getElementById("initial-payment").value = this.value;
    updateSliderFromInput("initial-payment", "payment-slider");
  });

document.getElementById("term-slider").addEventListener("input", function () {
  document.getElementById("term-length").value = this.value;
  updateMonthlyPayment();
});

// Attach event listeners to input fields for real-time slider update
document
  .getElementById("treatment-cost")
  .addEventListener("input", function () {
    updateSliderFromInput("treatment-cost", "cost-slider");
  });

document
  .getElementById("initial-payment")
  .addEventListener("input", function () {
    updateSliderFromInput("initial-payment", "payment-slider");
  });

document.getElementById("term-length").addEventListener("input", function () {
  updateSliderFromInput("term-length", "term-slider");
});

// Initial calculation
updateMonthlyPayment();
