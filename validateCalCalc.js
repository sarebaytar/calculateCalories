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
    } else {
      $('#inputSuccess2Status').remove();
      $('#2').remove();
      $('#inputError2Status').remove();
      $('#1').remove();
      $('#iwdiv').attr('class', 'form-group has-success has-feedback');
      $('<span id="inputSuccess2Status" class="sr-only">(success)</span>').insertAfter('#weight');
      $('<span id="2" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>').insertAfter('#weight');
    };

    if ($('#growth').val() < 1 || isNaN($('#growth').val())) {
      $('#inputSuccess2Status').remove();
      $('#4').remove();
      $('#inputError2Status').remove();
      $('#3').remove();
      $('#igdiv').attr('class', 'form-group has-error has-feedback');
      $('<span id="inputError2Status" class="sr-only">(error)</span>').insertAfter('#growth');
      $('<span id="3" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>').insertAfter('#growth');
    } else {
      $('#inputSuccess2Status').remove();
      $('#4').remove();
      $('#inputError2Status').remove();
      $('#3').remove();
      $('#igdiv').attr('class', 'form-group has-success has-feedback');
      $('<span id="inputSuccess2Status" class="sr-only">(success)</span>').insertAfter('#growth');
      $('<span id="4" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>').insertAfter('#growth');
    };

    if ($('#age').val()) {
      $('#inputSuccess2Status').remove();
      $('#6').remove();
      $('#inputError2Status').remove();
      $('#5').remove();
      $('#iadiv').attr('class', 'form-group has-success has-feedback');
      $('<span id="inputSuccess2Status" class="sr-only">(success)</span>').insertAfter('#age');
      $('<span id="6" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>').insertAfter('#age');
    } else if (!$('#age').val()){
      $('#inputSuccess2Status').remove();
      $('#6').remove();
      $('#inputError2Status').remove();
      $('#5').remove();
      $('#iadiv').attr('class', 'form-group has-error has-feedback');
      $('<span id="inputError2Status" class="sr-only">(error)</span>').insertAfter('#age');
      $('<span id="5" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>').insertAfter('#age');

    };
    e.preventDefault();

  });

  $('.btn').click(function(){
    if ($('#growth').val() < 1 || isNaN($('#growth').val()) || $('#weight').val() < 1 || isNaN($('#weight').val()) || !$('#age').val()) {
      return;
    };
    if ($('input[name="optionsRadios"]:checked').val() === 'female') {
    let resultFemale = Math.round(655.1+9.563*$('#weight').val()+1.85*$('#growth').val()-4.676*$('#age').val());
    $('.modal-body').append(resultFemale + ' kkal');
  } else if ($('input[name="optionsRadios"]:checked').val() === 'male') {
      let resultMale = Math.round(66.5+13.75*$('#weight').val()+5.003*$('#growth').val()-6.775*$('#age').val());
      $('.modal-body').append(resultMale + ' kkal');
    };
    $('#myModal').modal('show');
  });


  $('#myModal').on('hidden.bs.modal', function(){
    $('form')[0].reset();
    $('#inputSuccess2Status').remove();
    $('#2').remove();
    $('#inputSuccess2Status').remove();
    $('#4').remove();
    $('#inputSuccess2Status').remove();
    $('#6').remove();
    $('.modal-content').html('');
    $('#iwdiv').attr('class', 'form-group');
    $('#igdiv').attr('class', 'form-group');
    $('#iadiv').attr('class', 'form-group');
  });

});
