var res_id, co, req_timer, act_timer, clksys, actsys, returncode, impurl, clkurl, acturl, thclkurl, picUrl, count = 0, cid;
var sendBlank;
var bool_randImp, bool_randClk;

function start() {
	if (SESSION_ID == "" || SESSION_ID == 'null') {
		window.location.href = 'login.jsp';
	} else {
		$("#lab_req_count").attr("value", "0");
		$("#lab_imp_count").attr("value", "0");
		$("#lab_clk_count").attr("value", "0");
		$("#lab_act_count").attr("value", "0");
		Number($("#lab_req_count").html(0));
		Number($("#lab_imp_count").html(0));
		Number($("#lab_clk_count").html(0));
		Number($("#lab_act_count").html(0));
		count = 0;
		res_id = randMD5Number();
		var delay = $("#txt_sendBlank").val() * 1000;
		var bool_req = document.getElementById("chk_req").checked;
		var bool_act = document.getElementById("chk_act").checked;
		var bool_clk = document.getElementById("chk_clk").checked;
		
		bool_randImp = document.getElementById("chk_rand_imp").checked;
		bool_randClk = document.getElementById("chk_rand_clk").checked;
		
		var requrl;
		var acturl = document.getElementById("area_genUrl").value;
		if (bool_req || bool_act || bool_clk) {
			if (!bool_req) {
				requrl = "";
			}
			if (!bool_act) {
				acturl = "";
			}
			styleStart();

			sendLoop();
		} else {
			alert("请求或激活未勾选！");
		}
	}
}

function end() {
	count = Number($("#txt_sendCount").val()) + 1;
	//record();
	styleEnd();
}


function startbroad() {
	if (SESSION_ID == "" || SESSION_ID == 'null') {
		window.location.href = 'login.jsp';
	} else {
		$("#lab_imp_count").attr("value", "0");
		$("#lab_clk_count").attr("value", "0");
		Number($("#lab_imp_count").html(0));
		Number($("#lab_clk_count").html(0));
		count = 0;
		res_id = randMD5Number();
		var delay = $("#txt_sendBlank").val() * 1000;
		var bool_imp = document.getElementById("chk_imp").checked;
		var bool_clk = document.getElementById("chk_clk").checked;

		impUrl = document.getElementById("area_imp").value;
		clkUrl = document.getElementById("area_clk").value;
		if (bool_imp || bool_clk) {
			if (!bool_imp) {
				impUrl = "";
			}
			if (!bool_clk) {
				clkUrl = "";
			}
			styleBroadStart();

			sendBroadLoop();
		} else {
			alert("展示和点击至少一个必须勾选！");
		}
	}
}

function endbroad() {
	count = Number($("#txt_sendCount").val()) + 1;
	//record();
	styleBroadEnd();
}


function record() {
	var adspaceid;
	var campid;
	var convid;
	var req = $("#lab_req_count").html();
	var imp = $("#lab_imp_count").html();
	var clk = $("#lab_clk_count").html();
	var act = $("#lab_act_count").html();
	var bool_req = document.getElementById("chk_req").checked;
	var bool_act = document.getElementById("chk_act").checked;
	var remark = $("#txt_remark").val();
	if (bool_req) {
		adspaceid = $("#txt_adspaceid").val();
	}
	if (bool_act) {
		var sys = document.getElementsByName("rad_system");
		if (sys == "SDK") {
			convid = $("#txt_sdk_convId").val();
		}
		if (sys == "S2S") {
			campid = $("#txt_s2s_campId").val();
		}
	}

	recordData(req, imp, clk, act, adspaceid, campid, convid, remark);
}

