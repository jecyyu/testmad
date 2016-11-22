var res_id, co, req_timer, act_timer, clksys, actsys, returncode, impurl, clkurl, acturl,thimpurl, thclkurl, picUrl, count = 0, cid;
var sendBlank;
var bool_randImp, bool_randClk,bool_thImp,bool_thClk;
var sendChkErr="";
var retSid,returnFlag=0;
var sendCount;

function recordData(req, imp, clk, act,adspaceid,campid,convid,remark) {
	$.ajax({
		url : "../recordDataAction",
		type : "post",
		dataType : "json",
		data : {
			"req" : req,
			"imp" : imp,
			"clk" : clk,
			"act" : act,
			"adspaceid" : adspaceid,
			"campid" : campid,
			"convid" : convid,
			"remark" : remark
		},
		//success : bindClkOSVList,
	});
}

function recordReq(recordStatus, resid,status,adspaceid,url,remark) {
	if(recordStatus==0)
	{
		$.ajax({
			url : "../insertReq",
			type : "post",
			dataType : "json",
			data : {
				"resid" : resid,
				"url" : url,
				"adspaceid" : adspaceid,
				"status" : status,
				"remark":remark
			},
			//success : bindClkOSVList,
		});
	}
}

function recordImp(recordStatus, resid,status,adspaceid,url,remark) {
	if(recordStatus==0)
	{
		$.ajax({
			url : "../insertImp",
			type : "post",
			dataType : "json",
			data : {
				"resid" : resid,
				"status" : status,
				"url" : url,
				"adspaceid" : adspaceid,
				"remark":remark
			},
			//success : bindClkOSVList,
		});
	}
}

function recordClk(recordStatus, resid,status,adspaceid,url,remark) {
	if(recordStatus==0)
	{
		$.ajax({
			url : "../insertClk",
			type : "post",
			dataType : "json",
			data : {
				"resid" : resid,
				"status" : status,
				"url" : url,
				"adspaceid" : adspaceid,
				"remark":remark
			},
			//success : bindClkOSVList,
		});
	}
}

function recordBroadImp(resid,adspaceid,campid,url,remark) {
	$.ajax({
		url : "../insertImp",
		type : "post",
		dataType : "json",
		data : {
			"resid" : resid,
			"url" : url,
			"adspaceid" : adspaceid,
			"campid" : campid,
			"remark":remark
		},
		//success : bindClkOSVList,
	});
}

function recordBroadClk(resid,adspaceid,campid,url,remark) {
	$.ajax({
		url : "../insertClk",
		type : "post",
		dataType : "json",
		data : {
			"resid" : resid,
			"url" : url,
			"adspaceid" : adspaceid,
			"campid" : campid,
			"remark":remark
		},
		//success : bindClkOSVList,
	});
}

function recordAct(resid,convid,acttype,url,remark) {
	$.ajax({
		url : "../insertAct",
		type : "post",
		dataType : "json",
		data : {
			"resid" : resid,
			"convid" : convid,
			"acttype" : acttype,
			"url" : url,
			"remark":remark
		},
		//success : bindClkOSVList,
	});
}

function recordResult() {
}

function styleStart() {
	static_count = 0;
	$("#but_start").attr("disabled", true);
	$("#but_end").attr("disabled", false);

}
function styleEnd() {
	static_count = 0;
	$("#but_start").attr("disabled", false);
	$("#but_end").attr("disabled", true);

}

/*--------------------------------------分界线--------------------------------------*/



