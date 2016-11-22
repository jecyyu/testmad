var ua;

//----------------------------------随机数 Start----------------------------------
function randMD5Number() {
	var timestamp = Date.parse(new Date());
	return getMd5(timestamp.toString());
}

function randSDKNumber() {
	var timestamp = Date.parse(new Date());
	return getStringChange(getBase64(timestamp.toString()));
}

function getBase64(str_text) {
	base64_text = BASE64.encoder(str_text.toString());
	return base64_text;
}

function getMd5(str_text) {
	var md5_text = hex_md5(str_text);
	return md5_text;
}

function random(min, max) {

	return Math.floor(min + Math.random() * (max - min));

}

function rd(n,m){
	var c = m-n+1;	
	return Math.floor(Math.random() * c + n);
}

function nowDate() {
	var dateType = new Date();
	var now_date = dateType.getFullYear() + "-" + (dateType.getMonth() + 1)
			+ "-" + dateType.getDate() + " " + dateType.getHours() + ":"
			+ dateType.getMinutes() + ":" + dateType.getSeconds();
	return now_date;

}

function nowUtcDate() {
	var dateType = new Date();
	var now_date = dateType.getUTCFullYear() + "-"
			+ (dateType.getUTCMonth() + 1) + "-" + dateType.getUTCDate() + " "
			+ dateType.getUTCHours() + ":" + dateType.getUTCMinutes() + ":"
			+ dateType.getUTCSeconds();
	return now_date;

}

// string两两对换
function getStringChange(str_text) {
	var i;
	var res = "";

	for (i = 0; i < str_text.toString().length; i += 2) {
		res += str_text[i + 1] + str_text[i];
	}
	return res;
}

// ----------------------------------激活参数
// Start----------------------------------
function getOSV(os) {
	// 绑定之前 清空第一个以外的option
	$("#sel_osv").children().eq(0).siblings().remove();
	// $("#bindShow").children().eq(0).siblings().remove();
	// var temp = $("#sel_os").find("option:selected").val();
	$.ajax({
		url : "getOsvAction",
		type : "post",
		dataType : "json",
		data : "os=" + os,
		success : bindOSVList,
	});
}

function bindOSVList(json) {
	var hallList = (json.osvlist);
	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_osv").appendChild(option);
		option.value = hall.id;
		option.text = hall.osv;

	}
}

function getUA() {
	// 绑定之前 清空第一个以外的option
	$("#sel_ua").children().eq(0).siblings().remove();
	// $("#bindShow").children().eq(0).siblings().remove();
	// var temp = $("#sel_os").find("option:selected").val();
	$.ajax({
		url : "getUaAction",
		type : "get",
		dataType : "json",
		data : {
			os : $("[name='sel_os']").val(),
			osv : $("[name='sel_osv']").val()
		},
		// data : {osv: $("[name='sel_osv']").val()},
		success : bindUAList
	});
}

function bindUAList(json) {
	var hallList = (json.ualist);

	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_ua").appendChild(option);
		option.value = hall.id;
		// option.text = formatStrLength(hall.ua, 100);
		option.text = hall.ua;

	}
}

function getUrl(sys) {
	// $("#sel_url").children().eq(0).siblings().remove();
	document.getElementById("sel_url").innerHTML = "";
	$.ajax({
		url : "getUrlAction",
		type : "post",
		dataType : "json",
		data : "sys=" + sys,
		success : bindUrlList
	});
}

function nextClk() {
	var rad1 = document.getElementsByName("rad_clk_system");
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
				getClkUrl(sys);
			}
		}
	}
}

function bindUrlList(json) {

	var hallList = (json.urllist);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_url").appendChild(option);
		option.value = hall.url;
		option.text = hall.url;

	}
}

function getPicSize() {
	$.ajax({
		url : "getPicSizeAll",
		type : "get",
		dataType : "json",
		// data : {osv: $("[name='sel_osv']").val()},
		success : alert("生成成功！")
	});
}



function bindPicSizeList(json) {
	var hallList = (json.picsizelist);

	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_size").appendChild(option);
		option.value = hall.id;
		// option.text = formatStrLength(hall.ua, 100);
		option.text = hall.ua;

	}
}

