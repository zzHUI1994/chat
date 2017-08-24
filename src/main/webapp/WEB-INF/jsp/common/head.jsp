<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8"%>
<%
    String webRoot = request.getContextPath();
%>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询 -->
<!-- 注意： 如果通过 file://  引入 Respond.js 文件，则该文件无法起效果 -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="<%=webRoot%>/lib/css/bootstrap-select.min.css">
<link rel="stylesheet" href="<%=webRoot%>/lib/Bootstrap/css/bootstrap.min.css" media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/DataTable/css/dataTables.bootstrap.min.css"  media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/css/style.css" type="text/css" />
<link rel="stylesheet" href="<%=webRoot%>/lib/css/normalize.min.css" media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/css/bootstrap-datetimepicker.min.css" media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/css/jquery-confirm.css" media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/css/bootstrap-multiselect.css" media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/css/bootstrap-overwrite.css" media="screen" type="text/css"/>
<link rel="stylesheet" href="<%=webRoot%>/lib/css/jquery.autocomplete.css" media="screen" type="text/css"></link>

<script type="text/javascript" src="<%=webRoot%>/lib/jslib/jquery-1.9.1.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/DataTable/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/DataTable/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/bootstrap-select.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/bootstrap-datetimepicker.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/bootstrap-datetimepicker.zh-CN.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/Bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/Validform_v5.3.2_min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/jquery-confirm.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/bootstrap-multiselect.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/jquery.autocomplete.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/Bootstrap/js/BootstrapMenu.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/handlebars.min.js"></script>
<script type="text/javascript" src="<%=webRoot%>/lib/jslib/util.js"></script>

<script type="text/javascript">
    var webRoot = '<%=webRoot%>';
</script>