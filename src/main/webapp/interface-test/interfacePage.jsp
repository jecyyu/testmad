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
	<script type="text/javascript" src="../easyui/jquery.easyui.min.js"></script> 
	<script src="../js/param-bind.js" type="text/javascript"></script>
	<script src="../js/interface.js" type="text/javascript"></script>
	
	<script src="../js/waitdialog.js" type="text/javascript"></script>
	<script>
		jQuery(document).ready(function() {
			UIGeneral.init();
			initial();
			control = "sel_path";
			var sel_length="";
			
			//getInterParam();
			//getInterface();
			
			$("#deleteTable").attr("disabled", true);
			 $("#addTable").click(function(){
				  sel_length = document.getElementById("table1").rows.length;
			       var tr="<tr><td><input type=\"checkbox\" id=\"chk_param_"+sel_length+"\" name=\"chk_param_"+sel_length+"\" checked/></td><td>Param:</td><td>"+
			       "<select id=\"sel_param_"+sel_length+"\"  name=\"sel_param_"+sel_length+"\" onChange=\"getRemarkInfo('"+sel_length+"')\"/>"+
			              "</td><td>Value:</td><td><input type=\"text\" id=\"txt_val_"+sel_length+"\" name=\"txt_val_"+sel_length+"\"/></td>"
			              +"<td><span  id=\"span_remark_"+sel_length+"\" name=\"span_remark_"+sel_length+"\" ></span></td></tr>";
			              $("#table1").append(tr);
			              $("#deleteTable").attr("disabled", false);
			              interParamControl="sel_param_"+sel_length;
			              
			              getInterParam(sel_length);
			              
			    });
			 
			    $("#deleteTable").click(function(){
			    	var sel_length = document.getElementById("table1").rows.length;
			        if(sel_length==1)
			        {
			        	document.getElementById('table1').deleteRow(sel_length-1);
			        	$("#deleteTable").attr("disabled", true);
			        }else
			        {
			    		document.getElementById('table1').deleteRow(sel_length-1);
			        }
			    })
			
			
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
			getSystem();
			//getInterUrl("Interface");
			
		}
		
		function next(index)
		{
			$(".tabbable").find("ul li a").eq(index).trigger("click"); // Fade in the active ID content
		}
		
		function editButton()
		{
			var id = $("#sel_interface").find("option:selected").val();
			location.href='editInterface.jsp?id='+id;
		} 
		
		function delButton()
		{
			var id = $("#sel_interface").find("option:selected").val();
			location.href='../deleteInterface?id='+id;
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
						<h3 class="page-title" style="font-family:Times New Roman">Mocha Script
						<small>Mocha脚本说明和运行</small>
						</h3>
						<!-- END BEGIN STYLE CUSTOMIZER -->
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<ul class="breadcrumb" style="font-family:Times New Roman">
							<li>
								<i class="icon-home"></i> 
								Mocha
								<i class="icon-angle-right"></i>
							</li>
							<li>
								Script
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
						<table id="table_tmp" border="0">
								<tr>
									<td >Platform：</td>
									<td>
										<select  name="sel_system" id="sel_system" style="width:100px" onload="getInterPath(this.value)"  onChange="getInterPath(this.value)">
											<option value=""></option>
										</select>
									</td>
									<td >Path：</td>
									<td>
										<select  name="sel_path" id="sel_path" style="width:200px"  onChange="getInterface()">
											<option value=""></option>
										</select>
									</td>
									<td >Script Name：</td>
									<td>
										<select id="sel_interface"  name="sel_interface" style="width:300px"  onChange="getInterfaceRemark();"></select>
									</td>
									<td>
										<input type="button" class="btn red" value="Create" id="addButto" style="vertical-align:middle" onClick="location.href='addInterface.jsp'"/>
										<input type="button" class="btn red" value="Edit" id="editButto" style="vertical-align:middle" onClick="editButton()"/>
										<input type="button" class="btn red" value="Delete" id="delButto" style="vertical-align:middle" onClick="delButton()"/>
										<a class="btn blue" data-toggle="modal" href="#stack2">Run</a>
									</td>
									<td>
										
									</td>
									<td>
										
									</td>
									
								</tr>
								<tr>
									<td colspan="9">
										<div class="alert">
											<div id="div_remark"></div>
											
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