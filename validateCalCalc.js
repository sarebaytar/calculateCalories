$(document).ready(function(){
  let clients = [];

  const renderClients = function() {
    clients.forEach(function(element) {
      // создатим жквери-объект
      const row = $(
        '<tr class="client" data-id="'+element.id+'"><td>'+element.id+'</td><td>'
        +element.name+'</td><td>'
        +element.weight+'</td><td>'
        +element.height+'</td><td>'
        +element.age+'</td><td>'
        +element.calories+'</td>'
        +'<td><input type="button" data-id="'+element.id+'" class="btn btn-danger btn-xs remove" value="x"></td></tr>'
      );

      // просто аппендим готовый жквери объект (или строку).
      $('#tb').append(row);

      //при клике на кнопку удаляется строка с аналогичным селектором
      //с помощью find поиск будет только внутри элемента, на котором вызываешь find.
      //заметь, что я стараюсь не использовать переменные из внешнего скоупа
      row.find('input.remove').click(function(){
        const removeButton = $(this);
        const id = removeButton.data('id');
        console.log('hey');
        // во время клика, установим текущий id елемента кнопки удаления
        $('#delete-modal button#accept').data('remove-id', id);
        $('#delete-modal').modal('show');

        $('#delete-modal button#accept').click(function(){
          // получим установленный id елемента кнопки удаления
          const id = $(this).data('remove-id');
          clients.splice(id, 1);
          $('tr[data-id='+id+']').remove();
        });
      });
    });
  };

  $(document).on('addClient', renderClients);

  const name = $('#name input');
  const weight = $('#weight input');
  const height = $('#height input');
  const age = $('#age input');

  //генерируем индекс
  let index = 0;
  const incrementId = function() {
    return index += 1;
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
    clients.push({ id: incrementId(),
                   name: name.val(),
                   weight: weight.val(),
                   height: height.val(),
                   age: age.val(),
                   calories: result,
                 });
    $(document).trigger('addClient');

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
