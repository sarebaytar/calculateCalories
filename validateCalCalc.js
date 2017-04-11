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
    clients.forEach(function(element, i, array){
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
  //генерируем индекс
  let index = 0;
  const id = function incrementId(){
    return index+=1;
  };
  //функция удаления строки
  /*const removeRow = function removeRow(){
    $('#'+index).click(function(){
      $(this).parent().parent().remove();
    });
  };*/
  //функция удаления строки с запросом на подтверждение
  const removeRow = function removeRow(){
    $('[data-id="'+index+'"]').click(function(){
      let thisIndex = this;
      $('#delModal').modal('show');
      $('#accept').click(function(){
        $(thisIndex).remove();
      });
    });
  };
  //добавляем кнопку для удаления строки
  const x = function x(){
    return '<input type="button" data-id="'+index+'" class="btn btn-danger btn-xs" value="x">';
  };
  //рисуем строку со значениями
  /*const addTableRow = function row(){
    return '<tr data-id="'+index+'"><td>'+index+'</td><td>'
    +name.val()+'</td><td>'
    +weight.val()+'</td><td>'
    +height.val()+'</td><td>'
    +age.val()+'</td><td>'
    +result+'</td><td>'+x()+'</td></tr>';
  };
  //добавляем строку в таблицу и присваиваем порядковый номер
  const addIndex = function addIndex(){
    $('#tb').append(function(){
      id();
      return addTableRow();
    });
  };*/

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
    $('.modal-body').append(result + ' kkal');

    $('#myModal').modal('show');
  });

  //Очищаем форму и модалку
  $('#myModal').on('hidden.bs.modal', function(){
    //addIndex();
    //removeRow();
    id();
    addClient();
    $(document).trigger('addClient');
    removeRow();
    clients = [];
    $('form')[0].reset();
    $('.modal-body').html('');
    $('#name, #weight, #height, #age').attr('class', 'form-group');
    $('#name .success, #weight .success, #height .success, #age .success').attr('class', 'success hide');
  });

});
