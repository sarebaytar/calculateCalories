$(document).ready(function(){
  //Функция для индикации правильно введенных данных
  const indicateSuccess = function success(divID) {
    $(divID).attr('class', 'form-group has-success has-feedback');
    $(divID+' :nth-child(4)').attr('class', 'glyphicon glyphicon-ok form-control-feedback');
  };
  //Функция для индикации не верных данных
  const indicateError = function error(divID) {
    $(divID).attr('class', 'form-group has-error has-feedback');
    $(divID+' :nth-child(4)').attr('class', 'glyphicon glyphicon-remove form-control-feedback');
  };
  //Валидация формы с индикацией
  $('form').submit(function(e){

    if ($('#weight input').val() < 1 || isNaN($('#weight input').val())) {
      indicateError('#weight');
    } else {
      indicateSuccess('#weight');
    };

    if ($('#growth input').val() < 1 || isNaN($('#growth input').val())) {
      indicateError('#growth');
    } else {
      indicateSuccess('#growth');
    };

    if ($('#age input').val()) {
      indicateSuccess('#age');
    } else {
      indicateError('#age');
    };

    e.preventDefault();
  });
  //Выводим модалку
  $('#but').click(function(){
    if ($('#growth input').val() < 1 || isNaN($('#growth input').val()) || $('#weight input').val() < 1 || isNaN($('#weight input').val()) || !$('#age input').val()) {
      return;
    };

    if ($('input[name="sex"]:checked').val() === 'female') {
      let resultFemale = Math.round(655.1+9.563*$('#weight input').val()+1.85*$('#growth input').val()-4.676*$('#age input').val());
      $('.modal-body').append(resultFemale + ' kkal');
    } else {
      let resultMale = Math.round(66.5+13.75*$('#weight input').val()+5.003*$('#growth input').val()-6.775*$('#age input').val());
      $('.modal-body').append(resultMale + ' kkal');
    };

    $('#myModal').modal('show');
  });
  //Очищаем форму и модалку
  $('#myModal').on('hidden.bs.modal', function(){
    $('form')[0].reset();
    $('.modal-body').html('');
    $('#weight, #growth, #age').attr('class', 'form-group');
    $('#weight :nth-child(4), #growth :nth-child(4), #age :nth-child(4)').attr('class', 'hidden');
  });

});
