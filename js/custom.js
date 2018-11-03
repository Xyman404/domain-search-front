$( document ).ready(function(){
    $("#send").click(function() {
            sendAjaxForm('result', 'input-domain', 'http://127.0.0.1:3000/log');
            $("#loader").show("slow");
            $("#result").empty();
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:    url, //url страницы (action_ajax_form.php)
        type:   "POST", //метод отправки
        data: $("#"+ajax_form),
        success: function(response) { //Данные отправлены успешно
            console.log(response);
            $("#result").html(response);
            $(this).find('input').val('');
            $('#check-domain-form').trigger('reset');
            $("#loader").hide("slow");
        },
        error: function(response) { // Данные не отправлены
            console.log("sorry")
        }
    });
}