function sendBroadLoop() {
	sendBlank = document.getElementById("txt_sendBlank").value * 1000;
	
	if ($("#txt_sendCount").val() != "0") {
		if (count >= $("#txt_sendCount").val()) {
			
			styleBroadEnd();
			return;
		}
		;
	} else {
		if (count != $("#txt_sendCount").val()) {
			
			styleBroadEnd();
			return;
		}
		;
	}
	if ($("#chk_imp").is(":checked")) { // ATD
		setTimeout(function(){
			sendHttp(0, impUrl , function(dataUrl) {
				recordBroadImp(res_id,"--" ,"", impUrl, $(
						"#txt_remark").val());
				writeArea(0,"", "area_res_imp", "lab_imp_count", impUrl);
				setTimeout(function() { // 激活回调函数

					if (!$("#chk_clk").is(":checked")) {
						// todo
						if ($("#txt_sendCount").val() != 0) {
							count++;
						}
						sendBroadLoop();
					}
					else
					{
						sendHttp(0,clkUrl, function() { // 点击回调函数
							var clk_campid = clkUrl.split("?")[1].split("&")[0].split("=")[1];
							recordBroadClk(res_id, "--" ,clk_campid, clkUrl, $(
									"#txt_remark").val());
							writeArea(0, cid, "area_res_clk", "lab_clk_count", clkUrl);
							count++;
							sendBroadLoop();
						});
					}
				}, sendBlank);
				
				
			});
		},sendBlank);
		
	} else {
		if ($("#chk_clk").is(":checked")) {
			if (clkUrl != "") {
				setTimeout(function() {
					send(0, clkUrl, function() { // 点击回调函数
						var clk_campid = clkUrl.split("?")[1].split("&")[0].split("=")[1];
						recordBroadClk(res_id, "--" ,clk_campid, clkUrl, $(
								"#txt_remark").val());
						writeArea(0, cid, "area_res_clk", "lab_clk_count", clkUrl);
						var myDate = new Date();
						var mynow = myDate.toLocaleTimeString();
						setTimeout(function() { // 激活回调函数

							// todo
							if ($("#txt_sendCount").val() != 0) {
								count++;
							}
							sendBroadLoop();
						}, sendBlank);

					});
				}, sendBlank);
			} else {
				setTimeout(function() { // 激活回调函数

					// todo
					if ($("#txt_sendCount").val() != 0) {
						count++;
					}
					sendBroadLoop();
				}, sendBlank);
			}
		}else{
		setTimeout(function() { // 激活回调函数

			// todo
			if ($("#txt_sendCount").val() != 0) {
				count++;
			}
			sendBroadLoop();
		}, sendBlank);}
	}

}