function start() {
	/*if (SESSION_ID == "" || SESSION_ID == 'null') {
		window.location.href = 'login.jsp';
	} else {*/
		var bool_autoStyle = document.getElementById("chk_autostyle").checked;
		if(bool_autoStyle)
		{
			$("#lnk_test").click();
		}
		$("#lab_req_count").attr("value", "0");
		$("#lab_imp_count").attr("value", "0");
		$("#lab_clk_count").attr("value", "0");
		$("#lab_act_count").attr("value", "0");
		$("#lab_thImp_count").attr("value", "0");
		$("#lab_thClk_count").attr("value", "0");
		Number($("#lab_req_count").html(0));
		Number($("#lab_imp_count").html(0));
		Number($("#lab_clk_count").html(0));
		Number($("#lab_act_count").html(0));
		Number($("#lab_thImp_count").html(0));
		Number($("#lab_thClk_count").html(0));
		count = 0;
		res_id = randMD5Number();
		var delay = $("#txt_sendBlank").val() * 1000;
		var bool_req = document.getElementById("chk_req").checked;
		/*var bool_act = document.getElementById("chk_act").checked;*/
		var bool_clk = document.getElementById("chk_clk").checked;
		
		bool_randImp = document.getElementById("chk_rand_imp").checked;
		bool_randClk = document.getElementById("chk_rand_clk").checked;
		bool_thImp = document.getElementById("chk_imp_tracking").checked;
		bool_thClk = document.getElementById("chk_clk_tracking").checked;
		
		var requrl;
		/*var acturl = document.getElementById("area_genUrl").value;*/
		if (bool_req || bool_act || bool_clk) {
			if (!bool_req) {
				requrl = "";
			}
			/*if (!bool_act) {
				acturl = "";
			}*/
			styleStart();

			sendLoop();
		} else {
			alert("请求或激活未勾选！");
		}
	//}
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
		send(0, impUrl , function(dataUrl) {
			//var imp_campid = impUrl.split("?")[1].split("&")[1].split("=")[1];
			/*var arry_paramCampid = arry_impurl.split("&")[0];
			var imp_campid = arry_paramCampid.split("=")[1];*/
			recordBroadImp(res_id,"--" ,"", impUrl, $(
					"#txt_remark").val());
			writeArea(0,"", "area_res_imp", "lab_imp_count", impUrl);
			if ($("#chk_clk").is(":checked")) {
				if (clkUrl != "") {
					send(0,clkUrl, function() { // 点击回调函数
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
				} else {
					setTimeout(function() { // 激活回调函数

						// todo
						if ($("#txt_sendCount").val() != 0) {
							count++;
						}
						sendBroadLoop();
					}, sendBlank);
				}
			}
			else {
				setTimeout(function() { // 激活回调函数

					// todo
					if ($("#txt_sendCount").val() != 0) {
						count++;
					}
					sendBroadLoop();
				}, sendBlank);
			}

			
		});
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
	if(ipListSize-1 == static_count)
	{
		
		styleEnd();
		return;
	}
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
		sendReq(0, apimode=="0"?reqUrl = genQuickUrl():reqUrl = genReqUrl(), function(dataUrl) {
			
			recordReq(0, res_id, returncode,apimode=="0"?$("#txt_quick_adspaceid").val():$("#txt_adspaceid").val(), reqUrl, $(
					"#txt_remark").val());
			writeArea(0,"", "area_req", "lab_req_count", reqUrl);
			var result = GetXML(dataUrl);
			// 解析URL
			if (result !== false) {

			}
			var xmlUrl = GetXML(dataUrl);
			var impUrl = xmlUrl[0];
			var picUrl = xmlUrl[2];
			var thImpUrl = xmlUrl[5];
			if ($("#chk_imp").is(":checked")) {
				if (impUrl != "") {
					//rand_imp_status=1;
					//setTimeout(function(){
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
						recordImp(rand_imp_status, res_id, returncode,$("#txt_adspaceid").val(), impUrl, $(
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
					});//},sendBlank);
				} else {
					writeErrorArea("area_imp", "未获取到展示链接");
				}
			}
			if ($("#chk_exchange").is(":checked")) {
				var image = new Image();
				document.getElementById("img_pic").src = picUrl;
				image.src=document.getElementById("img_pic").src;
				image.onload = function(){
					width = image.width;
					height = image.height;
					document.getElementById("lab_size").innerHTML=width+"*"+height;
				};
			}
			if(bool_thImp)
			{
				if(thImpUrl=="")
					{
					writeErrorArea("area_imp_tracking", "未获取到展示监播地址");
					}else{
				var countImp = thImpUrl.split(';').length-2;
				var s;
				for(s=0;s<=countImp;s++){
				send(rand_imp_status, thImpUrl.split(";")[s], function() {
					writeArea(rand_imp_status, cid, "area_imp_tracking", "lab_thImp_count", thImpUrl.split(";")[s]);
				});
				setTimeout("", 1000);
				}}
			}
			
			var clkUrl = xmlUrl[1];
			var thClkUrls = xmlUrl[3];
			if ($("#chk_clk").is(":checked")) {
				if (clkUrl != "") {
					send(rand_clk_status, clkUrl, function() { // 点击回调函数
						recordClk(rand_clk_status,res_id, returncode,$("#txt_adspaceid").val(), clkUrl, $(
								"#txt_remark").val());
						writeArea(rand_clk_status, cid, "area_clk", "lab_clk_count", clkUrl);
						var myDate = new Date();
						var mynow = myDate.toLocaleTimeString();
						if (!$("#chk_imp").is(":checked"))
						{
							var image = new Image();
							document.getElementById("img_pic").src = picUrl;
							image.src=document.getElementById("img_pic").src;
							image.onload = function(){
								width = image.width;
								height = image.height;
								document.getElementById("lab_size").innerHTML=width+"*"+height;
							};
						}
						
						
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

					});
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
			if(bool_thClk)
			{
				if(thClkUrls=="")
				{
				writeErrorArea("area_clk_tracking", "未获取到点击监播地址");
				}else{
				var countClk = thClkUrls.split(';').length-2;
				var s;
				for(s=0;s<=countClk;s++){
					send(rand_clk_status, thClkUrls.split(';')[s].trim(), function() {
						writeArea(rand_imp_status, cid, "area_clk_tracking", "lab_thClk_count", thClkUrls.split(';')[s].trim());
					});
					setTimeout("", 1000);
				}}
			};

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

/*发送激活*/
function sendActLoop() {
	sendBlank = document.getElementById("txt_sendBlank").value * 1000;
	var rad1 = document.getElementsByName("rad_act_system");
	var sys = "";
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
			}
		}
	}
	
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
			
			endAct();
			return;
		}
		;
	} else {
		if (count != $("#txt_sendCount").val()) {
			
			endAct();
			return;
		}
		;
	}
	if ($("#chk_req").is(":checked")) { // ATD
		var width,height;
		send(0, reqUrl = genReqUrl(), function(dataUrl) {
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
					//setTimeout(function(){
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
								sendActLoop();
							}
						}, sendBlank);
					});//},sendBlank);
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
									sendActLoop();
								});
							}, sendBlank);
						} else {
							setTimeout(function() { // 激活回调函数

								// todo
								if ($("#txt_sendCount").val() != 0) {
									count++;
								}
								sendActLoop();
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
										sendActLoop();
									});
								}, sendBlank);
					} else {
						setTimeout(function() { // 激活回调函数

							// todo
							if ($("#txt_sendCount").val() != 0) {
								count++;
							}
							sendActLoop();
						}, sendBlank);
					}
				}
			}

			if ($("#chk_act").is(":checked") && !$("#chk_clk").is(":checked")) {
				send(0, actUrl(), function() {
					writeArea(0, cid, "area_act", "lab_act_count", actUrl);
					sendActLoop();
				});

			}

			if ($("#chk_req").is(":checked") && !$("#chk_imp").is(":checked")
					&& !$("#chk_clk").is(":checked")
					&& !$("#chk_act").is(":checked")) {
				setTimeout(function() {
					if ($("#txt_sendCount").val() != 0) {
						count++;
					}
					sendActLoop();
				}, sendBlank);

			}
		});
	} else { 
		/*点击和激活*/
		var clkUrl = $("#area_clkUrl").val();
		if ($("#chk_clk").is(":checked")) {
			send(0, clkUrl, function() { 
				writeArea(rand_clk_status, cid, "area_clk", "lab_clk_count", clkUrl);
				recordClk(rand_clk_status,res_id, "", clkUrl, $("#txt_remark").val());
				if ($("#chk_act").is(":checked")) {
					setTimeout(function() {
						switch(sys)
						{
							case "SDK1.0":
								setTimeout(function() {
									send(0, actUrl = genActUrl(), function(dataUrl) {
										GetSDKRet(dataUrl);
										writeArea(0, cid, "area_act", "lab_act_count", actUrl);
										recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
										if ($("#txt_sendCount").val() != 0) {
											count++;
										}
										setTimeout(function() {
											sendActLoop();
										}, sendBlank);
									});
								}, sendBlank);break;
							case "SDK2.0":
								setTimeout(function() {
									send(0, actUrl = genActUrl(retSid), function(dataUrl) {
										GetSDKRet(dataUrl);

										if ($("#txt_sendCount").val() != 0 && returnFlag == 1 && $("#chk_event").is(":checked")) {
											writeArea(0, retSid, "area_act", "lab_act_count", actUrl);
											recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
											count++;
										}
										else
										{
											writeArea(0, cid, "area_act", "lab_act_count", actUrl);
											recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
											if(!$("#chk_event").is(":checked"))
											{
												count++;
											}
											
										}
										if($("#chk_event").is(":checked"))
										{
											returnFlag = 1;
										}
										setTimeout(function() {
											sendActLoop();
										}, sendBlank);
										//sendActLoop();
									});
								}, sendBlank);break;
							case "S2S":
								setTimeout(function() {
									send(0, actUrl = genActUrl(), function(dataUrl) {
										GetSDKRet(dataUrl);
										writeArea(0, cid, "area_act", "lab_act_count", actUrl);
										recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
										if ($("#txt_sendCount").val() != 0) {
											count++;
										}
										setTimeout(function() {
											sendActLoop();
										}, sendBlank);
									});
								}, sendBlank);break;
							default:;break;
						}
					}, sendBlank);
				}
			});
		}
		/*只有激活 acttype-0工具激活链接，1-返回的激活链接 */
		if ($("#chk_act").is(":checked") && !$("#chk_clk").is(":checked")) {

				switch(sys)
				{
					case "SDK1.0":
						setTimeout(function() {
							send(0, actUrl = genActUrl(), function(dataUrl) {
								GetSDKRet(dataUrl);
								writeArea(0, cid, "area_act", "lab_act_count", actUrl);
								recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
								if ($("#txt_sendCount").val() != 0) {
									count++;
								}
								sendActLoop();
							});
						}, sendBlank);break;
					case "SDK2.0":
						setTimeout(function() {
							send(0, actUrl = genActUrl(retSid), function(dataUrl) {
								GetSDKRet(dataUrl);

								if ($("#txt_sendCount").val() != 0 && returnFlag == 1 && $("#chk_event").is(":checked")) {
									writeArea(0, retSid, "area_act", "lab_act_count", actUrl);
									recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
									count++;
								}
								else
								{
									writeArea(0, cid, "area_act", "lab_act_count", actUrl);
									recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
									if(!$("#chk_event").is(":checked"))
									{
										count++;
									}
									
								}
								if($("#chk_event").is(":checked"))
								{
									returnFlag = 1;
								}
								sendActLoop();
							});
						}, sendBlank);break;
					case "S2S":
						setTimeout(function() {
							send(0, actUrl = genActUrl(), function(dataUrl) {
								GetSDKRet(dataUrl);
								writeArea(0, cid, "area_act", "lab_act_count", actUrl);
								recordAct(res_id,convid,"0",actUrl,$("#txt_remark").val());
								if ($("#txt_sendCount").val() != 0) {
									count++;
								}
								setTimeout(function() {
									sendActLoop();
								}, sendBlank);
							});
						}, sendBlank);break;
					default:
						;break;
				}
			

		}
	}

}



