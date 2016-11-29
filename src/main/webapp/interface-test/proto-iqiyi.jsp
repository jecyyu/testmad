<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8" />
	<title>Madhouse | 自动化工具</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<link href="../css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<link href="../css/style-metro.css" rel="stylesheet" type="text/css" />
	<link href="../css/style.css" rel="stylesheet" type="text/css" />
	<link href="../css/style-responsive.css" rel="stylesheet" type="text/css" />
	<link href="../css/default.css" rel="stylesheet" type="text/css" id="style_color" />
	<link href="../css/uniform.default.css" rel="stylesheet" type="text/css" />
	<link href="../css/wait.css" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" type="text/css" href="../easyui/easyui.css"/>
	<link href="../css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="../css/style-responsive.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="../easyui/icon.css">
	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="../js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="../js/jquery-migrate-1.2.1.min.js"
		type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="../js/jquery-ui-1.10.1.custom.min.js"
		type="text/javascript"></script>
	<script src="../js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="../js/excanvas.min.js"></script>
	<script src="../js/respond.min.js"></script>  
	<![endif]-->
	<script src="../js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="../js/jquery.blockui.min.js" type="text/javascript"></script>
	<script src="../js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="../js/jquery.uniform.min.js" type="text/javascript"></script>
	<script src="../js/md5.js" type="text/javascript"></script>
	<script src="../js/Base64.js" type="text/javascript"></script>
	<script src="../js/style.js" type="text/javascript"></script>
	<!-- END CORE PLUGINS -->
	<script type="text/javascript" src="../js/jquery.gritter.js"></script>
	<script type="text/javascript" src="../js/jquery.pulsate.min.js"></script>
	<script type="text/javascript" src="../js/jquery.bootpag.min.js"></script>
	<script src="../js/app.js"></script>
	<script src="../js/ui-general.js"></script>     
	<script type="text/javascript" src="../easyui1.5/jquery.easyui.min.js"></script> 
	<script src="../js/param-bind.js" type="text/javascript"></script>
	<script src="../js/interface.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="../easyui1.5/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="../easyui1.5/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="../easyui1.5/demo.css">
	<script src="../js/waitdialog.js" type="text/javascript"></script>
	<script src="../js/protobuf/protobuf_send.js" type="text/javascript"></script>
	<script src="../js/ajaxfileupload2.js" type="text/javascript"></script>
	<script>
		jQuery(document).ready(function() {
			UIGeneral.init();
			initial();
			control = "sel_path";
			var sel_length="";
			
			
			
			jQuery('body').on('click', '.portlet .tools .collapse, .portlet .tools .expand', function (e) {
	            e.preventDefault();
	                var el = jQuery(this).closest(".portlet").children(".portlet-body");
	                if (jQuery(this).hasClass("collapse")) {
	                    jQuery(this).removeClass("collapse").addClass("expand");
	                    el.slideUp(200);
	                } else {
	                    jQuery(this).removeClass("expand").addClass("collapse");
	                    el.slideDown(200);
	                }
	        });
		});
		
		window.onload = function(){ 
			//getSystem();
			//getInterUrl("Interface");
			
		}
		
		function next(index)
		{
			$(".tabbable").find("ul li a").eq(index).trigger("click"); // Fade in the active ID content
		}
		
	</script>
	<script type="text/javascript">  var _gaq = _gaq || [];  _gaq.push(['_setAccount', 'UA-37564768-1']);  _gaq.push(['_setDomainName', 'keenthemes.com']);  _gaq.push(['_setAllowLinker', true]);  _gaq.push(['_trackPageview']);  (function() {    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);  })();</script>
	<!-- END JAVASCRIPTS -->
	<!-- END GLOBAL MANDATORY STYLES -->
	<link rel="shortcut icon" href="../image/favicon.ico" />
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body>
	<!-- BEGIN CONTAINER -->
	<div class="page-container row-fluid">
		<!-- BEGIN PAGE -->
		<div  class="page-content1">
			<!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<div id="portlet-config" class="modal hide">
				<div class="modal-header">
					<button data-dismiss="modal" class="close" type="button"></button>
					<h3>portlet Settings</h3>
				</div>
				<div class="modal-body">
					<p>Here will be a configuration form</p>
				</div>
			</div>
			<!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
			<div class="container-fluid">
				<!-- BEGIN PAGE HEADER-->
				<div class="row-fluid">
					<div class="span12">
						<h3 class="page-title" style="font-family:Times New Roman">Protobuf-iQIYI
						<small>Protobuf形式的POST请求</small>
						</h3>
						<!-- END BEGIN STYLE CUSTOMIZER -->
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<ul class="breadcrumb" style="font-family:Times New Roman">
							<li>
								<i class="icon-home"></i> 
								Protobuf
								<i class="icon-angle-right"></i>
							</li>
							<li>
								IQIYI
							</li>
						</ul>
						<!-- END PAGE TITLE & BREADCRUMB-->
					</div>
				</div>
				<!-- END PAGE HEADER-->
				<!-- BEGIN PAGE CONTENT-->
				<div class="row-fluid ">
					<div class="span12">
						<!-- BEGIN INLINE TABS PORTLET-->
						<form class = "form-horizontal" enctype='multipart/form-data' method='post' action='/Tracking-QA/uploadServlet' role = "form" id = "frmUploadFile">
						<table id="table_tmp" border="0" >
								<tr height="20px" align="center" style="text-align:center">
									<td >upload config：</td>
									<td>
								           <input type="file" id="file" name="file" size="5" style="width:200px"/>
										   <input id="uploadbutton" type="button" value="Upload" onclick="ajaxFileUpload()"/>
									</td>
									<td>
										
									</td>
									<td>
										<a class="btn blue" data-toggle="modal" onClick="javascript:sendIqiyiProto()">Run</a>
									</td>
									<td>
										
									</td>
									
								</tr>
								<tr>
									<td colspan="5" width="100%">
										<div class="alert" id="div_remark" style="white-space:normal">
											<!-- <div id="div_remark" style="word-wrap:break-word" width="100%"></div> -->
											需要上传config文件！！
										</div>
									</td>
								</tr>
						</table>
						<div id="stack2" class="modal hide fade" tabindex="-1" data-focus-on="input:first">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
										<h3>Run</h3>
									</div>
									<div class="modal-body">
										<p>输入接口参数，eg：150,2015/12/31,2016/03/31,report</p>
										<table>
										<tr>
											<td>param:</td><td><input id="txt_param" name="txt_param" type="text" class="m-wrap" data-tabindex="5"/></td><td>*输入执行脚本对应的参数</td>
										</tr>
										<tr>
											<td>report-name:</td><td><input id="txt_reportName" name="txt_reportName" type="text" class="m-wrap" data-tabindex="5"/></td><td>*输入执行脚本后输出的Report</td>
										</tr>
									
									</table>
									</div>
									<div class="modal-footer">
										<button type="button" data-dismiss="modal" class="btn">Close</button>
										<button type="button" class="btn yellow" onClick="javascript:execScript();">Run</button>

									</div>
									

						</div>
						<div class="portlet box grey">
							<div class="portlet-title">
								<div class="caption"><i class="icon-reorder"></i>运行输出</div>
								<div class="tools">
									<a href="javascript:;" class="collapse"></a>
								</div>
							</div>
							<div class="portlet-body">
								<div class="accordion" id="accordion1">
									<table border="0" width="100%">
										
										
										<tr>
											<td>
												<label>展示(返回状态|发送时间|crid|URL)<a href="javascript:areaClear('area_imp');">[清空]</a></label>
												<textarea rows="5" id="area_imp" wrap="off" style="resize: none;width:98%" readonly></textarea>
											</td>
											
										</tr>
										
										<tr>
											<td>
												<label>点击(返回状态|发送时间|crid|URL)<a href="javascript:areaClear('area_clk');">[清空]</a></label>
												<textarea rows="5" id="area_clk" wrap="off" style="resize: none;width:98%" readonly></textarea>
											</td>
											
										</tr>
										
										<tr>
											<td>
												<label>icon(返回状态|发送时间|crid|URL)<a href="javascript:areaClear('area_icon');">[清空]</a></label>
												<textarea rows="5" id="area_icon" wrap="off" style="resize: none;width:98%" readonly></textarea>
											</td>
											
										</tr>
										
										<tr>
											<td>
												<label>Response<a href="javascript:areaClear('area_req');">[清空]</a></label>
												<textarea rows="20" id="area_req" wrap="off" style="resize: none;width:98%" readonly></textarea>
											</td>
										</tr>
									
									
									</table>
									</form>
									
									
									
									
									
								</div>
							</div>
				</div>
				
				
			</div>
			<!-- END PAGE CONTAINER-->
		</div>
		<!-- BEGIN PAGE -->
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
</body>
<!-- END BODY -->
</html>