function sendLoop() {
	sendBlank = document.getElementById("txt_sendBlank").value * 1000;
	var rand_number = rd(0, 1);
	var rand_imp_status,rand_clk_status;
	if(bool_randImp)
	{
		rand_imp_status = rd(0, 1);
	}
	else
	{
		rand_imp_status = 0;
	}
	if(rand_imp_status == 0)
	{
		if(bool_randClk)
		{
			rand_clk_status = rd(0, 1);
		}
		else
		{
			rand_clk_status = 0;
		}
	}
	else
	{
		rand_clk_status = 1;
	}
	
	reqUrl = $("#area_req_genUrl").val();
	if ($("#txt_sendCount").val() != "0") {
		if (count >= $("#txt_sendCount").val()) {
			
			styleEnd();
			return;
		}
		;
	} else {
		if (count != $("#txt_sendCount").val()) {
			
			styleEnd();
			return;
		}
		;
	}
	if ($("#chk_req").is(":checked")) { // ATD
		var width,height;
		send(0, reqUrl = genReqUrlRand(), function(dataUrl) {
			recordReq(0, res_id, $("#txt_adspaceid").val(), reqUrl, $(
					"#txt_remark").val());
			writeArea(0,"", "area_req", "lab_req_count", reqUrl);
			var result = GetXML(dataUrl);
			// 解析URL
			if (result !== false) {

			}
			var xmlUrl = GetXML(dataUrl);
			var impUrl = xmlUrl[0];
			var picUrl = xmlUrl[2];
			if ($("#chk_imp").is(":checked")) {
				if (impUrl != "") {
					if(bool_randImp||rand_number==0){}//0-发送
					
					send(rand_imp_status, impUrl, function() {
						var pic_src = document.getElementById("img_pic");
						var image = new Image();
						pic_src.src = picUrl;
						image.src=pic_src.src;
						image.onload = function(){
							width = image.width;
							height = image.height;
							document.getElementById("lab_size").innerHTML=width+"*"+height;
						};
						recordImp(rand_imp_status, res_id, $("#txt_adspaceid").val(), impUrl, $(
								"#txt_remark").val());
						writeArea(rand_imp_status, cid, "area_imp", "lab_imp_count", impUrl);
						setTimeout(function() { // 激活回调函数

							if (!$("#chk_clk").is(":checked")) {
								// todo
								if ($("#txt_sendCount").val() != 0) {
									count++;
								}
								sendLoop();
							}
						}, sendBlank);
					});
				} else {
					writeErrorArea("area_imp", "未获取到展示链接");
				}
			}
			var clkUrl = xmlUrl[1];
			if ($("#chk_clk").is(":checked")) {
				if (clkUrl != "") {
					setTimeout(function(){
					send(rand_clk_status, clkUrl, function() { // 点击回调函数
						recordClk(rand_clk_status,res_id, $("#txt_adspaceid").val(), clkUrl, $(
								"#txt_remark").val());
						writeArea(rand_clk_status, cid, "area_clk", "lab_clk_count", clkUrl);
						var myDate = new Date();
						var mynow = myDate.toLocaleTimeString();
						if ($("#chk_act").is(":checked")) {
							setTimeout(function() {
								var actUrl = $("#area_genUrl").val();
								writeArea(0, cid, "area_act", "lab_act_count",
										actUrl);
								send(0, actUrl, function() { // 激活回调函数

									// todo
									if ($("#txt_sendCount").val() != 0) {
										count++;
									}
									sendLoop();
								});
							}, sendBlank);
						} else {
							setTimeout(function() { // 激活回调函数

								// todo
								if ($("#txt_sendCount").val() != 0) {
									count++;
								}
								sendLoop();
							}, sendBlank);
						}

					});},sendBlank);
				} else {
					writeErrorArea("area_clk", "未获取到点击链接");
					if ($("#chk_act").is(":checked")) {
						setTimeout(
								function() {
									var actUrl = $("#area_genUrl").val();
									writeArea(0, cid, "area_act", "lab_act_count",
											actUrl);
									send(0, actUrl, function() { // 激活回调函数

										// todo
										if ($("#txt_sendCount").val() != 0) {
											count++;
										}
										sendLoop();
									});
								}, sendBlank);
					} else {
						setTimeout(function() { // 激活回调函数

							// todo
							if ($("#txt_sendCount").val() != 0) {
								count++;
							}
							sendLoop();
						}, sendBlank);
					}
				}
			}

			if ($("#chk_act").is(":checked") && !$("#chk_clk").is(":checked")) {
				send(0, genUrl(), function() {
					writeArea(0, cid, "area_act", "lab_act_count", actUrl);
					sendLoop();
				});

			}

			if ($("#chk_req").is(":checked") && !$("#chk_imp").is(":checked")
					&& !$("#chk_clk").is(":checked")
					&& !$("#chk_act").is(":checked")) {
				setTimeout(function() {
					if ($("#txt_sendCount").val() != 0) {
						count++;
					}
					sendLoop();
				}, sendBlank);

			}
		});
	} else { // SDK
		var clkUrl = $("#area_req_genUrl").val();
		if ($("#chk_clk").is(":checked")) {
			send(0, clkUrl, function() { // 点击回调函数
				// todo
				writeArea(rand_clk_status, cid, "area_clk", "lab_clk_count", clkUrl);
				// $("#lab_clk_count").html(Number($("#lab_clk_count").html()) +
				// 1);
				if ($("#chk_act").is(":checked")) {
					setTimeout(function() {
						var actUrl = genUrl();
						send(0, actUrl,
								function() { // 激活回调函数
									// todo
									writeArea(0, cid, "area_act", "lab_act_count",
											actUrl);
									if ($("#txt_sendCount").val() != 0) {
										count++;
									}
									sendLoop();
								});
					}, sendBlank);
				}
			});
		}
		if ($("#chk_act").is(":checked") && !$("#chk_clk").is(":checked")) {
			setTimeout(function() {
				send(0, genUrl(), function() {
					writeArea(0, cid, "area_act", "lab_act_count", genUrl());
					if ($("#txt_sendCount").val() != 0) {
						count++;
					}
					sendLoop();
				});
			}, sendBlank);

		}
	}

}

function recordSendUrl(actionUrl, recordUrl, acttype) {
	$.ajax({
		url : actionUrl,
		type : "post",
		dataType : "json",
		data : {
			url : recordUrl,
			acttype : acttype
		}
	})
}

function writeErrorArea(areaName, value) {
	var myDate = new Date();
	document.getElementById(areaName).value = formatStrLength(myDate
			.toLocaleTimeString()
			+ "|" + value, 400)
			+ "\r\n" + document.getElementById(areaName).value;
}