function genUrl() {
	var rad1 = document.getElementsByName("rad_system");
	var sys = "";
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
			}
		}
	}
	var _theArry = new Array();
	_theArry[0] = document.getElementById("sel_url").value;
	if (sys == "S2S") {
		_theArry[1] = "cid=" + document.getElementById("txt_s2s_campId").value;
	} else {
		_theArry[1] = "cid=" + document.getElementById("txt_sdk_convId").value;
	}

	if (document.getElementById("chk_uidRand").checked) {
		if (sys == "S2S") {
			_theArry[2] = "uid=" + randMD5Number();
		}
		else
			{
			_theArry[2] = "uid=" + randSDKNumber();
			}
	} else {
		_theArry[2] = "uid=" + document.getElementById("txt_uid").value;
	}

	if (document.getElementById("chk_didRand").checked) {
		if (sys == "S2S") {
			_theArry[3] = "did=" + randMD5Number();
		}
		else
			{
			_theArry[3] = "did=" + randSDKNumber();
			}
	} else {
		_theArry[3] = "did=" + document.getElementById("txt_did").value;
	}

	if (document.getElementById("chk_oidRand").checked) {
		if (sys == "S2S") {
			_theArry[4] = "oid=" + randMD5Number();
		}
		else
			{
			_theArry[4] = "oid=" + randSDKNumber();
			}
	} else {
		_theArry[4] = "oid=" + document.getElementById("txt_oid").value;
	}

	if (document.getElementById("chk_vidRand").checked) {
		if (sys == "S2S") {
			_theArry[5] = "vid=" + randMD5Number();
		}
		else
			{
			_theArry[5] = "vid=" + randSDKNumber();
			}
	} else {
		_theArry[5] = "vid=" + document.getElementById("txt_vid").value;
	}
	if (sys == "S2S") {
		if (document.getElementById("chk_s2s_aidRand").checked) {
			_theArry[6] = "aid=" + randMD5Number();
		} else {
			_theArry[6] = "aid=" + document.getElementById("txt_s2s_aid").value;
		}
	} else {
		if (document.getElementById("chk_sdk_didRand").checked) {
			_theArry[6] = "did=" + randSDKNumber();
		} else {
			_theArry[6] = "did=" + document.getElementById("txt_sdk_did").value;
		}
	}

	

	if (document.getElementById("chk_adidRand").checked) {
		if (sys == "S2S") {
			_theArry[7] = "adid=" + randMD5Number();
		}
		else
			{
			_theArry[7] = "adid=" + randSDKNumber();
			}
	} else {
		_theArry[7] = "aid=" + document.getElementById("txt_adid").value;
	}

	if (document.getElementById("chk_wmaRand").checked) {
		if (sys == "S2S") {
			_theArry[8] = "wma=" + randMD5Number();
		}
		else
			{
			_theArry[8] = "wma=" + randSDKNumber();
			}
	} else {
		_theArry[8] = "wma=" + document.getElementById("txt_wma").value;
	}

	_theArry[9] = "os=" + document.getElementById("sel_os").value;
	_theArry[10] = "osv=" + $("#sel_osv").find("option:selected").text();

	if (sys == "SDK") {
		ua = $("#sel_ua").find("option:selected").text();
		_theArry[11] = "";
	}
	if (sys == "S2S") {
		_theArry[11] = "ch=" + document.getElementById("sel_media").value;
	}

	if (sys == "S2S") {
		_theArry[12] = "noattr=" + document.getElementById("sel_noattr").value;
	}

	if (sys == "SDK") {
		var utc;
		if(document.getElementById("chk_utcAuto").checked)
		{
			utc = new Date().getTime() ;
		}
		else
		{
			utc = document.getElementById("txt_utc").value;
		}
		
		_theArry[12] = "";
		_theArry[13] = "lng=" + document.getElementById("txt_lng").value;
		var cat = document.getElementById("txt_cat").value;
		_theArry[14] = "";
		var apn = document.getElementById("txt_apn").value;
		_theArry[15] = "apn=" + apn;
		var av = document.getElementById("txt_av").value;
		_theArry[16] = "av="+ av;
		_theArry[17] = "pv=1.2.0";

	}
	if (sys == "SDK") {
		var aas = document.getElementById("sel_aas").value;
		_theArry[18] = "";
		var mod = document.getElementById("txt_mod").value;
		_theArry[19] = "mod="+mod;
		var nt = document.getElementById("sel_nt").value;
		_theArry[20] = "";
		var act = document.getElementById("txt_act").value;
		_theArry[21] = "" ;
		var lab = document.getElementById("txt_lab").value;
		_theArry[22] = "";
		var val = document.getElementById("txt_val").value;
		_theArry[23] = "";
		var awn = document.getElementById("txt_awn").value;
		_theArry[24] = "";
		var dur = document.getElementById("txt_dur").value;
		_theArry[25] = "";
		var sid = document.getElementById("txt_sid").value;
		_theArry[26] = "sid=" + sid;
		var db = document.getElementById("sel_db").value;
		_theArry[27] = "db="+db;
		var hid = document.getElementById("txt_hid").value;
		_theArry[28] = "";
		var cn = document.getElementById("txt_cn").value;
		_theArry[29] = "" ;
		var bss = document.getElementById("txt_bss").value;
		_theArry[30] = "";
		var jb = document.getElementById("sel_jb").value;
		_theArry[31] = "";
		var de = document.getElementById("sel_de").value;
		_theArry[32] = "nt=" + document.getElementById("sel_nt").value;
		utc+="+8";
		_theArry[33] = "et=" + "{\"la\":[{\"sid\":\""+sid+"\",\"utc\":\""+utc+"\",\"aas\":"+aas+"}],\"ev\":[{\"sid\":\""+sid+"\",\"utc\":\""+utc+"\",\"cat\":\""+cat+"\",\"act\":\""+act+"\",\"lab\":\""+lab+"\",\"val\":"+val+"}],\"te\":[{\"sid\":\""+sid+"\",\"utc\":\""+utc+"\",\"apn\":\""+apn+"\",\"av\":\""+av+"\",\"awn\":\""+awn+"\",\"dur\":\""+dur+"\"}]}";
	}

	if (sys == "S2S") {
		if (document.getElementById("chk_ridRand").checked) {
			_theArry[13] = "rid=" + randMD5Number();
		} else {
			_theArry[13] = "rid=" + document.getElementById("txt_rid").value;
		}

		if (document.getElementById("chk_sub1Rand").checked) {
			_theArry[14] = "sub1=" + randMD5Number();
		} else {
			_theArry[14] = "sub1=" + document.getElementById("txt_sub1").value;
		}

		if (document.getElementById("chk_sub2Rand").checked) {
			_theArry[15] = "sub2=" + randMD5Number();
		} else {
			_theArry[15] = "sub2=" + document.getElementById("txt_sub2").value;
		}

		if (document.getElementById("chk_sub3Rand").checked) {
			_theArry[16] = "sub3=" + randMD5Number();
		} else {
			_theArry[16] = "sub3=" + document.getElementById("txt_sub3").value;
		}

		if (document.getElementById("chk_sub4Rand").checked) {
			_theArry[17] = "sub4=" + randMD5Number();
		} else {
			_theArry[17] = "sub4=" + document.getElementById("txt_sub4").value;
		}

		if (document.getElementById("chk_sub5Rand").checked) {
			_theArry[18] = "sub5=" + randMD5Number();
		} else {
			_theArry[18] = "sub5=" + document.getElementById("txt_sub5").value;
		}

		if (document.getElementById("chk_clktimeUTC").checked) {
			var Utc_clktime = Math.round(new Date().getTime() / 1000);
			_theArry[19] = "clktime=" + Utc_clktime;
		} else {

			_theArry[19] = "clktime="
					+ document.getElementById("txt_clktime").value;
		}

		if (document.getElementById("chk_cvntimeUTC").checked) {
			var Utc_clktime = Math.round(new Date().getTime() / 1000);
			_theArry[20] = "cvntime=" + Utc_clktime;
		} else {

			_theArry[20] = "cvntime="
					+ document.getElementById("txt_cvntime").value;
		}

		if (document.getElementById("chk_devipRand").checked) {
			var ip = random(1, 250) + "." + random(1, 250) + "."
					+ random(1, 250) + "." + random(1, 250);
			_theArry[21] = "devip=" + ip;
		} else {

			_theArry[21] = "devip="
					+ document.getElementById("txt_devip").value;
		}
	}

	var gen_url = _theArry[0] + "?";
	var i;
	for (i = 1; i < _theArry.length; i++) {
		if (_theArry[i] != "") {
			if (i != _theArry.length - 1) {
				gen_url += _theArry[i] + "&";
			} else {
				gen_url += _theArry[i]
			}
		}
	}
	document.getElementById("area_genUrl").value = gen_url;
	if (gen_url != "") {
		document.getElementById("chk_act").checked = true;
	}
	return gen_url;
}

