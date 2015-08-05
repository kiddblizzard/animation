$(document).ready(function($){
    $('#avatar').on('change', function(e){
        if (this.files === undefined || this.files.length === 0) {
            return;
        }

        var id = $(this).attr('id');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#avatar-image').attr('src', e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    });
})