/*激活发送*/
function startAct() {
	/*if (SESSION_ID == "" || SESSION_ID == 'null') {
		window.location.href = 'login.jsp';
	} else {*/
		$("#lnk_test").click(); 
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
		//var acturl = document.getElementById("area_act_genUrl").value;
		if (bool_req || bool_act || bool_clk) {
			if (!bool_req) {
				requrl = "";
			}
			if (!bool_act) {
				acturl = "";
			}
			styleStart();

			sendActLoop();
		} else {
			alert("请求或激活未勾选！");
		}
	//}
}

function endAct() {
	count = Number($("#txt_sendCount").val()) + 1;
	returnFlag = 0;
	//record();
	styleEnd();
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
	//sendChkErr = "";
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
					beforeSend: function(xhr){
						xhr.setRequestHeader('X-Real-IP', '192.22.13.251');
						/*xhr.setRequestHeader('user_agent', ua);
						xhr.setRequestHeader('User-Agent', ua);*/
					}
				}).complete(
						function(xhr) {
							returncode = xhr.status;
							try {
								callback(xhr);
							} catch (e) 
							{
								if(!document.getElementById("chk_error").checked)
								{
									alert("发送出现错误：" + e);
									end();
								}
								else
								{
									sendChkErr = "error:" + xhr.responseText;
								}
								throw new Error(e);
							}
						}
				);
		}
	}
	else
		{
		callback("Don't Send!");
		}
}