function writeArea(writeStatus, cid, areaName, labName, value) {
	var myDate = new Date();
	if(writeStatus==0)
	{
		document.getElementById(areaName).value = returncode
				+ "|"
				+ myDate.toLocaleTimeString() + "|" + cid + "|"
				+ value + "\r\n"
				+ document.getElementById(areaName).value;
		$("#" + labName + "").html(Number($("#" + labName + "").html()) + 1);
	}
	else
	{
		document.getElementById(areaName).value = "-"
		+ "|"
		+ formatStrLength(myDate.toLocaleTimeString() + "|" + "---" + "|"
				+ "未发送", 400) + "\r\n"
		+ document.getElementById(areaName).value;
	}
	
}

// 发送URL 0-发送 1-不发送
function send(sendStatus, url, callback) {
	if(sendStatus==0){
	if (url != "") {
			var arryurl = url.split("?");
	
			var url = arryurl[0];
			var param = arryurl[1] || "1=1";
			$.ajax({
				async : false,
				url : url,
				type : 'GET',
				dataType : 'json',
				data : param,
				timeout : 5000,
				headers: {
		           // "User-Agent":ua
		        }
			}).complete(
					function(xhr) {
						returncode = xhr.status;
						try {
							callback(xhr);
						} catch (e) {
							alert("发送出现错误：" + e);
							end();
							// throw new Error(e);
						}
					}
					/*function(json) {
						console.log(json);
					}*/
			);
		}
	}
	else
		{
			callback("hi");
		}
}

function sendHttp(sendStatus, url, callback) {
	if(sendStatus==0){
	if (url != "") {
			$.ajax({
				async : false,
				url : url,
				type : 'GET',
				dataType : 'json',
				//data : param,
				timeout : 5000,
				headers: {
		           // "User-Agent":ua
		        }
			}).complete(
					function(xhr) {
						returncode = xhr.status;
						try {
							callback(xhr);
						} catch (e) {
							alert("发送出现错误：" + e);
							end();
						}
					}
			);
		}
	}
	else
		{
			callback("hi");
		}
}

// 解析xml
function GetXML(xhr) {
	var rad1 = document.getElementsByName("rad_clk_system");
	var sys = "";
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
			}
		}
	}
	var adspaceid = document.getElementById("txt_adspaceid").value;
	try {
		if (xhr.responseText != "") {
			if(sys=="Mad Platform")
			{
				var data = JSON.parse(xhr.responseText)[adspaceid];
				impUrl = data.imgtracking[0];
				clkUrl = data.clickurl;
				picUrl = data.imgurl;
				thclkurl = data.thclkurl[0];
				cid = data.cid;
			}
			else{
			if(sys=="SmartMad")
			{
				var xmldata = xhr.responseText;
				var httpStatus = xmldata.split('<returncode>')[1].split('</returncode>')[0];
				if(httpStatus == '200'){
					impUrl = xmldata.split('<img src="')[2].split('"')[0];
					clkUrl = xmldata.split('<a href="')[1].split('"')[0];
					picUrl = xmldata.split('<img src="')[1].split('"')[0];
					thclkurl = "";
					cid = "";
				}
				
			}else {
				picUrl = "";
				impUrl = "";
				clkUrl = "";
				thclkurl = "";
			}
			}
		} else {
			picUrl = "";
			impUrl = "";
			clkUrl = "";
			thclkurl = "";
		}
		return [ impUrl, clkUrl, picUrl, thclkurl, cid ];
	} catch (e) {
		throw new Error(xhr.responseText);
		return false;
	}
	// var id1 = data.90000257[0].adspaceid;
}

function sendClk(url, callback) {
	$.ajax({
		async : false,
		url : url,
		type : "GET",
		dataType : "html",
		timeout : 5000,
		success : GetXML,
		error : function(xhr) {
			alert("因同源规则，无法返回信息。(请关闭浏览器的同源规则.)");
		}
	}).complete(GetXML, callback);
}

