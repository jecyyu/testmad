function interNameSetting(oper,id){
	switch(oper)
	{
		case 0://创建
			
			;break;
		case 1://修改
			
			;break;
		case 3://删除
			
			;break;
		default:;break;
	}
}

function getInterManagerParam(){
	getInterParamSystem();
}


function getInterParamSystem() {
	// $("#sel_url").children().eq(0).siblings().remove();
	document.getElementById("sel_system").innerHTML = "";
	$.ajax({
		url : "../getSystemAction",
		type : "post",
		dataType : "json",
		data : "sys_resid=-1",
		success : bindSystemList
	});
}

function bindSystemList(json) {

	var hallList = (json.systemLists);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_system").appendChild(option);
		option.value = hall.resid;
		option.text = hall.system;
	}
}