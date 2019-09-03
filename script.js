const $select = $('.select-js');
let $input = $('#input-js').val();

$select.select2({
    minimumResultsForSearch: -1,
})
    .on("select2:open", function () {
        $('.select2-results__options').niceScroll({
            cursorcolor:"#F082B5",
            cursorwidth:"3px",
            cursorfixedheight: 70
        });
    });

$(".input-phone-js").inputmask("+7(999)999-99-99");


$select.on('change', function () {
    // console.log($('.select-js option:selected').data('value'));
    $input = $('.select-js option:selected').data('value')
    console.log($input);
});


