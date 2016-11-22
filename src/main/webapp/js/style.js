var riddenControl=1;
var actQuick=1,apimode,sdkVer;

///勾选随机处理
function readonlyControl(chkbox,txtbox)
{
	var chkStatus = document.getElementById(chkbox.id).checked;
	if(chkStatus)
		{
			document.getElementById(txtbox).value="";
			document.getElementById(txtbox).readOnly=true;
		}
	else
		{
			document.getElementById(txtbox).readOnly=false;
		}
	
}


function newNext(curr,next)
{
	var sys;
	
	
	switch(curr)
	{
		case 1:
			apimode = $("[name='rad_mode']:checked").val();//mode 0:快速 1:标准
			
			if(apimode=="0")
			{
				sys = "";
				control = "sel_quick_url";
				getReqUrl(sys);
				document.getElementById('hid_table').style.display = "";
				riddenControl=0;
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+5).addClass("active");
				$(".tabbable").find("ul li").eq(4).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
				
			}
			else
			{
				document.getElementById('hid_table').style.display = "none";
				riddenControl=1;
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			
			break;
		case 2:
			control = "sel_req_url";
			sys = $("[name='rad_clk_system']:checked").val();
			getReqUrl(sys);
			getFirstCity();
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			break;
		case 3:
			control = "sel_req_os";
			
			var chk_os = document.getElementById("sel_req_os").value;
			if(chk_os=="")
			{
				getReqOs(control);
			}
			document.getElementById('hid_table').style.display = "none";
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			break;
		case 4:
			static_count = 0;
			document.getElementById('hid_table').style.display = "none";
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			genReqUrl();
			$('#copy-dynamic').zclip({
		        path : '../js/ZeroClipboard.swf',
		        copy : function(){
		                   return $('input#dynamic').val();
		               }
		    });
			break;
		case 5:
			
			if(riddenControl==0)
			{
				document.getElementById('hid_table').style.display = "";
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+1).addClass("active");
				$(".tabbable").find("ul li").eq(0).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			else
			{
				document.getElementById('hid_table').style.display = "none";
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			break;
		default: 
			document.getElementById('hid_table').style.display = "none";
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
		break;
	}
	
	
}

function newActNext(curr,next)
{
	/*actQuick:0-only act 1-deviceid 2-dfp*/
	//var ;
	
	
	switch(curr)
	{
		case 1://Step1
			//control = "sel_req_url";
			sys = $("[name='rad_clk_system']:checked").val();
			
			if(sys=="Click")
			{
				
				
				document.getElementById('hid_table').style.display = "";
				riddenControl=0;
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+3).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
				$(".tabbable").find("ul li").eq(2).addClass("active");
				
				
			}
			else
			{
				document.getElementById('hid_table').style.display = "none";
				control = "sel_req_url";
				getReqUrl(sys);
				riddenControl=1;
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			
			break;
		case 2://Step2
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active")
			break;
		case 3://Step3
			if(curr>next)
			{
				if(sys=="Click")
				{
					document.getElementById('hid_table').style.display = "none";
					sdkVer = $("[name='rad_act_system']:checked").val();
					$("#tab_3_"+curr).removeClass("active");
					$("#tab_3_"+1).addClass("active");
					$(".tabbable").find("ul li").eq(0).addClass("active");
					$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
					
					
				}
				else
				{
					document.getElementById('hid_table').style.display = "none";
					$("#tab_3_"+curr).removeClass("active");
					$("#tab_3_"+next).addClass("active");
					$(".tabbable").find("ul li").eq(next-1).addClass("active");
					$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
				}
			}
			else
			{
				sdkVer = $("[name='rad_act_system']:checked").val();
				
				
				if(sdkVer=="SDK1.0")
				{
					document.getElementById("tab_sdk1").style.display = "";
					document.getElementById("tab_sdk2").style.display = "none";
					document.getElementById("tab_s2s").style.display = "none";
					control = "sel_sdk2_url";
				}
				if(sdkVer=="SDK2.0")
				{
					document.getElementById("tab_sdk1").style.display = "none";
					document.getElementById("tab_sdk2").style.display = "";
					document.getElementById("tab_s2s").style.display = "none";
					control = "sel_sdk3_url";
				}
				if(sdkVer=="S2S")
				{
					document.getElementById("tab_sdk1").style.display = "none";
					document.getElementById("tab_sdk2").style.display = "none";
					document.getElementById("tab_s2s").style.display = "";
					getChannel("sel_s2s_ch");
					control = "sel_s2s_url";
				}
				getReqUrl(sdkVer);
				document.getElementById('hid_table').style.display = "none";
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			break;
		case 4://Step4
			if(curr<next)
			{
				control = "sel_req_os";
				getReqOs();
			}
			
			document.getElementById('hid_table').style.display = "none";
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			
			//document.getElementById('area_req_genUrl').value = genReqUrl();
			break;
		case 5://Step5	
			if(sys=="Click")
			{
				document.getElementById('hid_table').style.display = "";
				document.getElementById('lab_req').style.display = "none";
				document.getElementById('lab_imp').style.display = "none";
				
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			else
			{
				document.getElementById('hid_table').style.display = "none";
				document.getElementById('lab_req').style.display = "";
				document.getElementById('lab_imp').style.display = "";
				
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			document.getElementById('area_act_genUrl').value =genActUrl();
			break;
		case 6://Step6
			if(actQuick==2)
			{
				document.getElementById('hid_table').style.display = "";
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			else
			{
				document.getElementById('hid_table').style.display = "none";
				$("#tab_3_"+curr).removeClass("active");
				$("#tab_3_"+next).addClass("active");
				$(".tabbable").find("ul li").eq(next-1).addClass("active");
				$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
			}
			break;
		default: 
			document.getElementById('hid_table').style.display = "none";
			$("#tab_3_"+curr).removeClass("active");
			$("#tab_3_"+next).addClass("active");
			$(".tabbable").find("ul li").eq(next-1).addClass("active");
			$(".tabbable").find("ul li").eq(curr-1).removeClass("active");
		break;
	}
	
	
}

function styleStart() {
	$("#but_start").attr("disabled", true);
	$("#but_end").attr("disabled", false);
	$("#but_gen_requrl").attr("disabled", true);
	$("#but_gen_acturl").attr("disabled", true);
	$("#txt_adspaceid").attr("disabled", true);
	$("#txt_sdk_convId").attr("disabled", true);
	$("#txt_s2s_campId").attr("disabled", true);
}
function styleEnd() {
	$("#but_start").attr("disabled", false);
	$("#but_end").attr("disabled", true);
	$("#but_gen_requrl").attr("disabled", false);
	$("#but_gen_acturl").attr("disabled", false);
	$("#txt_adspaceid").attr("disabled", false);
	$("#txt_sdk_convId").attr("disabled", false);
	$("#txt_s2s_campId").attr("disabled", false);
}

function styleBroadStart() {
	$("#but_broad_start").attr("disabled", true);
	$("#but_broad_end").attr("disabled", false);
}
function styleBroadEnd() {
	$("#but_broad_start").attr("disabled", false);
	$("#but_broad_end").attr("disabled", true);
}

// 长字符省略号代替
function formatStrLength(str, len) {

	var leng = str.replace(/[^\x00-\xff]/g, "**").length;
	if (leng > len) {
		var tmpStr = str.substr(0, len);
		var tmpCode = tmpStr.replace(/[^\x00-\xff]/g, '\r\n').split('');
		len = (tmpCode[len - 1] == '\r') ? len - 2 : len - 1;
		var l = tmpCode.slice(0, len).join('').replace(/\r\n/g, '*').length + 1;
		return tmpStr.substr(0, l) + "...";
	}

	return str;

}

function textAreaOnchange(control){
	if($("#"+control+"").val()!="")
		{
			control=control.split("_")[1];
			document.getElementById("chk_"+control).checked=true;
		}
	else
		{
		control=control.split("_")[1];
			document.getElementById("chk_"+control).checked=false;
		}
}

function nextBtn(index) {
	var sys = "";
	var rad1 = document.getElementsByName("rad_system");
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
				chkSys(sys);
				getUrl(sys);
				document.getElementById('lab_sysinfo').innerText = "[" + sys
						+ "]";

			}
		}
	}

	$("ul.tabs li").removeClass("active"); // Remove any "active" class
	$("ul.tabs li").eq(index).addClass("active"); // Add "active" class to
													// selected tab
	$(".tab_content").hide(); // Hide all tab content
	$("#tab" + (++index)).fadeIn(); // Fade in the active ID content
}

function reqNext() {
	var sys = "";
	var rad1 = document.getElementsByName("rad_clk_system");
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
				chkSys(sys);
				getClkUrl(sys);
				// document.getElementById('lab_req_sysinfo').innerText = "["+
				// sys + "]";

			}
		}
	}

}

