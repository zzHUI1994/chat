function UserInfo(userid) {
        $("#usernameClick").on("click", function(){
					 loadFormData("userInfoform",webRoot+"/userController.do?queryUserByUserId&userid="+userid);		
					 $('#myUserModal').modal('show');	
					 $('#updateUser').off('click').on('click', function (){
		             demo1.ajaxPost(false,false,webRoot+"/userController.do?updateUser");
			});
		});
        $("#changePassword").on("click", function(){
					 $('#userPasswordModal').modal('show');	
					 $('#updatePassword').off('click').on('click', function (){
						 var oldPwd = hex_sha1($('#oldPwd').val());
						 var pwd = hex_sha1($("#pwd").val());
		             demo2.ajaxPost(false,false,webRoot+"/loginController.do?updateCurrentPwd&oldPwd="+oldPwd+"&pwd="+pwd+"");
			});
		});
				
	    var demo1 = $("#userInfoform").Validform({
		   tiptype:function(msg,o,cssctl){
			  var objtip=$("#msgdemo1");
			  cssctl(objtip,o.type);
			  objtip.text(msg);
		   },
		   ajaxPost:true,
		   beforeSubmit:function(curform){
	       },
		   callback:function(data){
			  var obj = eval(data);
			  alert(obj.msg);
			  $('#myUserModal').modal('hide');
	   }
       });
	   
	   var demo2 = $("#passwordInfoform").Validform({
	       tiptype:function(msg,o,cssctl){
			  var objtip=$("#msgdemo2");
			  cssctl(objtip,o.type);
			  objtip.text(msg);
		   },
		   ajaxPost:true,
		   beforeSubmit:function(curform){
	       },
		   callback:function(data){
			  var obj = eval(data);
			  alert(obj.msg);
			  $('#userPasswordModal').modal('hide');
			  $("#passwordInfoform")[0].reset();
	      }
       });
};