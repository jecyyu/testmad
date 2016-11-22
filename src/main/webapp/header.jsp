<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<link href="css/style-metro.css" rel="stylesheet" type="text/css" />
	<link href="css/style.css" rel="stylesheet" type="text/css" />
	<link href="css/style-responsive.css" rel="stylesheet" type="text/css" />
	<link href="css/default.css" rel="stylesheet" type="text/css" id="style_color" />
	<link href="css/uniform.default.css" rel="stylesheet" type="text/css" />
	<script src="js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="js/jquery-migrate-1.2.1.min.js"
		type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="js/jquery-ui-1.10.1.custom.min.js"
		type="text/javascript"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="js/excanvas.min.js"></script>
	<script src="js/respond.min.js"></script>  
	<![endif]-->
	<script src="js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="js/jquery.blockui.min.js" type="text/javascript"></script>
	<script src="js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="js/jquery.uniform.min.js" type="text/javascript"></script>
	<script src="js/style.js" type="text/javascript"></script>
	<!-- END CORE PLUGINS -->
	<script type="text/javascript" src="js/jquery.gritter.js"></script>
	<script type="text/javascript" src="js/jquery.pulsate.min.js"></script>
	<script type="text/javascript" src="js/jquery.bootpag.min.js"></script>
	<script src="js/app.js"></script>
	<script src="js/ui-general.js"></script>   
	<script>
		jQuery(document).ready(function() {
			UIGeneral.init();
			
		});
		
		function next(index)
		{
			$(".tabbable").find("ul li a").eq(index).trigger("click"); // Fade in the active ID content
		}
	</script>
	
	
<title>Insert title here</title>
</head>
<body>
<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		<div class="navbar-inner" >
			<div class="container-fluid">
				<!-- BEGIN LOGO -->
				<!-- END LOGO -->
				<!-- BEGIN RESPONSIVE MENU TOGGLER -->
				<a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
				
				</a> 
				<table border="0" width="100%">
					<tr>
						<td width="80%"><img src="image/madhouse-logo2.png" alt="logo" /></td>
						
						<td>
							<font color="white"><i class="icon-user">  <%=session.getAttribute("loginUser") %></i></font>  
						</td>
						<td>
							<font color="white"><i class="icon-key"><a href="logoutNew" target="_parent"><font color="white"> Log Out</font></a></i></font> 
						</td>
						<td>
							<font color="white" style="font-family:Times New Roman">Ver 3.1.0 By Jecy</font>
						</td>
					</tr>
				</table>         
				<!-- END RESPONSIVE MENU TOGGLER -->            
				<!-- BEGIN TOP NAVIGATION MENU -->              
				
				<!-- END TOP NAVIGATION MENU --> 
			</div>
		</div>
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
</body>
</html>