// ----------------------------------请求参数
// Start----------------------------------

function getClkUrl(sys) {
	$("#sel_req_url").find("option").remove();
	$.ajax({
		url : "getUrlAction",
		type : "post",
		dataType : "json",
		data : "sys=" + sys,
		success : bindClkUrlList
	});
}

function bindClkUrlList(json) {

	var hallList = (json.urllist);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_req_url").appendChild(option);
		option.value = hall.url;
		option.text = hall.url;

	}
}

function getClkOSV(os) {
	// 绑定之前 清空第一个以外的option
	$("#sel_req_osv").children().eq(0).siblings().remove();
	// $("#bindShow").children().eq(0).siblings().remove();
	// var temp = $("#sel_os").find("option:selected").val();
	$.ajax({
		url : "getOsvAction",
		type : "post",
		dataType : "json",
		data : "os=" + os,
		success : bindClkOSVList,
	});
}

function bindClkOSVList(json) {
	var hallList = (json.osvlist);
	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_req_osv").appendChild(option);
		option.value = hall.id;
		option.text = hall.osv;

	}
}

function getClkUA() {
	// 绑定之前 清空第一个以外的option
	$("#sel_req_ua").children().eq(0).siblings().remove();
	// $("#bindShow").children().eq(0).siblings().remove();
	// var temp = $("#sel_os").find("option:selected").val();
	$.ajax({
		url : "getUaAction",
		type : "get",
		dataType : "json",
		data : {
			os : $("[name='sel_req_os']").val(),
			osv : $("[name='sel_req_osv']").val()
		},
		// data : {osv: $("[name='sel_osv']").val()},
		success : bindClkUAList
	});
}

