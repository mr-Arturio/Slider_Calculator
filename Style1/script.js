$(function () {
  // Initialize Treatment Cost Slider
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
