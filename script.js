// Function to update the monthly payment
function updateMonthlyPayment() {
  const treatmentCost = parseInt(document.getElementById("treatment-cost").value);
  const initialPayment = parseInt(document.getElementById("initial-payment").value);
  const termLength = parseInt(document.getElementById("term-length").value);

  // Calculate the monthly payment
  const monthlyPayment = (treatmentCost - initialPayment) / termLength;

  // Display the result
  document.getElementById("monthly-payment").value = monthlyPayment.toFixed(2);
}

// Function to update slider position when a number is typed into an input field
function updateSliderFromInput(inputId, sliderId) {
  const inputValue = parseInt(document.getElementById(inputId).value);
  document.getElementById(sliderId).value = inputValue;
  updateMonthlyPayment();
}

// Attach event listeners to sliders
document.getElementById("cost-slider").addEventListener("input", function () {
  document.getElementById("treatment-cost").value = this.value;
  updateMonthlyPayment();
});

document.getElementById("payment-slider").addEventListener("input", function () {
  document.getElementById("initial-payment").value = this.value;
  updateMonthlyPayment();
});

document.getElementById("term-slider").addEventListener("input", function () {
  document.getElementById("term-length").value = this.value;
  updateMonthlyPayment();
});

// Attach event listeners to input fields for real-time slider update
document.getElementById("treatment-cost").addEventListener("input", function () {
  updateSliderFromInput("treatment-cost", "cost-slider");
});

document.getElementById("initial-payment").addEventListener("input", function () {
  updateSliderFromInput("initial-payment", "payment-slider");
});

document.getElementById("term-length").addEventListener("input", function () {
  updateSliderFromInput("term-length", "term-slider");
});

// Initial calculation
updateMonthlyPayment();