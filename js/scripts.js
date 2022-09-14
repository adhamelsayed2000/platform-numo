$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});
var hiddenBtn = document.getElementById('hiddenBtn');
var chooseBtn = document.getElementById('chooseBtn');

hiddenBtn.addEventListener('change', function() {
    if (hiddenBtn.files.length > 0) {
        chooseBtn.innerText = hiddenBtn.files[0].name;
    } else {
        chooseBtn.innerText = 'Choose';
    }
});