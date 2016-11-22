<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.o../html4/loose.dtd">
<html>
<head>
<%@taglib prefix="s" uri="/struts-tags"%>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="../css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="../css/style.css" rel="stylesheet" type="text/css"/>
	<link href="../css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="../css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="../css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<link rel="stylesheet" type="text/css" href="../css/select2_metro.css" />
	<link rel="stylesheet" href="../css/DT_bootstrap.css" />
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="../image/favicon.ico" />
	<script src="../js/ckeditor/ckeditor.js" type="text/javascript" charset="utf-8"></script>
	<script src="../js/interface.js" type="text/javascript"></script>
	<script src="../js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script>
		jQuery(document).ready(function() {
			getEditInter();
			control = "sel_path";
		})
		
		function returnPage()
		{
			location.href='interfacePage.jsp';
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
							Edit Script Info
						</h3>
						<ul class="breadcrumb">
							<li>
								<i class="icon-home"></i> 
								Setting
								<i class="icon-angle-right"></i>
							</li>
							<li>
								Edit Script Info
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
								<div class="caption"><i class="icon-edit"></i>Edit Script Info</div>
								<div class="tools">
									
								</div>
							</div>
							<div class="portlet-body">
								<form action="../updateInterface" class="form-horizontal" method="post">
									<div class="control-group">

										<label class="control-label">Platform：</label>

										<div class="controls">

											<select id="sel_system" name="sel_system" class="span6 m-wrap" data-placeholder="Choose a Category" tabindex="1" onChange="getInterPath(this.value)">
											
											</select>

											

										</div>

									</div>
									
									<div class="control-group">
									
										<label class="control-label">Script Path：</label>
										<div class="controls">
											<select id="sel_path" name="sel_path" class="span6 m-wrap" data-placeholder="Choose a Category" tabindex="1" ></select>
										</div>

									</div>
									<div class="control-group">

										<label class="control-label">Script Name：</label>

										<div class="controls">

											<input type="text" id="txt_inter_name" name="txt_inter_name" class="span6 m-wrap popovers" data-trigger="hover" data-content="输入与脚本名称一致的Name(包括后缀名)" data-original-title="Script Name" />

										</div>

									</div>

									<div class="control-group">

										<label class="control-label">Description：</label>

										<div class="controls">
										
											<textarea name="area_desc"rows="" cols="" data-trigger="hover" data-content="接口详细参数内容" data-original-title="Description"></textarea>
											<script type="text/javascript">CKEDITOR.replace('area_desc')</script>
											<!-- <input type="text" id="txt_version" name="txt_version" class="span6 m-wrap popovers" data-trigger="hover" data-content="版本号" data-original-title="Description" /> -->
										</div>

									</div>

									<div class="control-group">

									<input type="hidden" id="hid_id" name="hid_id" value="-1"/>

									<div class="form-actions">

										<button type="submit" class="btn blue">Submit</button>

										<button type="button" class="btn" onClick="returnPage();">Cancel</button>                            

									</div>

								</form>

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
	<script src="../js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="../js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="../js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>      
	<script src="../js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="../js/excanvas.min.js"></script>
	<script src="../js/respond.min.js"></script>  
	<![endif]-->   
	<script src="../js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="../js/jquery.blockui.min.js" type="text/javascript"></script>  
	<script src="../js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="../js/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script type="text/javascript" src="../js/select2.min.js"></script>
	<script type="text/javascript" src="../js/jquery.dataTables.js"></script>
	<script type="text/javascript" src="../js/DT_bootstrap.js"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="../js/app.js"></script>
	<script src="../js/interface-editable.js"></script>    
	<script>
		jQuery(document).ready(function() {       
		   App.init();
		   TableEditable.init();
		});
	</script>
<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
</body>
</html>