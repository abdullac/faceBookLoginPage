$(document).ready(function(){
    $("#signup-form").validate({
        rules:{

           fname:{
                required:true,
                minlength:4,
                maxlength:8
           },
           emailAddress:{
                required:true,
                email:true
           },
           password:{
                 required:true,
                 minlength:4,
                 maxlength:8
           },
           sex:{
                required:true
           },
           month:{
                required:true
           },
           day:{
            required:true
           },
           year:{
            required:true
           }

        },
        messages:{
            fname:"Enter fullname",
            password:{
                required:"enter password",
                minlength:"minimum 5 charecters",
                maxlength:"maximum 10 charecters"
            }
        }

    })
})