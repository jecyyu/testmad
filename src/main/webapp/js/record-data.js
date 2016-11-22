function recordData(req, imp, clk, act,adspaceid,campid,convid,remark) {
	$.ajax({
		url : "recordDataAction",
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
			url : "insertReq",
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

function recordImp(recordStatus, resid,status,adspaceid,url,remark) {
	if(recordStatus==0)
	{
		$.ajax({
			url : "insertImp",
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
			url : "insertClk",
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
		url : "insertImp",
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
		url : "insertClk",
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
		url : "insertAct",
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