//发送请求URL 0-发送 1-不发送
function sendReq(sendStatus, url, callback) {
	//sendChkErr = "";
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
					beforeSend: function(xhr){
						xhr.setRequestHeader('X-Real-IP', '192.22.13.251');
						/*xhr.setRequestHeader('user_agent', ua);
						xhr.setRequestHeader('User-Agent', ua);*/
					}
				}).complete(
						function(xhr) {
							returncode = xhr.status;
							document.getElementById("area_allInfo").value = xhr.responseText;
							try {
								callback(xhr);
							} catch (e) 
							{
								document.getElementById("area_allInfo").value = xhr.responseText;
								if(!document.getElementById("chk_error").checked)
								{
									alert("发送出现错误：" + e);
									end();
								}
								else
								{
									sendChkErr = "error:" + xhr.responseText;
								}
								throw new Error(e);
							}
						}
				);
		}
	}
	else
		{
		callback("Don't Send!");
		}
}

//发送URL 0-发送 1-不发送
function sendClk(sendStatus, url, callback) {
	//sendChkErr = "";
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
							} catch (e) 
							{
								if(!document.getElementById("chk_error").checked)
								{
									alert("发送出现错误：" + e);
									end();
								}
								else
								{
									sendChkErr = "error:" + xhr.responseText;
								}
								throw new Error(e);
							}
						}
				);
		}
	}
}

