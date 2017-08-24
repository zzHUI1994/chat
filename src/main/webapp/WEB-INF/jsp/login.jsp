<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>登录</title>

    <%@include file="common/head.jsp"%>
    <style>
        .input_div {
            width:60%;
            margin:15px auto;
        }
    </style>
</head>
<body>
<div class="container">

    <div class="panel panel-default">
        <div class="panel-heading text-center">
            <h2>登录</h2>
        </div>

        <div class="panel-body" style="text-align: center">
            <div class="form-group input_div">
                <input  placeholder="手机号" id="user_phone" name="user_phone" class="form-control"
                       type="text"  value="" size="16">
                <!-- <div class="Validform_checktip"></div> -->
            </div>

            <div class="form-group input_div">
                <input placeholder="密码" id="pwd" name="password" class="form-control"
                       type="password" value="" size="16">
                <!-- <div class="Validform_checktip"></div> -->
            </div>
            <div class="form-group">
                <button id="login" class="btn btn-primary">登录</button>
                <button id="register" class="btn btn-primary">注册</button>
            </div>
        </div>
    </div>

</div>

<div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1"
     role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content sw_modal ">
            <div class="modal-header blue">
                <button id="close" type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">注册</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <form class="form-horizontal" id="modifyForm">
                        <div id="inputs_regitster" class="col-lg-12 col-md-12">

                            <!-- 账号 -->
                            <div class="form-group">
                                <label class="col-sm-4 control-label" style="font-size: x-small"><font
                                        color="red">* </font>手机号</label>
                                <div class="col-sm-7">
                                    <input id="phone" name="phone" class="form-control"
                                           datatype="n11-11" size="16" type="text" errormsg="请填写11位的手机号" value="">
                                    <!-- <div class="Validform_checktip"></div> -->
                                </div>
                            </div>
                            <!-- 密码 -->
                            <div class="form-group">
                                <label class="col-sm-4 control-label" style="font-size: x-small"><font
                                        color="red">* </font>密码</label>
                                <div class="col-sm-7">
                                    <input id="password" name="password" class="form-control"
                                           datatype="*6-16" size="16" type="password"
                                           nullmsg="请输入6-16位密码" value="">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label" style="font-size: x-small"><font
                                        color="red">* </font>确认密码</label>
                                <div class="col-sm-7">
                                    <input id="user_commit" name="user_commit" class="form-control"
                                           datatype="*" size="16" type="password" nullmsg="请确认密码"
                                           recheck="password" errormsg="您两次输入的账号密码不一致！" value="">
                                    <!-- <div class="Validform_checktip"></div> -->
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
            <!--操作按钮-->
            <div class="modal-footer">
                <button id="cancel" type="button" class="btn btn-default"
                        data-dismiss="modal">取消</button>
                <button id="saveChange" type="button" class="btn btn-primary">注册</button>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="<%=webRoot%>/lib/pagejs/login.js"></script>
</html>
