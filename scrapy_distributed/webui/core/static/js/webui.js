$(function () {
    $('form').on('click', '.add', function () {
        var $form_group = $(this).closest('.form-group');
        var $btn = $(this).closest('div').clone();
        var $input = $(this).closest('div').prev().clone();
        $input.addClass('col-md-offset-2').find('input').val('');
        $btn.find('.add').attr({'class': 'btn btn-danger btn-xs del', 'value': 'delete'});
        $input.appendTo($form_group);
        $btn.appendTo($form_group);
    }).on('click', '.del', function () {
        $(this).closest('div').prev().remove();
        $(this).closest('div').remove();
    });
});