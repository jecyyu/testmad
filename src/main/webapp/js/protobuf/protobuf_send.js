var iqiyiPath = "localhost:8888/Tracking-QA/iqiyi-protobuf?configname=";
var sendServer = "http://localhost:8888/Tracking-QA/getSend"

function sendIqiyiProto() {
	var conf_name = $("#div_remark").text()
	if (conf_name.indexOf(".conf")!=-1) {
		send(0, iqiyiPath + conf_name, function(dataUrl) {
			var jsonResponse = dataUrl.responseText.split(">>>>L<<<<")[0];
			var htmlResponse = dataUrl.responseText.split(">>>>L<<<<")[1];			
			var impurl = getResponseByJson(jsonResponse, "impression");
			var clkurl = getResponseByJson(jsonResponse, "click");
			var iconurl = getResponseByJson(jsonResponse, "icon_url");
			var crid = getResponseByJson(jsonResponse, "crid");
			writeTest("area_req",crid, htmlResponse);

			// 发送展示
			send(0, impurl, function(resp) {
				// document.getElementByName("area_imp");
				writeTest("area_imp",crid, impurl);
			});
			// 发送点击
			send(0, clkurl, function(resp) {
				// document.getElementByName("area_imp");
				writeTest("area_clk",crid, impurl);
			});
			// 获取icon
			writeTest("area_icon",crid, impurl);
		})
	}else{
		alert("未上传conf文件！");
	}
}

// 文件上传
function uploadFile() {
	var formData = new FormData();
	var name = $("file1").val();
	formData.append("file", $("#upload")[0].files[0]);
	formData.append("name", name);
	$.ajax({
		url : Url,
		type : 'POST',
		data : formData,
		// 告诉jQuery不要去处理发送的数据
		processData : false,
		// 告诉jQuery不要去设置Content-Type请求头
		contentType : false,
		beforeSend : function() {
			console.log("正在进行，请稍候");
		},
		success : function(responseStr) {
			if (responseStr.status === 0) {
				console.log("成功" + responseStr);
			} else {
				console.log("失败");
			}
		},
		error : function(responseStr) {
			console.log("error");
		}
	});
}

function GetText(xhr) {
	if (xhr.responseText != "") {
		var jsonResponse = xhr.responseText.split("\r\n")[0];
		var imp = JSON.parse(jsonResponset)["impression"];
		var clk = JSON.parse(jsonResponse)["click"];
		var icon_url = JSON.parse(jsonResponse)["icon_url"];
		var crid = JSON.parse(jsonResponse)["crid"];

		var info = "impression url = " + imp + "</br></br>click url = " + clk
				+ "</br></br>icon url = " + icon_url + "</br></br>crid = "
				+ crid;
		// document.getElementById("div_remark").innerHTML = info;
	}
}

function getResponseByJson(xhr, field) {
	var result;
	result = JSON.parse(xhr)["response_text"][field];
	return result;
}

function writeTest(areaName, crid, value) {
	var returncode = 200;
	var myDate = new Date();
	var writeStatus = 0;
	if (writeStatus == 0) {
		document.getElementById(areaName).value = returncode + "|"
				+ myDate.toLocaleTimeString() + "|" + crid + "|" + value + "\r\n"
				+ document.getElementById(areaName).value;
	} else {
		document.getElementById(areaName).value = "-"
				+ "|"
				+ formatStrLength(myDate.toLocaleTimeString() + "|" + "---"
						+ "|" + "未发送", 400) + "\r\n"
				+ document.getElementById(areaName).value;
	}

}

function writeArea(writeStatus, cid, areaName, labName, value) {
	var myDate = new Date();
	if (writeStatus == 0) {
		document.getElementById(areaName).value = returncode + "|"
				+ myDate.toLocaleTimeString() + "|" + cid + "|" + value
				+ "\r\n" + document.getElementById(areaName).value;
		$("#" + labName + "").html(Number($("#" + labName + "").html()) + 1);
	} else {
		document.getElementById(areaName).value = "-"
				+ "|"
				+ formatStrLength(myDate.toLocaleTimeString() + "|" + "---"
						+ "|" + "未发送", 400) + "\r\n"
				+ document.getElementById(areaName).value;
	}

}

function send(sendStatus, param, callback) {
	// sendChkErr = "";
	if (sendStatus == 0) {
		if (url != "") {
			// var arryurl = url.split("?");
			var url = "http://localhost:8888/Tracking-QA/getSend";
			var param = "url=" + param.replace("http://", "")
			param = param.replace(/&/g, "*");
			// param = encodeURI(param);
			$.ajax({
				async : false,
				url : url,
				type : 'GET',
				// dataType : 'json',
				data : param,
				timeout : 5000
			}).complete(function(xhr) {
				returncode = xhr.status;

				try {
					callback(xhr);
				} catch (e) {
					alert("发送出现错误：" + e);
				}
			});
		}
	}
}

function ajaxFileUpload() {

	$.ajaxFileUpload({
		url : '/Tracking-QA/uploadServlet',// servlet请求路径
		secureuri : false,
		fileElementId : 'file',// 上传控件的id
		dataType : 'json',
		success : function(data) {
			// alert("上传成功！");
			document.getElementById("div_remark").innerHTML = data.filePath;
			// alert("文件路径："+data.filePath);
			// document.getElementById("file").value= data.filePath;
		}
	})
	return false;
}