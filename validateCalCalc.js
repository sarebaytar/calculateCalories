$(document).ready(function() {

  $('#newf').submit(function(e){

    if ($('#weight').val() < 1 || isNaN($('#weight').val())) {
      $('#inputSuccess2Status').remove();
      $('#2').remove();
      $('#inputError2Status').remove();
      $('#1').remove();
      $('#iwdiv').attr('class', 'form-group has-error has-feedback');
      $('<span id="inputError2Status" class="sr-only">(error)</span>').insertAfter('#weight');
      $('<span id="1" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>').insertAfter('#weight');
      e.preventDefault();
    } else {
      $('#inputSuccess2Status').remove();
      $('#2').remove();
      $('#inputError2Status').remove();
      $('#1').remove();
      $('#iwdiv').attr('class', 'form-group has-success has-feedback');
      $('<span id="inputSuccess2Status" class="sr-only">(success)</span>').insertAfter('#weight');
      $('<span id="2" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>').insertAfter('#weight');
      e.preventDefault();
    };

    if ($('#growth').val() < 1 || isNaN($('#growth').val())) {
      $('#inputSuccess2Status').remove();
      $('#4').remove();
      $('#inputError2Status').remove();
      $('#3').remove();
      $('#igdiv').attr('class', 'form-group has-error has-feedback');
      $('<span id="inputError2Status" class="sr-only">(error)</span>').insertAfter('#growth');
      $('<span id="3" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>').insertAfter('#growth');
      e.preventDefault();
    } else {
      $('#inputSuccess2Status').remove();
      $('#4').remove();
      $('#inputError2Status').remove();
      $('#3').remove();
      $('#igdiv').attr('class', 'form-group has-success has-feedback');
      $('<span id="inputSuccess2Status" class="sr-only">(success)</span>').insertAfter('#growth');
      $('<span id="4" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>').insertAfter('#growth');
      e.preventDefault();
    };

    if ($('#age').val()) {
      $('#iadiv').attr('class', 'form-group has-success has-feedback');
      $('<span id="inputSuccess2Status" class="sr-only">(success)</span>').insertAfter('#age');
      $('<span id="4" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>').insertAfter('#age');
    };

  });

});
