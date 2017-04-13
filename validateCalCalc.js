$(document).ready(function(){

  let clients = [];

  const addClient = function add(){
    clients.push({ id: index,
                   name: name.val(),
                   weight: weight.val(),
                   height: height.val(),
                   age: age.val(),
                   calories: result,
                   removeButton: x()});
  };

  const renderClient = function render(){
    clients.forEach(function(element){
      $('#tb').append(function(){
        return '<tr data-id="'+element.id+'"><td>'+element.id+'</td><td>'
        +element.name+'</td><td>'
        +element.weight+'</td><td>'
        +element.height+'</td><td>'
        +element.age+'</td><td>'
        +element.calories+'</td><td>'+element.removeButton+'</td></tr>'
      });
    });
  };

  $(document).on('addClient', renderClient);

  const name = $('#name input');
  const weight = $('#weight input');
  const height = $('#height input');
  const age = $('#age input');

  const currentId = function getCurrentId(){
    return 0;
  };
  //генерируем индекс
  let index = 0;
  const id = function incrementId(){
    return index+=1;
  };

  //функция удаления строки с запросом на подтверждение
  const removeRow = function removeRow(){
    //при клике на кнопку удаляется строка с аналогичным селектором
    $('[data-id]').click(function(){
      let thisIndex = this;
      //const currentId = thisIndex.getAttribute('data-id')-1;
      console.log('hey');
      $('#delete-modal').modal('show');
      $('#delete-modal button#accept').click(function(){
        clients.splice(currentId, 1);
        $(thisIndex).remove();
      });
    });
  };
  //добавляем кнопку для удаления строки
  const x = function x(){
    return '<input type="button" data-id="'+index+'" class="btn btn-danger btn-xs" value="x">';
  };

  const isInvalid = function isInvalid() {
    return height.val() < 1 ||
        isNaN(height.val()) ||
        weight.val() < 1    ||
        isNaN(weight.val()) ||
        !age.val()          ||
        name.val() === '';
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

    $('#tb').empty();
    id();
    addClient();
    $(document).trigger('addClient');
    removeRow();

    $('.modal-body').append(result + ' kkal');

    $('#myModal').modal('show');
  });

  //Очищаем форму и модалку
  $('#myModal').on('hidden.bs.modal', function(){
    $('form')[0].reset();
    $('.modal-body').html('');
    $('#name, #weight, #height, #age').attr('class', 'form-group');
    $('#name .success, #weight .success, #height .success, #age .success').attr('class', 'success hide');
  });

});