function sendS2SUrl() {

	var Url = $("#sel_url").find("option:selected").text();
	var sendCid = document.getElementById("txt_cid").value;
	var sendCh = $("#sel_media").find("option:selected").text();
	var sendUid = document.getElementById("txt_uid").value;
	var sendDid = document.getElementById("txt_did").value;
	var sendOid = document.getElementById("txt_oid").value;
	var sendVid = document.getElementById("txt_vid").value;
	var sendAid = document.getElementById("txt_s2s_aid").value;
	var sendAdid = document.getElementById("txt_adid").value;
	var sendWma = document.getElementById("txt_wma").value;
	var sendRid = document.getElementById("txt_rid").value;
	var sendSub1 = document.getElementById("txt_sub1").value;
	var sendSub2 = document.getElementById("txt_sub2").value;
	var sendSub3 = document.getElementById("txt_sub3").value;
	var sendSub4 = document.getElementById("txt_sub4").value;
	var sendSub5 = document.getElementById("txt_sub5").value;
	var sendClktime = document.getElementById("txt_clktime").value;
	var sendCvntime = document.getElementById("txt_cvntime").value;
	var sendDevip = document.getElementById("txt_devip").value;
	var sendOs = document.getElementById("sel_os").value;
	var sendOsv = $("#sel_osv").find("option:selected").text();
	var sendUa = $("#sel_ua").find("option:selected").text();

	$.getJSON(Url, {
		cid : sendCid,
		ch : sendCh,
		aid : sendAid,
		uid : sendUid,
		wma : sendWma,
		oid : sendOid,
		did : sendDid,
		adid : sendAdid,
		vid : sendVid,
		rid : sendRid,
		sub1 : sendSub1,
		sub2 : sendSub2,
		sub3 : sendSub3,
		sub4 : sendSub4,
		sub5 : sendSub5,
		clktime : sendClktime,
		cvntime : sendCvntime,
		devip : sendDevip,
		os : sendOs,
		osv : sendOsv,
		ua : sendUa
	});
}

function sendSDKUrl() {

	var Url = $("#sel_url").find("option:selected").text();
	var sendCid = document.getElementById("txt_convid").value;
	var sendDid = document.getElementById("txt_did").value;
	var sendOid = document.getElementById("txt_oid").value;
	var sendVid = document.getElementById("txt_vid").value;
	var sendAid = document.getElementById("txt_s2s_aid").value;
	var sendUid = document.getElementById("txt_uid").value;
	var sendAdid = document.getElementById("txt_adid").value;
	var sendWma = document.getElementById("txt_wma").value;
	var sendAas = document.getElementById("txt_aas").value;
	var sendOs = document.getElementById("sel_os").value;
	var sendOsv = $("#sel_osv").find("option:selected").text();
	var sendUa = $("#sel_ua").find("option:selected").text();

	$.getJSON(Url, {
		aid : sendAid,
		db : 0,
		uid : sendUid,
		wma : sendWma,
		oid : sendOid,
		did : sendDid,
		adid : sendAdid,
		vid : sendVid,
		mod : "AutoTestPhone",
		nt : 0,
		os : sendOs,
		osv : sendOsv,
		lng : "zh_CN",
		jb : 0,
		apn : "com.madhouse.OptiMadSDKAutoWebTrackingCodeSample",
		av : "1.0",
		aas : sendAas,
		pv : "1.2.0",
		ua : sendUa
	});
}

function getSys() {
	var rad1 = document.getElementsByName("rad_clk_system");
	var rad2 = document.getElementsByName("rad_system");

	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				clksys = rad1[i].value;
			}
		}
	}

	if (rad2.length > 0) {
		for (var i = 0; i < rad2.length; i++) {
			if (rad2[i].checked) {
				actsys = rad2[i].value;
			}
		}
	}
}

// /BIND CONTROL
$(function() {
	$("#but_start").unbind("click");
	$("#but_start").bind("click", start);
	$("#but_end").unbind("click");
	$("#but_end").bind("click", end);
	$("#but_broad_start").unbind("click");
	$("#but_broad_start").bind("click", startbroad);
	$("#but_broad_end").unbind("click");
	$("#but_broad_end").bind("click", endbroad);
});

function getBrowserInfo() {
	var userAgent = navigator.userAgent.toLowerCase(), s, o = {};
	var ua = userAgent.split("/")[2];
	var browser = ua.split(" ")[4];
	return browser;
}

function chkBrowser() {
	var current_browser = getBrowserInfo();
	var result = false;
	if (current_browser != "chrome") {
		alert("检测到未使用Chrome,导致部分功能无法使用");
		result = false;
	} else {
		result = true;
	}
	return result;
}
