$(function () {

// Initialize Treatment Cost Slider
$("#slider9").slider({
  range: "min", // You can set the range type as needed
  value: 7995, // Initial value
  min: 0,     // Minimum value
  max: 10000, // Maximum value
  slide: function (event, ui) {
    // Update the input field with the selected value
    $("#treatment-cost").val(ui.value);
  },
});

// Set the initial value of the input field to match the slider
$("#treatment-cost").val($("#slider9").slider("value"));

  
  // Initialize Initial Payment Slider
  $("#slider1").slider({
    range: "min",
    value: 2000,
    min: 0,
    max: 10000,
    slide: function (event, ui) {
      $("#amount").val(ui.value);
    },
  });

  $("#amount").val($("#slider1").slider("value"));

  // Initialize Term Length Slider
  $("#slider2").slider({
    range: "min",
    value: 12,
    min: 1,
    max: 24,
    slide: function (event, ui) {
      $("#days").val(ui.value);
    },
  });

  $("#days").val($("#slider2").slider("value"));
});
