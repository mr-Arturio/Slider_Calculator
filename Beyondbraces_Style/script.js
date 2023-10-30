const SliderModule = (function () {
  // Private functions
  const update = () => {
    const $treatmentCost = $("#treatment-cost").val();
    const $amount1 = $("#amount").val();
    const $dayscount = $("#days").val();
    const $amount2 = parseInt($treatmentCost) - parseInt($amount1);
    let $apr = $amount2 / parseInt($dayscount);

    if ($apr < 0) {
      $apr = 0;
    }

    $("#amount2").val(parseFloat($apr).toFixed(2));
    $("#amount4").val($apr);
  };

  const initSlider = (sliderSelector, options) => {
    $(sliderSelector).slider(options);
  };

  const createSlider = (sliderSelector, inputSelector, maxInputSelector) => {
    initSlider(sliderSelector, {
      slide: function (event, ui) {
        const $maxValue = $(maxInputSelector).attr('max');
        if (ui.value > $maxValue) {
          ui.value = $maxValue;
        }
        $(this).parent().find(inputSelector).val(ui.value);
        update();
      },
      create: function (event, ui) {
        $(this).slider("value", $(this).parent().find(inputSelector).val());
        update();
      },
    });
  };

  // Public function for initializing the slider module
  const initialize = () => {
    $(document).ready(function () {
      // Initialize sliders and set their options
      initSlider("#slider9", {
        max: 10000,
        min: 50,
        step: 50,
      });
      createSlider("#slider9", ".trt-cost", "#treatment-cost");

      initSlider("#slider1", {
        max: 10000,
        min: 0,
        step: 50,
      });
      createSlider("#slider1", ".downpayment", "#amount");

      initSlider("#slider2", {
        max: 20,
        min: 1,
        step: 1,
      });
      createSlider("#slider2", ".terms", "#days");

      $("#days").val($("#slider2").slider("value"));

      $("#days").change(function (event) {
        const data = $("#days").val();
        const $maxValue = $("#days").attr('max');
        if (parseInt(data) > $maxValue) {
          $("#days").val($maxValue);
        }
        if (data.length > 0) {
          if (parseInt(data) < 1) {
            $("#days").val("1");
          }
          if (parseInt(data) > 31) {
            $("#days").val("31");
          }
          $("#slider2").slider("option", "value", $("#days").val());
        } else {
          $("#slider2").slider("option", "value", "1");
        }
      });

      // Initialize and handle changes for the treatment cost input field
      update();
      $("#treatment-cost").on("change paste keyup", function () {
        const $maxValue = $(this).attr('max');
        if (parseInt($(this).val()) > $maxValue) {
          $(this).val($maxValue);
        }
        update();
      });

      // Initialize and handle changes for the initial payment input field
      update();
      $("#amount").on("change paste keyup", function () {
        const $maxValue = $(this).attr('max');
        if (parseInt($(this).val()) > $maxValue) {
          $(this).val($maxValue);
        }
        update();
      });
    });
  };

  // Public methods
  return {
    initialize: initialize,
  };
})();

SliderModule.initialize();
