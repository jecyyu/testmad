<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@taglib prefix="s" uri="/struts-tags"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="../../css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="../../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="../../css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="../../css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="../../css/style.css" rel="stylesheet" type="text/css"/>
	<link href="../../css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="../../css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="../../css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<link rel="stylesheet" type="text/css" href="../../css/select2_metro.css" />
	<link rel="stylesheet" href="../../css/DT_bootstrap.css" />
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="../../image/favicon.ico" />
	
	<script src="../js/user-setting.js" type="text/javascript"></script>
	<script src="../../js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script>
		jQuery(document).ready(function() {
			getUrlList();
		})
		
		function hrefUrl(){
			self.location='addVer.jsp';
		}
	</script>
<title>Insert title here</title>
</head>
<body>
<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
	<!-- BEGIN CONTAINER -->
	<div class="page-container row-fluid">
		<!-- BEGIN SIDEBAR -->
		
		<!-- END SIDEBAR -->
		<!-- BEGIN PAGE -->
		<div class="page-content1">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<!-- BEGIN PAGE CONTAINER-->        
			<div class="container-fluid">
				<!-- BEGIN PAGE HEADER-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN STYLE CUSTOMIZER -->
						
						<!-- END BEGIN STYLE CUSTOMIZER -->  
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<h3 class="page-title">
							Version
						</h3>
						<ul class="breadcrumb">
							<li>
								<i class="icon-home"></i> 
								Setting
								<i class="icon-angle-right"></i>
							</li>
							<li>
								Version
							</li>
						</ul>
						<!-- END PAGE TITLE & BREADCRUMB-->
					</div>
				</div>
				<!-- END PAGE HEADER-->
				<!-- BEGIN PAGE CONTENT-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN EXAMPLE TABLE PORTLET-->
						<div class="portlet box light-grey">
							<div class="portlet-title">
								<div class="caption"><i class="icon-edit"></i>Version</div>
								<div class="tools">
									<a href="#">获取版本号</a>
								</div>
							</div>
							<div class="portlet-body">
								<div class="clearfix">
									<div class="btn-group">
										<button id="aaa" class="btn red" onClick="hrefUrl();">
										Add New <i class="icon-plus"></i>
										</button>
									</div>
									<!-- <div class="btn-group pull-right">
										<button class="btn dropdown-toggle" data-toggle="dropdown">Tools <i class="icon-angle-down"></i>
										</button>
										<ul class="dropdown-menu pull-right">
											<li><a href="#">Print</a></li>
											<li><a href="#">Save as PDF</a></li>
											<li><a href="#">Export to Excel</a></li>
										</ul>
									</div> -->
								</div>
								
								    
								    
								
								<table class="table table-striped table-hover table-bordered" id="sample_editable_1">
									<thead>
										<tr>
											<th>Tool</th>
											<th>Version Number</th>
											<th>Createtime</th>
										</tr>
									</thead>
									<tbody>
										<s:iterator value="#session.urlLists" status="statu" id="item">  
										<tr class="">
											<td><s:property value="urlId" />  </td>
											<td><s:property value="url" />  </td>
											<td><s:property value="url_system" />    </td>
										</tr>
										</s:iterator>  
									</tbody>
								</table>
							</div>
						</div>
						<!-- END EXAMPLE TABLE PORTLET-->
					</div>
				</div>
				<!-- END PAGE CONTENT -->
			</div>
			<!-- END PAGE CONTAINER-->
		</div>
		<!-- END PAGE -->
	</div>
	<!-- END CONTAINER -->
	<!-- BEGIN FOOTER -->
	<div class="footer">
		<div class="footer-inner">
			2015 &copy; AutoMation by JecyLiu.
		</div>
		<div class="footer-tools">
			<span class="go-top">
			<i class="icon-angle-up"></i>
			</span>
		</div>
	</div>
	<!-- END FOOTER -->
	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="../../js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="../../js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="../../js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>      
	<script src="../../js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="../../js/excanvas.min.js"></script>
	<script src="../../js/respond.min.js"></script>  
	<![endif]-->   
	<script src="../../js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="../../js/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="../../js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="../../js/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script type="text/javascript" src="../../js/select2.min.js"></script>
	<script type="text/javascript" src="../../js/jquery.dataTables.js"></script>
	<script type="text/javascript" src="../../js/DT_bootstrap.js"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="../../js/app.js"></script>
	<script src="../../js/interface-editable.js"></script>    
	<script>
		jQuery(document).ready(function() {       
		   App.init();
		   TableEditable.init();
		});
	</script>
<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
</body>
</html>