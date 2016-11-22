<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta charset="utf-8" />
<title>AutoTestTool(Web)</title>

<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<link href="css/style-metro.css" rel="stylesheet" type="text/css" />
	<link href="css/style.css" rel="stylesheet" type="text/css" />
	<link href="css/style-responsive.css" rel="stylesheet" type="text/css" />
	<link href="css/default.css" rel="stylesheet" type="text/css" id="style_color" />
	<link href="css/uniform.default.css" rel="stylesheet" type="text/css" />
	
<!--[if lt IE 9]>
			<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" />
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->


<script type="text/javascript">
SESSION_ID='<%=session.getAttribute("loginValue")%>';
	if (SESSION_ID == "" || SESSION_ID == 'null') {
		window.location.href = 'login.jsp';
	}
</script>
<script type="text/javascript" src="http://www.coding123.net/getip.ashx?js=1"></script>
</head>
<frameset rows="50px,*" cols="*" frameborder="no" border="0" framespacing="0">
	<frame src="header.jsp" name="topFrame" scrolling="No" noresize="noresize" id="topFrame" title="topFrame" />
	<frameset cols="15%,*" frameborder="no" border="0" framespacing="0">
		<frame src="menu.jsp" name="leftFrame" scrolling="No"
			noresize="noresize" id="leftFrame" title="leftFrame" />
		<frame src="interface-test/interfacePage.jsp" name="mainFrame" id="mainFrame"
			title="mainFrame" />
	</frameset>
</frameset>
<noframes>
	<body>
	</body>
</noframes>

</html>
