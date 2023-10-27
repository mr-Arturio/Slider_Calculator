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

// Initial calculation
updateMonthlyPayment();
