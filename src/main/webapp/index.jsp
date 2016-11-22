<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8" />
	<title>AutoTestTool | Login</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="css/style.css" rel="stylesheet" type="text/css"/>
	<link href="css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<link href="css/login.css" rel="stylesheet" type="text/css"/>
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="image/favicon.ico" />
</head>
<script type="text/javascript">
checkLogin='<%=session.getAttribute("loginValue")%>';
	if (checkLogin == "-1") {
		alert("用户名或密码错误！");
	}
</script>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="login">
	<!-- BEGIN LOGO -->
	<div class="logo">
	</div>
	<!-- END LOGO -->
	<!-- BEGIN LOGIN -->
	<div class="content">
		<!-- BEGIN LOGIN FORM -->
		<form name="loginform" class="form-vertical login-form" action="loginAction" method="post" onkeydown="keydown();">
			
			<div class="logo">
				<img src="image/madhouse-logo.png" alt="" /> 
			</div>
			<h3 class="form-title" align="center" style="font-family:Times New Roman">AutoTestTool</br><small style="font-family:Times New Roman">Version 3.1.0</small></h3>
			<div class="alert alert-error hide">
				<button class="close" data-dismiss="alert"></button>
				<span>Enter any username and password.</span>
			</div>
			<div class="control-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">Username</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-user"></i>
						<input class="m-wrap placeholder-no-fix" type="text" placeholder="Username" name="username"/>
					</div>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label visible-ie8 visible-ie9">Password</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-lock"></i>
						<input class="m-wrap placeholder-no-fix" type="password" placeholder="Password" name="password"/>
					</div>
				</div>
			</div>
			<div class="form-actions">
				<input type="button" value="Login" onClick="loginform.submit();"   class="btn green pull-right">
				</input>        
			</div>
		</form>
		<!-- END LOGIN FORM -->        
	<span  style="color:grey;font-family:Times New Roman;font-size:1px">使用Chrome浏览器，设置Chrome参数 --disable-web-security</span>
	</div>
	<!-- END LOGIN -->
	<!-- BEGIN COPYRIGHT -->
	<div class="copyright" style="font-family:Times New Roman">
		2015 &copy; AutoTestTool by JecyLiu.	
	</div>
	<!-- END COPYRIGHT -->
	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>      
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="js/excanvas.min.js"></script>
	<script src="js/respond.min.js"></script>  
	<![endif]-->   
	<script src="js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="js/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="js/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script src="js/jquery.validate.min.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="js/app.js" type="text/javascript"></script>
	<!-- <script src="js/login.js" type="text/javascript"></script>       -->
	<!-- END PAGE LEVEL SCRIPTS --> 
	<script>
	 function keydown()
	 {
		 if(event.keyCode==13)
		 {
			 loginform.submit();
		 }
	 }	
	
		jQuery(document).ready(function() {     
		  App.init();
		});
	</script>
	<!-- END JAVASCRIPTS -->
<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script></body>
<!-- END BODY -->
</html>