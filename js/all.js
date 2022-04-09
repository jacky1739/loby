$(document).ready(function() {
    console.log('hi')
    $('#datepicker1').datepicker()
    $('#datepicker2').datepicker()
    $('.login__btn__submit').click(function() {
        console.log('click')
        $('.login__errorMessage__word').addClass('d-none')
    })
})
