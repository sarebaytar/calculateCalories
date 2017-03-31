$(document).ready(function(){

  const weight = $('#weight input');
  const height = $('#height input');
  const age = $('#age input');

  const isInvalid = function isInvalid() {
    return height.val() < 1 ||
        isNaN(height.val()) ||
        weight.val() < 1    ||
        isNaN(weight.val()) ||
        !age.val();
  };
  //Функция для индикации правильно введенных данных
  const indicateSuccess = function success(divID) {
    $(divID).attr('class', 'form-group has-success has-feedback');
    $(divID+' .error').attr('class', 'error hide');
    $(divID+' .success').attr('class', 'glyphicon glyphicon-ok form-control-feedback success');
  };
  //Функция для индикации не верных данных
  const indicateError = function error(divID) {
    $(divID).attr('class', 'form-group has-error has-feedback');
    $(divID+' .success').attr('class', 'success hide');
    $(divID+' .error').attr('class', 'glyphicon glyphicon-remove form-control-feedback error');
  };
  //Валидация формы с индикацией
  $('form').submit(function(e){
    e.preventDefault();

    if (weight.val() < 1 || isNaN(weight.val())) {
      indicateError('#weight');
    } else {
      indicateSuccess('#weight');
    };

    if (height.val() < 1 || isNaN(height.val())) {
      indicateError('#height');
    } else {
      indicateSuccess('#height');
    };

    if (age.val()) {
      indicateSuccess('#age');
    } else {
      indicateError('#age');
    };

    if (isInvalid()) {
      return;
    }

    if ($('input[name="sex"]:checked').val() === 'female') {
      result = Math.round(655.1 + 9.563 * weight.val() + 1.85 * height.val() - 4.676 * age.val());
    } else {
      result = Math.round(66.5 + 13.75 * weight.val() + 5.003 * height.val() - 6.775 * age.val());
    };
    $('.modal-body').append(result + ' kkal');

    $('#myModal').modal('show');
  });

  //Очищаем форму и модалку
  $('#myModal').on('hidden.bs.modal', function(){
    $('form')[0].reset();
    $('.modal-body').html('');
    $('#weight, #height, #age').attr('class', 'form-group');
    $('#weight .success, #height .success, #age .success').attr('class', 'success hide');
  });

});
