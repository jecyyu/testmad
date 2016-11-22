function getMonitorReport()
{
	$.ajax({
		url : "../getMonitorReport",
		type : "post",
		dataType : "json",
		success : monitorLists,
	});
}

function monitorLists(json) {
	resetMonitorTabel(json.reportlist);
}

function getTestCountReportByPage()
{
	$.ajax({
		url : "../getTestCountReport",
		type : "post",
		dataType : "json",
		data : {
			"page" : 0
		},
		success : TestCountByPage,
	});
}

function TestCountByPage(json) {
	resetTestCountTabel(json.testCountList);
}
//campid,convid,imp,createtime
function resetTestCountTabel(data) {
	$("#count_dg").datagrid({
		data : data,
		columns : [ [ {
			field : "campid",
			title : "remark"
		}, {
			field : "imp",
			title : "count"
		}, {
			field : "createtime",
			title : "updatetime"
		},{
			field : "recordtime",
			title : "createtime"
		},
		{field:'ids',title:'oper',width:100,align:'center',  
            formatter:function(value,rec){  
                var s = '<a href="#" mce_href="#" onclick="clearCountData('+ rec.id + ')">clear</a> ';  
                return s;  
            }  
          }  
		] ],
	});
}


function getMochaScriptList()
{
	$.ajax({
		url : "http://172.16.26.128:9999/mocha_manager/listMochaServlet",
		type : "post",
		dataType : "json",
		data : {
			"type" : "js",
			"path":"//services//scripts//performad//report"
		},
		success : mochaList
	});
}

function mochaList(json) {
	resetmochaTabel(json);
}


function resetmochaTabel(data) {
	$("#dg").datagrid({
		data : data,
		columns : [ [ {
			field : "id",
			title : "id"
		}, {
			field : "name",
			title : "name"
		}, {
			field : "path",
			title : "path"
		}  
		] ],
	});
}

function bindUi()
{
	$('#dg').datagrid({
		url : "http://172.16.26.128:9999/mocha_manager/listMochaServlet",
		type : "post",
		dataType : "json",
		data : {
			"type" : "js",
			"path":"//services//scripts//performad//report"
		},
		success : function(data)
		{
			columns:[[
				        {field:'id',title:'id',width:100},
				        {field:'name',title:'name',width:100},
				        {field:'path',title:'path',width:100,align:'right'}
				    ]]
		}
	    
	});
}


function clearCountData(id)
{
	$.ajax({
		url : "../clearCountData",
		type : "post",
		dataType : "json",
		data : {
			"id" : id
		},
		
	});
	
	self.location.reload();
}

//---------------------------
function getMonitorReportByPage()
{
	$.ajax({
		url : "../getMonitorReportByPage",
		type : "post",
		dataType : "json",
		data : {
			"page" : 0
		},
		success : monitorListsByPage,
	});
}

function monitorListsByPage(json) {
	resetMonitorTabel(json.reportlist);
}

function resetMonitorTabel(data) {
	$("#monitor_dg").datagrid({
		data : data,
		columns : [ [ {
			field : "adspaceid",
			title : "广告位ID"
		}, {
			field : "campid",
			title : "活动ID"
		}, {
			field : "convid",
			title : "推广ID"
		},{
			field : "req",
			title : "请求数"
		},{
			field : "imp",
			title : "展示数"
		},{
			field : "clk",
			title : "点击数"
		},{
			field : "act",
			title : "激活数"
		},{
			field : "remark",
			title : "备注"
		},{
			field : "author",
			title : "操作人"
		},{
			field : "createtime",
			title : "开始时间"
		},
		] ]
	});
}


function getDateReport()
{
	$.ajax({
		url : "../getDateReport",
		type : "post",
		dataType : "json",
		success : dateLists,
	});
}

function dateLists(json) {
	resetDateTabel(json.dateReportlist);
}

function resetDateTabel(data) {
	$("#date_dg").datagrid({
		data : data,
		columns : [ [ {
			field : "adspaceid",
			title : "广告位ID"
		}, {
			field : "campid",
			title : "活动ID"
		}, {
			field : "convid",
			title : "CONV ID"
		},{
			field : "req",
			title : "请求数"
		},{
			field : "imp",
			title : "展示数"
		},{
			field : "clk",
			title : "点击数"
		},{
			field : "act",
			title : "激活数"
		},{
			field : "reportdate",
			title : "日期"
		},
		] ]
	});
}