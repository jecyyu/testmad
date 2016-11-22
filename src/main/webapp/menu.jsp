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

	<script src="js/jquery-1.10.1.js" type="text/javascript"></script>
	<script src="js/user-setting.js" type="text/javascript"></script>
	<!-- END GLOBAL MANDATORY STYLES -->
	<link rel="shortcut icon" href="image/favicon.ico" />

<title>Insert title here</title>
<script type="text/javascript">
$(document).ready(function(){

	$(".page-sidebar-menu>li").on("click", function() {
		$(".page-sidebar-menu>li").removeClass("active");
	    $(this).addClass("active");
	});

	$(".sub-menu li").on("click", function() {
		$(".sub-menu li").removeClass("active");
		$(this).addClass("active");
	});
})

function execShell() {
	$.ajax({
		url : "execShell",
		type : "get",
		dataType : "json",
		// data : {osv: $("[name='sel_osv']").val()},
		success : alert("执行完成！")
	});
}
</script>
</head>
<body>
			<!-- BEGIN SIDEBAR MENU -->
			<ul class="page-sidebar-menu">
				<li>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON loginRole-->
					<div class="sidebar-toggler hidden-phone"></div>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
				</li>
				
				<li><a href="javascript:;"> <i
						class="icon-bookmark-empty"></i> <span class="title" style="font-family:Times New Roman">Mocha</span> 
				</a>
					<ul class="sub-menu">
					<%if(!session.getAttribute("loginRole").equals(4)) {%>
						<li><a href="interface-test/interfacePage.jsp" target="mainFrame" style="font-family:Times New Roman">Script</a></li>
						<li><a href="interface-test/scriptList.jsp" target="mainFrame" style="font-family:Times New Roman">Script List</a></li>
					<%} %>
					</ul>
				</li>
				
				<li class=""><a href="javascript:;"> <i class="icon-th"></i>
						<span class="title" style="font-family:Times New Roman">Mocha Report</span> <span class="arrow "></span>
				</a>
					<ul class="sub-menu">
						<li><a href="http://172.16.26.128:9999/demo/mocha-reports/" target="mainFrame" style="font-family:Times New Roman">Demo</a></li>
						<li><a href="http://172.16.26.128:9999/performad/report/" target="mainFrame" style="font-family:Times New Roman">Performad</a></li>
						<li><a href="http://172.16.26.128:9999/premiummad/report/" target="mainFrame" style="font-family:Times New Roman">PremiumMad</a></li>
						<li><a href="http://172.16.26.128:9999/exchange/report/" target="mainFrame" style="font-family:Times New Roman">SmartExchange</a></li>
					</ul>
				</li>
		
				
				
				<li class=""><a href="javascript:;"> <i class="icon-th"></i>
						<span class="title" style="font-family:Times New Roman">Reports</span> <span class="arrow "></span>
				</a>
					<ul class="sub-menu">
						
						<li><a href="report/TestCountReport.jsp" target="mainFrame" style="font-family:Times New Roman">TestCount Report</a></li>
						<%if(session.getAttribute("loginRole").equals(1)) {%>
						<li><a href="report/MonitorReport.jsp" target="mainFrame" style="font-family:Times New Roman">Monitor Report</a></li>
						<li><a href="MonitorReport.jsp" target="mainFrame" style="font-family:Times New Roman">Date Report</a></li>
						<li><a href="MonitorReport.jsp" target="mainFrame" style="font-family:Times New Roman">Detail Report</a></li>
						<%} %>
					</ul>
				</li>
				
				
				<%if(session.getAttribute("loginRole").equals(1)||session.getAttribute("loginRole").equals(1)) {%>
				<li class=""><a href="javascript:;"> <i
						class="icon-briefcase"></i> <span class="title" style="font-family:Times New Roman">Setting</span> <span
						class="arrow "></span>
				</a>
					<ul class="sub-menu">
					
						<li><a href="setting/domain/listUrl.jsp" target="mainFrame" stylef="font-family:Times New Roman">Domain</a></li>
						<li><a href="setting/version/listVer.jsp" target="mainFrame" style="font-family:Times New Roman">Version</a></li>
						<li><a href="#" target="mainFrame" style="font-family:Times New Roman">Interface Name</a></li>
						<li><a href="#" target="mainFrame" style="font-family:Times New Roman">Interface Param</a></li>
						<%if(session.getAttribute("loginRole").equals(1)) {%>						
						<li><a href="UserSetting.jsp" target="mainFrame" style="font-family:Times New Roman">Size</a></li>
						<li><a href="UserSetting.jsp" target="mainFrame" style="font-family:Times New Roman">Channels</a></li>
						<li><a href="UserSetting.jsp" target="mainFrame" style="font-family:Times New Roman">UA</a></li>
						<li><a href="../setting/listUrl.jsp" target="mainFrame" style="font-family:Times New Roman">URL</a></li>
						<li><a href="UserSetting.jsp" target="mainFrame" style="font-family:Times New Roman">IP</a></li>
						<li><a href="clientPage.jsp" target="mainFrame" style="font-family:Times New Roman">Client Tool</a></li>
						<li><a href="javascript:getPicSize();" target="mainFrame" style="font-family:Times New Roman">GetSize</a></li>
						<li><a href="javascript:execShell();" target="mainFrame" style="font-family:Times New Roman">exec shell</a></li>
						<%} %>
					
					</ul></li>
				<%} %>
				
				
			</ul>
			<!-- END SIDEBAR MENU -->
			
			<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
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
	<!-- END CORE PLUGINS -->
	<script src="js/app.js"></script>
	<script>
		jQuery(document).ready(function() {
			// initiate layout and plugins
			App.init();
		});
	</script>
	<!-- END JAVASCRIPTS -->
	<!-- <script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push([ '_setAccount', 'UA-37564768-1' ]);
		_gaq.push([ '_setDomainName', 'keenthemes.com' ]);
		_gaq.push([ '_setAllowLinker', true ]);
		_gaq.push([ '_trackPageview' ]);
		(function() {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://'
					: 'http://')
					+ 'stats.g.doubleclick.net/dc.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();
	</script> -->
</body>
</html>