var module_64429374222 = function() {
  var __hs_messages = {};
  i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars.language, arguments)
  }
  ,
  i18n_getlanguage = function() {
      return hsVars.language
  }
  ,
  $(document).ready((function() {
      function update() {
          $interest = 0,
          $treatmentCost = $("#treatment-cost").val(),
          $amount1 = $("#amount").val(),
          $dayscount = $("#days").val(),
          $amount2 = parseInt($treatmentCost) - parseInt($amount1),
          $apr = $amount2 / parseInt($dayscount),
          $apr < 0 && ($apr = 0),
          $("#amount2").val(parseFloat($apr).toFixed(2)),
          $("#amount3").val(parseFloat($amount2 - $amount1).toFixed(2)),
          $("#amount4").val($apr)
      }
      $("#slider9").slider({
          max: 1e4,
          min: 50,
          step: 50,
          slide: function(event, ui) {
              $(this).parent().find(".trt-cost").val(ui.value),
              $("#treatment-cost").val(ui.value),
              update()
          },
          create: function(event, ui) {
              $(this).slider("value", $(this).parent().find(".trt-cost").val())
          }
      }),
      $("#slider1").slider({
          max: 7995,
          min: 0,
          step: 50,
          slide: function(event, ui) {
              $(this).parent().find(".downpayment").val(ui.value),
              $("#amount").val(ui.value),
              update()
          },
          create: function(event, ui) {
              $(this).slider("value", $(this).parent().find(".downpayment").val())
          }
      }),
      $("#slider2").slider({
          max: 36,
          min: 1,
          step: 1,
          slide: function(event, ui) {
              $(this).parent().find(".terms").val(ui.value),
              $("#days").val(ui.value),
              update()
          },
          create: function(event, ui) {
              $(this).slider("value", $(this).parent().find(".terms").val())
          }
      }),
      $("#days").val($("#slider2").slider("value")),
      $("#days").change((function(event) {
          var data = $("#days").val();
          data.length > 0 ? parseInt(data) >= 0 && parseInt(data) <= 31 ? $("#slider2").slider("option", "value", data) : (parseInt(data) < 1 && ($("#days").val("1"),
          $("#slider2").slider("option", "value", "1")),
          parseInt(data) > 31 && ($("#days").val("31"),
          $("#slider2").slider("option", "value", "31"))) : $("#slider2").slider("option", "value", "1"),
          $("#date").text(function(days) {
              var mths = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
                , d = new Date;
              d.setHours(d.getHours() + 24 * days);
              var currD = d.getDate()
                , currM = d.getMonth()
                , currY = d.getFullYear();
              return mths[currM] + " " + currD + ", " + currY
          }(parseInt($("#days").val())))
      }
      )),
      update(),
      $("#treatment-cost").on("change paste keyup", (function() {
          update()
      }
      ))
  }
  ))
}();