// 解析xml
function GetXML(xhr) {
	var chk_xhr;
	var displaytitle,displaytext;
	var txtXHR=xhr.responseText.replace(/[\n]/ig,'');
	if(sendChkErr!="")
	{
	  chk_xhr = sendChkErr.split(":")[0];
	}
	if(chk_xhr=="error")
	{
		var error_info = sendChkErr;
		picUrl = error_info;
		impUrl = error_info;
		clkUrl = error_info;
		thclkurl = error_info;
		thimpurl=error_info;
		return [ impUrl, clkUrl, picUrl, thclkurl, cid,thimpurl ];
	}
	else
	{
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
			if (txtXHR != "") {
				if(sys=="2")
				{
					var chkExchange = document.getElementById("chk_exchange").checked;
					var chk_apitype = document.getElementById("sel_req_apitype").value;
					
					switch(chk_apitype)
					{
						case "1"://XML
							var xmldata = txtXHR;
							var httpStatus = xmldata.split('<returncode>')[1].split('</returncode>')[0];
							var CDATA = xmldata.split('[CDATA[')[1].split(']]>')[0];
							/*var chkThClk = xmldata.split('<thclkurl>').length;
							if(chkThClk>=2)
							{
								var s;
								thclkurl = "";
								for(s=1;s<=chkThClk-1;s++)
									{
										thclkurl += xmldata.split('<thclkurl>')[s].split('</thclkurl>')[0].trim()+";";
									}
							//xmldata.split('<thclkurl>')[1].split('</thclkurl>')[0]
							}
						else
							{
							thclkurl = "";
							}*/
							;break;
						case "2"://Json(不带物料)
							if(chkExchange)
							{
								adspaceid = txtXHR.split("\"")[1];
							}
							var data = JSON.parse(txtXHR)[adspaceid];
							var countThImp = data.imgtracking.length;
							var countThClk = data.thclkurl.length;
							thimpurl="";
							thclkurl="";
							if(countThImp>=2)
								{
									var s;
									for(s=0;s<=countThImp-2;s++)
										{
											thimpurl += data.imgtracking[s].trim()+";";
										}
									impUrl = data.imgtracking[countThImp-1];
									/*if(chkExchange)
									{
										impUrl = data.imgtracking[0];
									}
									else
									{
										impUrl = data.imgtracking[countThImp-1];
									}*/
									
								}
							else
								{
									impUrl = data.imgtracking[0];
									thimpurl = "";
								}
							
							clkUrl = data.clickurl;
							picUrl = data.imgurl;
							;break;
						case "4"://Json2(带物料)
							if(chkExchange)
							{
								adspaceid = txtXHR.split("\"")[1];
							}
							var data = JSON.parse(txtXHR)[adspaceid];
							var countThImp = data.imgtracking.length;
							var countThClk = data.thclkurl.length;
							thimpurl="";
							thclkurl="";
							if(countThImp>=2)
								{
									var s;
									for(s=0;s<=countThImp-2;s++)
										{
											thimpurl += data.imgtracking[s].trim()+";";
										}
									impUrl = data.imgtracking[countThImp-1];
									/*if(chkExchange)
									{
										impUrl = data.imgtracking[0];
									}
									else
									{
										impUrl = data.imgtracking[countThImp-1];
									}*/
									
								}
							else
								{
									impUrl = data.imgtracking[0];
									thimpurl = "";
								}
							
							clkUrl = data.clickurl;
							picUrl = data.imgurl;
							;break;
					}
					
					
					
					if(chk_apitype=="4")
					{
						try{
						displaytitle = data.displaytitle;
						displaytext = data.displaytext;
						document.getElementById("lab_title").innerHTML=displaytitle;
						document.getElementById("lab_text").innerHTML=displaytext;
						}catch(e){
							document.getElementById("lab_title").innerHTML="无";
							document.getElementById("lab_text").innerHTML="无";
						}
					}
					
					if(countThClk>=1)
					{
						var s;
						for(s=0;s<=countThClk-1;s++)
							{
							thclkurl += data.thclkurl[s].trim()+";";
							}
						
					}
					else
					{
						thclkurl = "";
					}
					
					cid = data.cid;
				}
				else{
				if(sys=="3")
				{
					var xmldata = txtXHR;
					var httpStatus = xmldata.split('<returncode>')[1].split('</returncode>')[0];
					var chkThImp = xmldata.split('<img src="').length;
					var chkThClk = xmldata.split('<thclkurl>').length;
					
					if(httpStatus == '200'){
						
						impUrl = xmldata.split('<img src="')[chkThImp-1].split('"')[0];
						if(chkThImp>=4)
						{
							var s;
							thimpurl = "";
							for(s=2;s<=chkThImp-2;s++)
								{
									thimpurl += xmldata.split('<img src="')[s].split('"')[0].trim()+";";
								}
						}
						else
							{
							thimpurl = "";
							}
						clkUrl = xmldata.split('<a href="')[1].split('"')[0];
						picUrl = xmldata.split('<img src="')[1].split('"')[0];
						if(chkThClk>=2)
							{
								var s;
								thclkurl = "";
								for(s=1;s<=chkThClk-1;s++)
									{
										thclkurl += xmldata.split('<thclkurl>')[s].split('</thclkurl>')[0].trim()+";";
									}
							//xmldata.split('<thclkurl>')[1].split('</thclkurl>')[0]
							}
						else
							{
							thclkurl = "";
							}
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
			if(picUrl=="")
			{
				picUrl = "../images/no_mate.png";
			}
			return [ impUrl, clkUrl, picUrl, thclkurl, cid,thimpurl ];
		} catch (e) {
			if(document.getElementById("chk_error").checked)
			{
				var error_info = xhr.responseText;
				picUrl = error_info;
				impUrl = error_info;
				clkUrl = error_info;
				thclkurl = error_info;
				//picUrl = "../images/no_mate.png";
				return [ impUrl, clkUrl, picUrl, thclkurl, cid,thimpurl ];
			}
			else
			{
				//picUrl = "../images/no_mate.png";
				throw new Error(xhr.responseText);
				return false;
			}
			
			
		}
	
	}
	// var id1 = data.90000257[0].adspaceid;
}


//解析SDK3.0返回的链接
function GetSDKRet(xhr) {
	try {
		if (xhr.responseText != "") {
			var scriptinfo,arry1,arry2,arry3;
			scriptinfo = xhr.responseText;
			switch(os)
			{
			case "0"://android
				arry1 = scriptinfo.split("NCTrackingCallback(")[1];
				arry2 = arry1.split(")")[0];
				arry3 = arry2.split("\"")[1];
				retSid = arry3;
				break;
			case "1"://ios
				arry1 = scriptinfo.split("NCTrackingCallback:")[1];
				arry2 = arry1.split(")")[0];
				arry3 = arry2.split(":")[1];
				retSid = arry3;
				break;
			default:retSid="";break;
			}
			
			 
		} else {
			retSid = "";
		}
		return [ retSid, "Sid" ];
	} catch (e) {
		
	}
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

function sendPost(url, callback) {
	$.ajax({
		async : false,
		url : url,
		type : "POST",
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
	$("#but_act_start").unbind("click");
	$("#but_act_start").bind("click", startAct);
	$("#but_act_end").unbind("click");
	$("#but_act_end").bind("click", endAct);
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

var MaskUtil = (function(){  
    
    var $mask,$maskMsg;  
      
    var defMsg = '正在处理，请稍待。。。';  
      
    function init(){  
        if(!$mask){  
            $mask = $("<div class=\"datagrid-mask mymask\"></div>").appendTo("body");  
        }  
        if(!$maskMsg){  
            $maskMsg = $("<div class=\"datagrid-mask-msg mymask\">"+defMsg+"</div>")  
                .appendTo("body").css({'font-size':'12px'});  
        }  
          
        $mask.css({width:"100%",height:$(document).height()});  
          
        var scrollTop = $(document.body).scrollTop();  
          
        $maskMsg.css({  
            left:( $(document.body).outerWidth(true) - 190 ) / 2  
            ,top:( ($(window).height() - 45) / 2 ) + scrollTop  
        });   
                  
    }  
      
    return {  
        mask:function(msg){  
            init();  
            $mask.show();  
            $maskMsg.html(msg||defMsg).show(); 
            
        }  
        ,unmask:function(){  
            $mask.hide();  
            $maskMsg.hide();  
        }  
    }  
      
}()); 