function bindClkUAList(json) {
	var hallList = (json.ualist);

	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_req_ua").appendChild(option);
		option.value = hall.id;
		// option.text = formatStrLength(hall.ua, 100);
		option.text = hall.ua;

	}
}

function fRandomBy(under, over){ 
   switch(arguments.length){ 
     case 1: return parseInt(Math.random()*under+1); 
     case 2: return parseInt(Math.random()*(over-under+1) + under); 
     default: return 0; 
   } 
} 

/* 请求链接生成 */
function genReqUrlRand() {
	var rad1 = document.getElementsByName("rad_clk_system");
	var sys = "";
	if (rad1.length > 0) {
		for (var i = 0; i < rad1.length; i++) {
			if (rad1[i].checked) {
				sys = rad1[i].value;
			}
		}
	}
	var _theArry = new Array();
	// _theArry[0] = $("#sel_req_url").find("option:selected").text();
	_theArry[0] = document.getElementById("sel_req_url").value;
	if(sys=="Mad Platform")
	{
		_theArry[1] = "adspaceid=" + document.getElementById("txt_adspaceid").value;
	}
	if(sys=="SmartMad")
	{
		_theArry[1] = document.getElementById("txt_adspaceid").value;
	}
	
	_theArry[2] = "adtype=" + document.getElementById("sel_req_adtype").value;
	//var size = mainFrame.window.getSelMatesize().join();
	var size = $("#sel_matesize").combobox("getValues").join();
	if(size!=""){
	var sizeArry = new Array();
	sizeArry = size.split(",");
	var i =fRandomBy(0,sizeArry.length-1);
	var randSize = sizeArry[i].split("*");
	_theArry[3] = "width=" + randSize[0];
	_theArry[4] = "height=" + randSize[1];
	}
	else
		{
		_theArry[3] = "width=";
		_theArry[4] = "height=";
		}
	_theArry[5] = "pid=" + document.getElementById("txt_req_pid").value;
	_theArry[6] = "pcat=" + document.getElementById("txt_req_pcat").value;
	_theArry[7] = "media=" + document.getElementById("sel_req_media").value;
	_theArry[8] = "bid=" + document.getElementById("txt_req_bid").value;
	_theArry[9] = "ip=" + document.getElementById("txt_req_ip").value;
	if (document.getElementById("chk_req_ipRand").checked) {
		var ip = random(1, 250) + "." + random(1, 250) + "."
				+ random(1, 250) + "." + random(1, 250);
		_theArry[9] = "ip=" + ip;
	} else {

		_theArry[9] = "ip="
				+ document.getElementById("txt_req_ip").value;
	}
	
	

	if (document.getElementById("chk_req_uidRand").checked) {
		_theArry[10] = "uid=" + randMD5Number();
	} else {
		_theArry[10] = "uid=" + document.getElementById("txt_req_uid").value;
	}

	if (document.getElementById("chk_req_idfaRand").checked) {
		_theArry[11] = "idfa=" + randMD5Number();
	} else {
		_theArry[11] = "idfa=" + document.getElementById("txt_req_idfa").value;
	}

	if (document.getElementById("chk_req_oidRand").checked) {
		_theArry[12] = "oid=" + randMD5Number();
	} else {
		_theArry[12] = "oid=" + document.getElementById("txt_req_oid").value;
	}

	if (document.getElementById("chk_req_vidRand").checked) {
		_theArry[13] = "vid=" + randMD5Number();
	} else {
		_theArry[13] = "vid=" + document.getElementById("txt_req_vid").value;
	}

	if (document.getElementById("chk_req_aidRand").checked) {
		_theArry[14] = "aid=" + randMD5Number();
	} else {
		_theArry[14] = "aid=" + document.getElementById("txt_req_aid").value;
	}

	if (document.getElementById("chk_req_imeiRand").checked) {
		_theArry[15] = "imei=" + randMD5Number();
	} else {
		_theArry[15] = "imei=" + document.getElementById("txt_req_imei").value;
	}

	if (document.getElementById("chk_req_adidRand").checked) {
		_theArry[16] = "aaid=" + randMD5Number();
	} else {
		_theArry[16] = "aaid=" + document.getElementById("txt_req_adid").value;
	}

	if (document.getElementById("chk_req_wmaRand").checked) {
		_theArry[17] = "wma=" + randMD5Number();
	} else {
		_theArry[17] = "wma=" + document.getElementById("txt_req_wma").value;
	}
	_theArry[18] = "os=" + document.getElementById("sel_req_os").value;
	_theArry[19] = "osv=" + $("#sel_req_osv").find("option:selected").text();
	_theArry[20] = "ua=" + $("#sel_req_ua").find("option:selected").text();
	_theArry[21] = "pkgname="
			+ document.getElementById("txt_req_pkgname").value;
	_theArry[22] = "appname="
			+ document.getElementById("txt_req_appname").value;
	_theArry[23] = "conn=" + document.getElementById("sel_req_conn").value;
	_theArry[24] = "carrier="
			+ document.getElementById("sel_req_carrier").value;
	_theArry[25] = "apitype="
			+ document.getElementById("sel_req_apitype").value;
	_theArry[26] = "density="
			+ document.getElementById("txt_req_density").value;
	_theArry[27] = "cell=" + document.getElementById("txt_req_cell").value;
	_theArry[28] = "device=" + document.getElementById("txt_req_device").value;
	if(sys=="SmartMad"){
	_theArry[29] = "lat=" + document.getElementById("txt_req_lat").value;
	_theArry[30] = "lon=" + document.getElementById("txt_req_lon").value;
	_theArry[31] = "model=11";
	_theArry[32] = "debug=0";
	
	}
	var gen_url = _theArry[0] + "?";
	if(sys=="Mad Platform")
	{
		gen_url = _theArry[0] + "?";
	}
	if(sys=="SmartMad")
	{
		gen_url = _theArry[0]+"/napi/"+ _theArry[1] + "?"
	}
	var i;
	for (i = 1; i < _theArry.length; i++) {
		
		if(sys=="SmartMad"&&i!=1)
		{
			if (_theArry[i] != "") {
				if (i != _theArry.length - 1) {
					gen_url += _theArry[i] + "&";
				} else {
					gen_url += _theArry[i]
				}
			}
		}
		if(sys=="Mad Platform")
		{
			if (_theArry[i] != "") {
				if (i != _theArry.length - 1) {
					gen_url += _theArry[i] + "&";
				} else {
					gen_url += _theArry[i]
				}
			}
		}
	}
	document.getElementById("area_req_genUrl").value = gen_url;
	if (document.getElementById("area_req_genUrl").value == "") {
		document.getElementById("chk_req").checked = true;
		document.getElementById("chk_imp").checked = true;
		document.getElementById("chk_clk").checked = true;
	}
	return gen_url;
}
