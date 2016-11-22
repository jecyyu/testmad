var control,chcontr;


/*getUrl start*/
function getReqUrl(sysid) {
	// $("#sel_url").children().eq(0).siblings().remove();
	document.getElementById(control).innerHTML = "";
	$.ajax({
		url : "../getUrlAction",
		type : "post",
		dataType : "json",
		data : {
			sysid : sysid,
			typeName : "adRequest"
		},
		success : bindReqUrlList
	});
}

function bindReqUrlList(json) {

	var hallList = (json.urlLists);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(control).appendChild(option);
		option.value = hall.id;
		option.text = hall.url;

	}
}
/*getUrl end*/

/*getOS start*/
function getReqOs(control) {
	// $("#sel_url").children().eq(0).siblings().remove();
	$("#"+control+"").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getOsAction",
		type : "post",
		dataType : "json",
		success : bindReqOs
	});
}

function bindReqOs(json) {

	var hallList = (json.oslist);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(control).appendChild(option);
		option.value = hall.id;
		option.text = hall.os;

	}
}
/*getOS end*/

/*getOSV start*/
function getClkOSV(os,contr) {
	// 绑定之前 清空第一个以外的option
	control = contr;
	$("#"+control+"").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getOsvAction",
		type : "post",
		dataType : "json",
		data : "os=" + os,
		success : bindClkOSV,
	});
}

function bindClkOSV(json) {
	var hallList = (json.osvlist);
	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(control).appendChild(option);
		option.value = hall.id;
		option.text = hall.osv;

	}
}
/*getOSV end*/

/*getUA start*/
function getClkUA(contr) {
	control = contr;
	var chk_os = $("[name='sel_req_os']").val();
	var chk_osv = $("#sel_req_osv").find("option:selected").text().split(".")[0];
	
	$("#"+control+"").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getUaAction",
		type : "get",
		dataType : "json",
		data : {
			os : $("[name='sel_req_os']").val(),
			osv : $("[name='sel_req_osv']").val()
		},
		// data : {osv: $("[name='sel_osv']").val()},
		success : bindClkUA
	});
	if(chk_os==1){
		switch(chk_osv)
		{
			case "7":
				document.getElementById("txt_req_uid").value="FFFFFFFF";
				document.getElementById("txt_req_wma").value="020000000000";
				document.getElementById("chk_req_uidRand").checked=false;
				document.getElementById("chk_req_wmaRand").checked=false;
				;break;
			case "6":
				document.getElementById("txt_req_uid").value="FFFFFFFF";
				document.getElementById("txt_req_wma").value="";
				document.getElementById("chk_req_uidRand").checked=false;
				document.getElementById("chk_req_wmaRand").checked=true;
				;break;
			default:
				document.getElementById("txt_req_uid").value="";
				document.getElementById("txt_req_wma").value="";
				document.getElementById("chk_req_uidRand").checked=true;
				document.getElementById("chk_req_wmaRand").checked=true;
				;break;
		}
		
	}else{
		document.getElementById("txt_req_uid").value="";
		document.getElementById("txt_req_wma").value="";
		document.getElementById("chk_req_uidRand").checked=true;
		document.getElementById("chk_req_wmaRand").checked=true;
	}
}

function bindClkUA(json) {
	var hallList = (json.ualist);

	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(control).appendChild(option);
		option.value = hall.id;
		// option.text = formatStrLength(hall.ua, 100);
		option.text = hall.ua;

	}
}
/*getUA end*/

/*getIP start
function getIP(ipcontrol) {
	// $("#sel_url").children().eq(0).siblings().remove();
	$("#"+ipcontrol+"").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getIpAction",
		type : "post",
		dataType : "json",
		success : bindIP
	});
}

function bindIP(json) {

	var hallList = (json.ipList);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(ipcontrol).appendChild(option);
		option.value = hall.cityIp;
		option.text = hall.city;

	}
}
getIP end*/



/*getChannel start*/
function getChannel(ch_contr) {
	// 绑定之前 清空第一个以外的option
	chcontr = ch_contr;
	$("#"+chcontr+"").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getChannelAction",
		type : "post",
		dataType : "json",
		success : bindChannel,
	});
}

function bindChannel(json) {
	var hallList = (json.chList);
	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(chcontr).appendChild(option);
		option.value = hall.ch;
		option.text = hall.medianame;

	}
}
/*getChannel end*/

/*getFirstCity start*/
function getFirstCity() {
	// 绑定之前 清空第一个以外的option
	//jQuery("#sel_firstCity").empty();
	$("#sel_firstCity").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getFirstCity",
		type : "post",
		dataType : "json",
		success : bindFirstCity,
	});
}

function bindFirstCity(json) {
	var hallList = (json.firstCityList);
	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_firstCity").appendChild(option);
		option.value = hall.resid;
		option.text = hall.cityName;

	}
}
/*getFirstCity end*/

/*getSecondCity start*/
function getSecondCity() {
	// 绑定之前 清空第一个以外的option
	//jQuery("#sel_secondCity").empty();
	MaskUtil.mask("获取中...");
	$("#sel_secondCity").children().eq(0).siblings().remove();
	var firstId = $("#sel_firstCity").val();
	if(firstId=="-1")
	{
		ipStyle(firstId);
		MaskUtil.unmask();
	}
	else
	{
		ipStyle(firstId);
		$.ajax({
			url : "../getSecondCity",
			type : "post",
			dataType : "json",
			data : "firstId="+firstId,
			success : bindSecondCity,
		});
	}
	
	
}

function bindSecondCity(json) {
	var hallList = (json.secondCityList);
	// 遍历json对象
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];

		var option = document.createElement("option");
		option = document.createElement("option");
		document.getElementById("sel_secondCity").appendChild(option);
		
		option.value = hall.ip;
		option.text = hall.cityName;

	}
	MaskUtil.unmask();
}
/*getSecondCity end*/
