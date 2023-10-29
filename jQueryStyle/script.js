const SliderModule = (function () {
  // Private variables
  const __hs_messages = {};
  let $interest = 0;

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

  const createSlider = (sliderSelector, inputSelector) => {
    initSlider(sliderSelector, {
      slide: function (event, ui) {
        $(this).parent().find(inputSelector).val(ui.value);
        update();
      },
      create: function (event, ui) {
        $(this).slider("value", $(this).parent().find(inputSelector).val());
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
      createSlider("#slider9", ".trt-cost");

      initSlider("#slider1", {
        max: 7995,
        min: 0,
        step: 50,
      });
      createSlider("#slider1", ".downpayment");

      initSlider("#slider2", {
        max: 36,
        min: 1,
        step: 1,
      });
      createSlider("#slider2", ".terms");

      $("#days").val($("#slider2").slider("value"));

      $("#days").change(function (event) {
        const data = $("#days").val();
        if (data.length > 0) {
          if (parseInt(data) >= 0 && parseInt(data) <= 31) {
            $("#slider2").slider("option", "value", data);
          } else {
            if (parseInt(data) < 1) {
              $("#days").val("1");
              $("#slider2").slider("option", "value", "1");
            }
            if (parseInt(data) > 31) {
              $("#days").val("31");
              $("#slider2").slider("option", "value", "31");
            }
          }
        } else {
          $("#slider2").slider("option", "value", "1");
        }

             });

      // Initialize and handle changes for the treatment cost input field
      update();
      $("#treatment-cost").on("change paste keyup", function () {
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
