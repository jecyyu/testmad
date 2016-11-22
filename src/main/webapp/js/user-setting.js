function getBroadList() {
	$.ajax({
		url : "../getSizeList",
		type : "post",
		dataType : "json",
		success : broadLists
	});
}

function getPicSize() {
	$.ajax({
		url : "../getPicSizeAll",
		type : "get",
		dataType : "json",
		// data : {osv: $("[name='sel_osv']").val()},
		success : alert("生成成功！")
	});
}

function broadLists(json) {
	broadTabel(json.picsizelist);
}

function broadTabel(data) {
	$("#dg").datagrid({
		data : data,
		columns : [ [ {
			field : "id",
			title : "id"
		},{
			field : "name",
			title : "size"
		}, {
			field : "width",
			title : "width"
		}, {
			field : "height",
			title : "height"
		},
		] ]
	});
}

function insertSize() {
	var sizename = $("#txt_sizename").val();
	var width = $("#txt_width").val();
	var height = $("#txt_height").val();
	$.ajax({
		url : "../insertPicSize",
		type : "post",
		dataType : "json",
		data : {
			sizename : sizename,
			width : width,
			height : height
		},
		success : function(data) {
			alert("创建成功！");
			$('#dlg').dialog('close');
		}
	});
}

function deleteSize() {
	var id = $("#txt_sizename").val();
	$.ajax({
		url : "../deletePicSize",
		type : "post",
		dataType : "json",
		data : {
			id : id
		},
		success : function(data) {
			alert("删除成功！");
			$('#dlg').dialog('close');
		}
	});
}


/*用户设置*/
function getUserList() {
	$.ajax({
		url : "getUserSettingPage",
		type : "post",
		dataType : "json",
		success : userLists,
	});
}

function userLists(json) {
	resetTabel(json.list_user);
}

function resetTabel(data) {
	$("#dg").datagrid({
		data : data,
		columns : [ [ {
			field : "username",
			title : "用户名"
		}, {
			field : "statusText",
			title : "状态"
		}, {
			field : "role",
			title : "权限"
		}, {
			field : "createtime",
			title : "创建时间"
		},
		/*
		 * {field: "resid", title: "操作", formatter: function(value, row, index) {
		 * 
		 * var a = $("<a>点击</a>"); a.attr("href", "http://www.baidu.com" +
		 * "?id="+ row.id); return a; }}
		 */
		] ]
	});
}

function insertUser() {

	var passwd = $("#txt_password").val();
	var confpasswd = $("#txt_confPassword").val();
	if (passwd == confpasswd) {
		$.ajax({
			url : "insertUser",
			type : "post",
			dataType : "json",
			data : {
				username : $("[id='txt_username']").val(),
				password : $("[id='txt_password']").val(),
				roleid : $("#sel_role").combobox('getValue')
			},
			success : function(data) {
				//alert("创建成功！");
				$('#dlg').dialog('close');
			}
		});
	} else {
		alert("两次密码不一致！");
	}
}


/*用户设置*/
function getUrlList() {
	$.ajax({
		url : "getUrlAction",
		type : "post",
		dataType : "json",
	});
}

/*function urlLists(json) {
	resetUrlTabel(json.urlLists);
}*/

/*function resetUrlTabel(data) {
	$("#dg").datagrid({
		data : data,
		
		columns : [ [ 
		              {field : "url",title : "url"}, 
		              {field : "url_system",title : "所属系统"}, 
		              {field : "createtime",title : "创建时间"},
		          
		              ] ]
	});
}*/