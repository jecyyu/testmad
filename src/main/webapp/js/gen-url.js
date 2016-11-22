var convid,os,ua;
var static_count=0,ipListSize=-1;

function fRandomBy(under, over){ 
   switch(arguments.length){ 
     case 1: return parseInt(Math.random()*under+1); 
     case 2: return parseInt(Math.random()*(over-under+1) + under); 
     default: return 0; 
   } 
} 

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

function getRandIp(){
	 return randIp= random(1, 250) + "." + random(1, 250) + "."+ random(1, 250) + "." + random(1, 250);
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

/*------------------------------------------------分界线------------------------------------------------*/

/* 请求链接生成 */
function genReqUrl() {
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
	_theArry[0] = $("#sel_req_url").find("option:selected").text();
	//_theArry[0] = document.getElementById("sel_req_url").value;
	//sys = document.getElementById("rad_clk_system").value;
	if(sys=="2")
	{
		_theArry[1] = "adspaceid=" + document.getElementById("txt_adspaceid").value;
	}
	if(sys=="3")
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
			var cust_size = $("#sel_matesize").combobox("getText");
			if(cust_size!="")
			{
				var sizeArry = new Array();
				sizeArry = cust_size.split(",");
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
		}
	_theArry[5] = "pid=" + document.getElementById("txt_req_pid").value;
	_theArry[6] = "pcat=" + document.getElementById("txt_req_pcat").value;
	_theArry[7] = "media=" + document.getElementById("sel_req_media").value;
	_theArry[8] = "bid=" + document.getElementById("txt_req_bid").value;
	if($("#sel_firstCity").find("option:selected").val()=="-1")
	{
		if(document.getElementById("chk_req_cityIpRand").checked)
		{
			_theArry[9] = "ip=" + getRandIp();
		}
		else
		{
			_theArry[9] = "ip=" + document.getElementById("txt_custCity").value;
		}
		
	}
	else
	{
		if($("#sel_secondCity").find("option:selected").val()=="-1")
		{
			if(document.getElementById("chk_req_cityIpRand").checked)
			{
				var _ip = random(1,$("#sel_secondCity").find("option").size());
				$("#sel_secondCity").find("option").eq(_ip).attr("selected",true);
				_theArry[9] = "ip=" + $("#sel_secondCity").find("option:selected").val();
				document.getElementById("sel_secondCity").options[0].selected=true;
			}
			else
			{
				ipListSize = $("#sel_secondCity").find("option").size();
				static_count =static_count+1;
				$("#sel_secondCity").find("option").eq(static_count).attr("selected",true);
				_theArry[9] = "ip=" + $("#sel_secondCity").find("option:selected").val();
				document.getElementById("sel_secondCity").options[0].selected=true;
			}
			
		}
		else
		{
			_theArry[9] = "ip=" + $("#sel_secondCity").find("option:selected").val();
		}
	}
	
	
	/*if (document.getElementById("chk_req_ipRand").checked) {
		ipListSize = $("#sel_ip").find("option").size();
		var _ip = random(1,ipListSize);
		$("#sel_ip").find("option").eq(_ip).attr("selected",true);

		_theArry[9] = "ip=" + $("#sel_ip").find("option:selected").val();
	} else {
		if($("#sel_ip").find("option:selected").val()=="-1")
		{
			_theArry[9] = "ip=" + document.getElementById("txt_ip").value;
		}
		else
		{
			_theArry[9] = "ip=" + $("#sel_ip").find("option:selected").val();
		}
	}*/

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
	_theArry[21] = "pkgname="+ document.getElementById("txt_req_pkgname").value;
	_theArry[22] = "appname="+ document.getElementById("txt_req_appname").value;
	_theArry[23] = "conn=" + document.getElementById("sel_req_conn").value;
	_theArry[24] = "carrier="+ document.getElementById("sel_req_carrier").value;
	_theArry[25] = "apitype="+ document.getElementById("sel_req_apitype").value;
	_theArry[26] = "density="
			+ document.getElementById("txt_req_density").value;
	_theArry[27] = "cell=" + document.getElementById("txt_req_cell").value;
	_theArry[28] = "device=" + document.getElementById("txt_req_device").value;
	
	if(sys=="3"){
	_theArry[29] = "lat=" + document.getElementById("txt_req_lat").value;
	_theArry[30] = "lon=" + document.getElementById("txt_req_lon").value;
	_theArry[31] = "model=11";
	_theArry[32] = "debug=" + document.getElementById("sel_db").value;

		
	
	}
	var gen_url = _theArry[0] + "?";
	if(sys=="2")
	{
		gen_url = _theArry[0] + "?";
	}
	if(sys=="3")
	{
		gen_url = _theArry[0]+"/napi/"+ _theArry[1] + "?"
	}
	var i;
	for (i = 1; i < _theArry.length; i++) {
		
		if(sys=="3"&&i!=1)
		{
			if (_theArry[i] != "") {
				if (i != _theArry.length - 1) {
					gen_url += _theArry[i] + "&";
				} else {
					gen_url += _theArry[i]
				}
			}
		}
		if(sys=="2")
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



/*快速请求链接*/
function genQuickUrl()
{
	
	var quick_url = document.getElementById("sel_quick_url").value;
	var quick_adspaceid = document.getElementById("txt_quick_adspaceid").value;
	var quick_adtype = document.getElementById("sel_quick_adtype").value;
	//var quick_matesize = document.getElementById("sel_quick_matesize").value;
	var quick_os = document.getElementById("sel_quick_os").value;
	var quick_osv = "";
	var quick_ua = "";
	
	switch(quick_os)
	{
		case "0":
			quick_osv = "4.0.4";
			quick_ua = "mozilla/5.0 (iphone;  cpu iphone os 4_3_3 like mac os x; zh-cn) applewebkit/533.17.9 (khtml, like gecko) mobile/";break;
		case "1":
			quick_osv = "7.0.4";
			quick_ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/";break;
		default:;break;
	}
	//url拼接
	var _theArry = new Array();
	_theArry[0] = quick_url;
	if(document.getElementById("chk_smartmad").checked)
	{
		sys = "SmartMad";
	}
	else
	{
		sys = "Mad Platform";
	}
	if(sys=="Mad Platform")
	{
		_theArry[1] = "adspaceid=" + quick_adspaceid;
	}
	if(sys=="SmartMad")
	{
		_theArry[1] = quick_adspaceid;
	}	
	_theArry[2] = "adtype=" + quick_adtype;
	//var size = mainFrame.window.getSelMatesize().join();
	var size = $("#sel_quick_matesize").combobox("getValues").join();
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
	_theArry[5] = "pid=1";
	_theArry[6] = "pcat=1";
	_theArry[7] = "media=1";
	_theArry[8] = "bid=1";
	var ip = random(1, 250) + "." + random(1, 250) + "." + random(1, 250) + "." + random(1, 250);
	_theArry[9] = "ip=" + ip;

	_theArry[10] = "uid=" + randMD5Number();

	_theArry[11] = "idfa=" + randMD5Number();

	_theArry[12] = "oid=" + randMD5Number();

	_theArry[13] = "vid=" + randMD5Number();

	_theArry[14] = "aid=" + randMD5Number();

	_theArry[15] = "imei=" + randMD5Number();

	_theArry[16] = "aaid=" + randMD5Number();

	_theArry[17] = "wma=" + randMD5Number();
	
	_theArry[18] = "os=" + quick_os;
	
	_theArry[19] = "osv=" + quick_osv;
	
	_theArry[20] = "ua=" + quick_ua;
	
	_theArry[21] = "pkgname=com.quickurl.package";
	_theArry[22] = "appname=quickurl";
	_theArry[23] = "conn=1";
	_theArry[24] = "carrier=0";
	_theArry[25] = "apitype=0";
	_theArry[26] = "density=";
	_theArry[27] = "cell=";
	_theArry[28] = "device=quickDevice";
	if(sys=="SmartMad"){
		_theArry[29] = "lat=";
		_theArry[30] = "lon=";
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
	if (gen_url != "") {
		document.getElementById("chk_req").checked = true;
		document.getElementById("chk_imp").checked = true;
		document.getElementById("chk_clk").checked = true;
	}
	return gen_url;
}



/*快速请求链接*/
function genActUrl(rSid)
{
	
	var actUrl,db,nt,lng,jb, apn,av, aas,pv,utc,sid,cat,act,de,val,awn,dur,lab,hid,cn,bss;
	var osv,device,uid,idfa,oid,vid,aid,aaid,wma,imei;
	var _theArry = new Array();
	
	os = document.getElementById("sel_req_os").value;
	osv = $("#sel_req_osv").find("option:selected").text();
	ua = $("#sel_act_ua").find("option:selected").text();
	
	
	switch(sdkVer)
	{
		case "SDK1.0":
			
			actUrl = document.getElementById("sel_sdk2_url").value;
			convid = document.getElementById("txt_sdk2_aid").value;
			db = document.getElementById("sel_sdk2_db").value;
			nt = document.getElementById("sel_sdk2_nt").value;
			lng = document.getElementById("txt_sdk2_lng").value;
			jb = document.getElementById("sel_sdk2_jb").value;
			apn = document.getElementById("txt_sdk2_apn").value;
			av = document.getElementById("txt_sdk2_av").value;
			aas = document.getElementById("sel_sdk2_aas").value;
			pv = document.getElementById("txt_sdk2_pv").value;
			device = document.getElementById("txt_act_device").value;
			uid = document.getElementById("txt_act_uid").value;
			idfa = document.getElementById("txt_act_idfa").value;
			oid = document.getElementById("txt_act_oid").value;
			vid = document.getElementById("txt_act_vid").value;
			aid = document.getElementById("txt_act_aid").value;
			imei = document.getElementById("txt_act_imei").value;
			aaid = document.getElementById("txt_act_aaid").value;
			wma = document.getElementById("txt_act_wma").value;
			
			_theArry[0] = actUrl;
			_theArry[1] = "aid=" + convid;
			_theArry[2] = "db=" + db;
			_theArry[3] = "nt=" + nt;
			_theArry[4] = "lng=" + lng;
			_theArry[5] = "jb=" + jb;
			_theArry[6] = "apn=" + apn;
			_theArry[7] = "av=" + av;
			_theArry[8] = "aas=" + aas;
			_theArry[9] = "pv=" + pv;
			_theArry[10] = "device=" + device;
			_theArry[11] = "uid=" + uid;
			_theArry[12] = "idfa=" + idfa;
			_theArry[13] = "oid=" + oid;
			_theArry[14] = "vid=" + vid;
			_theArry[15] = "aid=" + aid;
			_theArry[16] = "imei=" + imei;
			_theArry[17] = "aaid=" + aaid;
			_theArry[18] = "wma=" + wma;
			_theArry[19] = "pv=" + pv;
			_theArry[20] = "os=" + os;
			_theArry[21] = "osv=" + osv;
			_theArry[22] = "ua=" + ua;
			if (document.getElementById("chk_act_uidRand").checked) {
				_theArry[23] = "uid=" + randSDKNumber();
			} else {
				_theArry[23] = "uid=" + uid;
			}
			if (document.getElementById("chk_act_oidRand").checked) {
				_theArry[24] = "oid=" + randSDKNumber();
			} else {
				_theArry[24] = "oid=" + oid;
			}

			if (document.getElementById("chk_act_vidRand").checked) {
				_theArry[25] = "vid=" + randSDKNumber();
			} else {
				_theArry[25] = "vid=" + vid;
			}
			if (document.getElementById("chk_act_idfaRand").checked) {
				_theArry[26] = "did=" + randSDKNumber();
			} else {
				_theArry[26] = "did=" + idfa;
			}
			if (document.getElementById("chk_act_adidRand").checked) {
				_theArry[27] = "adid=" + randSDKNumber();
			} else {
				_theArry[27] = "adid=" + aaid;
			}

			if (document.getElementById("chk_act_wmaRand").checked) {
				_theArry[28] = "wma=" + randSDKNumber();
			} else {
				_theArry[28] = "wma=" + wma;
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
			break;
		case "SDK2.0":
			actUrl = document.getElementById("sel_sdk3_url").value;
			convid = document.getElementById("txt_sdk3_convid").value;
			db = document.getElementById("sel_sdk3_db").value;
			nt = document.getElementById("sel_sdk3_nt").value;
			apn = document.getElementById("txt_sdk3_apn").value;	
			av = document.getElementById("txt_sdk3_av").value;
			sid = document.getElementById("txt_sdk3_sid").value;
			aas = document.getElementById("sel_sdk3_aas").value;
			cat = document.getElementById("txt_sdk3_cat").value;
			act = document.getElementById("txt_sdk3_act").value;
			jb = document.getElementById("sel_sdk3_jb").value;
			de = document.getElementById("sel_sdk3_de").value;
			val = document.getElementById("txt_sdk3_val").value;
			awn = document.getElementById("txt_sdk3_awn").value;
			dur = document.getElementById("txt_sdk3_dur").value;
			lab = document.getElementById("txt_sdk3_lab").value;
			hid = document.getElementById("txt_sdk3_hid").value;
			cn = document.getElementById("txt_sdk3_cn").value;
			bss = document.getElementById("txt_sdk3_bss").value;
			device = document.getElementById("txt_act_device").value;
			
			uid = document.getElementById("txt_act_uid").value;
			idfa = document.getElementById("txt_act_idfa").value;
			oid = document.getElementById("txt_act_oid").value;
			vid = document.getElementById("txt_act_vid").value;
			aid = document.getElementById("txt_act_aid").value;
			imei = document.getElementById("txt_act_imei").value;
			aaid = document.getElementById("txt_act_aaid").value;
			wma = document.getElementById("txt_act_wma").value;
			
			if(document.getElementById("chk_utcAuto").checked)
			{
				utc = new Date().getTime() ;
				utc = utc + "+8";
			}
			else
			{
				utc = document.getElementById("txt_sdk3_utc").value;
			}
			if(document.getElementById("chk_sidRand").checked)
			{
				if(rSid==undefined)
					{rSid="";}
				else
					{sid = rSid;}
			}
			else
			{
				sid = document.getElementById("txt_sdk3_sid").value;
			}
			
			_theArry[0] = actUrl;
			if(returnFlag==1)
				{
					_theArry[1] = "";
				}
			else
				{
					_theArry[1] = "cid=" + convid;
				}
			
			
			switch(os)
			{
				case "0":
					//oid
					if (document.getElementById("chk_act_aidRand").checked) {
						_theArry[2] = "oid=" + randSDKNumber();
					} else {
						_theArry[2] = "oid=" + aid;
					}
					//aid
					if (document.getElementById("chk_act_adidRand").checked) {
						_theArry[3] = "aid=" + randSDKNumber();
					} else {
						_theArry[3] = "aid=" + aaid;
					}
					//did
					if (document.getElementById("chk_act_imeiRand").checked) {
						_theArry[4] = "did=" + randSDKNumber();
					} else {
						_theArry[4] = "did=" + imei;
					}
					;break;
				case "1":
					//oid
					if (document.getElementById("chk_act_oidRand").checked) {
						_theArry[2] = "oid=" + randSDKNumber();
					} else {
						_theArry[2] = "oid=" + oid;
					}
					//aid
					if (document.getElementById("chk_act_idfaRand").checked) {
						_theArry[3] = "aid=" + randSDKNumber();
					} else {
						_theArry[3] = "aid=" + idfa;
					}
					//did
					if (document.getElementById("chk_act_uidRand").checked) {
						_theArry[4] = "did=" + randSDKNumber();
					} else {
						_theArry[4] = "did=" + uid;
					}
					;break;
				default:
					_theArry[2] = "";
					_theArry[3] = "";
					_theArry[4] = "";
					break;
			}
			if(returnFlag==1)
			{
				_theArry[2] = "";
				_theArry[3] = "";
				_theArry[4] = "";
			}
			
			

			if (document.getElementById("chk_act_wmaRand").checked) {
				_theArry[5] = "wma=" + randSDKNumber();
			} else {
				_theArry[5] = "wma=" + wma;
			}
			
			_theArry[6] = "os=" + os;
			_theArry[7] = "osv=" + osv;
			_theArry[8] = "lng=zh_CN";
			_theArry[9] = "apn=" + apn;
			_theArry[10] = "av="+ av;
			_theArry[11] = "pv=1.2.0";
			_theArry[12] = "";
			_theArry[13] = "sid=" + sid;
			_theArry[14] = "db="+db;
			_theArry[15] = "nt=" + nt;
			_theArry[16] = "et=" + "{\"la\":[{\"sid\":\""+sid+"\",\"utc\":\""+utc+"\",\"aas\":"+aas+"}],\"ev\":[{\"sid\":\""+sid+"\",\"utc\":\""+utc+"\",\"cat\":\""+cat+"\",\"act\":\""+act+"\",\"lab\":\""+lab+"\",\"val\":"+val+"}],\"te\":[{\"sid\":\""+sid+"\",\"utc\":\""+utc+"\",\"apn\":\""+apn+"\",\"av\":\""+av+"\",\"awn\":\""+awn+"\",\"dur\":\""+dur+"\"}]}";
			_theArry[17] = "mod=1";
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
			break;
		case "S2S":
			actUrl = document.getElementById("sel_s2s_url").value;
			campid = document.getElementById("txt_s2s_cid").value;
			ch = document.getElementById("sel_s2s_ch").value;
			sub1 = document.getElementById("txt_s2s_sub1").value;
			sub2 = document.getElementById("txt_s2s_sub2").value;
			sub3 = document.getElementById("txt_s2s_sub3").value;
			sub4 = document.getElementById("txt_s2s_sub4").value;
			sub5 = document.getElementById("txt_s2s_sub5").value;
			clktime = document.getElementById("txt_s2s_clktime").value;
			cvntime = document.getElementById("txt_s2s_cvntime").value;
			devip = document.getElementById("txt_s2s_devip").value;
			
			uid = document.getElementById("txt_act_uid").value;
			idfa = document.getElementById("txt_act_idfa").value;
			oid = document.getElementById("txt_act_oid").value;
			vid = document.getElementById("txt_act_vid").value;
			aid = document.getElementById("txt_act_aid").value;
			imei = document.getElementById("txt_act_imei").value;
			aaid = document.getElementById("txt_act_aaid").value;
			wma = document.getElementById("txt_act_wma").value;
			
			
			
			_theArry[0] = actUrl;
			_theArry[1] = "cid=" + campid;
			_theArry[2] = "ch=" + ch;
			
			switch(os)
			{
				case "0":
					//oid
					if (document.getElementById("chk_act_aidRand").checked) {
						_theArry[3] = "oid=" + randMD5Number();
					} else {
						_theArry[3] = "oid=" + oid;
					}
					//aid
					if (document.getElementById("chk_act_adidRand").checked) {
						_theArry[4] = "aid=" + randMD5Number();
					} else {
						_theArry[4] = "aid=" + aaid;
					}
					//did
					if (document.getElementById("chk_act_imeiRand").checked) {
						_theArry[5] = "did=" + randMD5Number();
					} else {
						_theArry[5] = "did=" + imei;
					}
					;break;
				case "1":
					//oid
					if (document.getElementById("chk_act_oidRand").checked) {
						_theArry[3] = "oid=" + randMD5Number();
					} else {
						_theArry[3] = "oid=" + oid;
					}
					//aid
					if (document.getElementById("chk_act_idfaRand").checked) {
						_theArry[4] = "aid=" + randMD5Number();
					} else {
						_theArry[4] = "aid=" + idfa;
					}
					//did
					if (document.getElementById("chk_act_uidRand").checked) {
						_theArry[5] = "did=" + randMD5Number();
					} else {
						_theArry[5] = "did=" + uid;
					}
					
					
					;break;
				default:
					_theArry[2] = "";
					_theArry[3] = "";
					_theArry[4] = "";
					break;
			}
			if(returnFlag==1)
			{
				_theArry[2] = "";
				_theArry[3] = "";
				_theArry[4] = "";
			}
			
			

			if (document.getElementById("chk_act_wmaRand").checked) {
				_theArry[5] = "wma=" + randMD5Number();
			} else {
				_theArry[5] = "wma=" + wma;
			}
			
			if (document.getElementById("chk_ridRand").checked) {
				_theArry[6] = "rid=rid_" + Date.parse(new Date());
			} else {
				_theArry[6] = "rid=" + rid;
			}
			
			if (document.getElementById("chk_sub1Rand").checked) {
				_theArry[7] = "sub1=sub1_" + Date.parse(new Date());
			} else {
				_theArry[7] = "sub1=" + sub1;
			}
			
			if (document.getElementById("chk_sub2Rand").checked) {
				_theArry[8] = "sub2=sub2_" + Date.parse(new Date());
			} else {
				_theArry[8] = "sub2=" + sub2;
			}
			
			if (document.getElementById("chk_sub3Rand").checked) {
				_theArry[9] = "sub3=sub3_" + Date.parse(new Date());
			} else {
				_theArry[9] = "sub3=" + sub3;
			}
			
			if (document.getElementById("chk_sub4Rand").checked) {
				_theArry[10] = "sub4=sub4_" + Date.parse(new Date());
			} else {
				_theArry[10] = "sub4=" + sub4;
			}
			
			if (document.getElementById("chk_sub5Rand").checked) {
				_theArry[11] = "sub5=sub5_" + Date.parse(new Date());
			} else {
				_theArry[11] = "sub5=" + sub5;
			}
			
			if (document.getElementById("chk_sub5Rand").checked) {
				_theArry[11] = "clktime=" + nowUtcDate();
			} else {
				_theArry[11] = "clktime=" + clktime;
			}
			
			if (document.getElementById("chk_sub5Rand").checked) {
				_theArry[11] = "cvntime=" + nowUtcDate();
			} else {
				_theArry[11] = "cvntime=" + cvntime;
			}
			
			if (document.getElementById("chk_sub5Rand").checked) {
				_theArry[12] = "devip=" + getRandIp();
			} else {
				_theArry[12] = "devip=" + devip;
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
			break;	
	}
	return gen_url;
}




