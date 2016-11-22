<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- 
	
	
	
	
	<link href="../css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="../css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="../css/uniform.default.css" rel="stylesheet" type="text/css"/>
	END GLOBAL MANDATORY STYLES -->

<link href="../css/report-style.css" rel="stylesheet" type="text/css"/>
<link href="../css/style-metro.css" rel="stylesheet" type="text/css"/>
<link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css"/>	
<!-- <link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>	 -->
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="../easyui/easyui.css">
<link rel="stylesheet" type="text/css" href="../easyui/icon.css">
<link rel="stylesheet" href="../css/DT_bootstrap.css" />
<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
<link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />


<script src="../js/jquery-1.10.1.js" type="text/javascript"></script>
<script src="../easyui/jquery.easyui.min.js" type="text/javascript"></script>
<script src="../js/easyui-setting.js" type="text/javascript"></script>
<script src="../js/user-setting.js" type="text/javascript"></script>
<script src="../js/report-data.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/jquery.dataTables.js"></script>
<title>Insert title here</title>
</head>
<body>
	<!-- BEGIN HEADER -->
	
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
						<h3 class="page-title" style="font-family:Times New Roman">
							TestCount Report
							<small>显示通过TestCount接口发送的请求数(url:http://172.16.26.114:8080/QA-Tracking/trackingCount?remark=demo)</small>
							<small>附：impCount、clkCount、imptrackingCount、clktrackingCount</small>
						</h3>
						<ul class="breadcrumb" style="font-family:Times New Roman">
							<li>
								<i class="icon-home"></i> 
								Report
								<i class="icon-angle-right"></i>
							</li>
							<li>
								TestCount Report
							</li>
						</ul>
						<!-- END PAGE TITLE & BREADCRUMB-->
					</div>
				</div>
				<!-- END PAGE HEADER-->
				<!-- BEGIN PAGE CONTENT-->          
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN SAMPLE TABLE PORTLET-->
						
						<div class="portlet box grey">
							<div class="portlet-title">
								<div class="caption"><i class="icon-cogs"></i>Result</div>
								<div class="tools">
									<!-- <a href="javascript:;" class="collapse"></a>
									<a href="#portlet-config" data-toggle="modal" class="config"></a>
									<a href="javascript:;" class="reload"></a>
									<a href="javascript:;" class="remove"></a> -->
								</div>
							</div>
							<div class="portlet-body flip-scroll">
							<table id="count_dg" class="easyui-datagrid"  style="width:100%;height:500px" toolbar="#request.reportlist" 
					            data-options="rownumbers:true,singleSelect:true,method:'get'">
					        <thead>
					            <tr>
					                <th field="adspaceid" style="width:80;align:center" rowspan="2"></th>
					                <th field="campid" style="width:100;align:center"  rowspan="2"></th>
					                <th field="convid" style="width:100;align:center" rowspan="2"></th>
					            </tr>
					            <tr>
					                <th  field="req" style="width:100;align:center"></th>
					                <th  field="imp" style="width:100;align:center"></th>
					                <th  field="clk" style="width:100;align:center"></th>
					                <th  field="act" style="width:100;align:center"></th>
					                <th  field="remark" style="width:100;align:center"></th>
					                <th  field="author" style="width:100;align:center"></th>
					                <th  field="createtime" style="width:100;align:center"></th>
					            </tr>
					        </thead>
			
					    </table>
								
							</div>
						</div>
						<!-- END SAMPLE TABLE PORTLET-->
					</div>
				</div>
				<!-- END PAGE CONTENT-->
			</div>
			<!-- END PAGE CONTAINER-->
		</div>
		<!-- END PAGE -->
	</div>
	<!-- END CONTAINER -->
	<script>
		$(document).ready(function() {
			getTestCountReportByPage();
		});
	</script>
<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script></body>
</html>