function getUTC() {
	if (document.getElementById("chk_clktimeUTC").checked) {
		document.getElementById("txt_clktime").value = nowUtcDate();
	} else {
		document.getElementById("txt_clktime").value = nowDate();
	}
	if (document.getElementById("chk_cvntimeUTC").checked) {
		document.getElementById("txt_cvntime").value = nowUtcDate();
	} else {
		document.getElementById("txt_cvntime").value = nowDate();
	}

}

function chkSys(param) {
	var s2s_aid = document.getElementById("s2s_aid");
	var sdk_did = document.getElementById("sdk_did");
	var s2s_campid = document.getElementById("s2s_campid");
	var sdk_convid = document.getElementById("sdk_convid");
	var s2s_chid = document.getElementById("s2s_chid");
	var s2s_clickid = document.getElementById("s2s_clickid");

	switch (param) {
	case "S2S":
		s2s_aid.style.display = "";
		s2s_chid.style.display = "";
		s2s_campid.style.display = "";
		s2s_clickid.style.display = "";
		sdk_did.style.display = "none";//
		sdk_param.style.display = "none";
		sdk_convid.style.display = "none";
		break;

	case "SDK":
		s2s_aid.style.display = "none";
		s2s_chid.style.display = "none";
		s2s_campid.style.display = "none";
		s2s_clickid.style.display = "none";
		sdk_did.style.display = "";
		sdk_param.style.display = "";
		sdk_convid.style.display = "";
		break;
	}
}

function areaClear(areaId)
{
	document.getElementById(areaId).value="";
}


function ipStyle(ipValue)
{
	if(ipValue=="-1")
	{
		document.getElementById('span_city').style.display = "none";
		document.getElementById('cust_city').style.display = "";
	}
	else
	{
		document.getElementById('span_city').style.display = "";
		document.getElementById('cust_city').style.display = "none";
	}
}
