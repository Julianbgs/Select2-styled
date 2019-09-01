$('.select-js').select2({
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
