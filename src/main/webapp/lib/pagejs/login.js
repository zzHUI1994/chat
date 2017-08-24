var validForm;

$(document).ready(function () {

    //初始化validform
    validForm = $("#modifyForm").Validform({
        showAllError: true,
        tiptype: 3,
        ajaxPost: true,
        beforeSubmit: function (curform) {
        },
        callback: function (data) {
            var obj = eval(data);
            $('#myModal').modal('hide');
            showAlertInfo(obj.msg, function () {
                window.location.reload();
            })
        }
    });

   $("#login").click(function(){
       var phone = $("#user_phone").val();
       var pwd = $("#pwd").val();
       $.post(
           webRoot + "/user/login",
           {"phone":phone, "password":pwd},
           function(json) {
               if(json.success) {
                   showAlertInfo(json.msg, function () {
                        window.location.href = webRoot + "/seckill/list";
                   });
               } else {
                   showAlertInfo(json.msg, function() {});
               }

           },
           "json"
       );
   });

   $("#register").click(function () {
       $('#myModal').modal({
           'backdrop': 'static'
       });

       $('#saveChange').off('click').on('click', function () {

           validForm.ajaxPost(false, false, webRoot + "/user/register");
       });
   });
});