var sel_numb,interList;

function execScript(){
	var param = document.getElementById("txt_param").value;
	var name = $("#sel_interface").find("option:selected").text();
	var platform = $("#sel_system").find("option:selected").val();
	var path = $("#sel_path").find("option:selected").text();
	var report_name = document.getElementById("txt_reportName").value;
	$.ajax({
		url : "../execShell",
		type : "post",
		dataType : "json",
		data : {
			name : name,
			param : param,
			platform : platform,
			path : path,
			report_name : report_name,
		},
		success : function(){
			alert("success!");
		}
	});
}



function getCreateInter(){
	document.getElementById("sel_system").innerHTML = "";
	$.ajax({
		url : "../getSystemAction",
		type : "post",
		dataType : "json",
		data : "sys_resid=-1",
		
		success : function(sys){
			var sysList = (sys.systemLists);
			// 遍历json对象
			var i;
			for (i = 0; i < sysList.length; i++) {
				var syss = sysList[i];
				var option = document.createElement("option");
				// 创建一个option
				document.getElementById("sel_system").appendChild(option);
				option.value = syss.resid;
				option.text = syss.system;
				if(i==0)
				{
					document.getElementById(control).innerHTML = "";
					$.ajax({
						url : "../getPathBySysId",
						type : "post",
						dataType : "json",
						data : {
							sysid : syss.resid,
						},
						
						success : function(path){
							var pathList = (path.pathlist);
							// 遍历json对象
							var i;
							for (i = 0; i < pathList.length; i++) {
								var paths = pathList[i];
								var option = document.createElement("option");
								// 创建一个option
								document.getElementById(control).appendChild(option);
								option.value = paths.resid;
								option.text = paths.path;
							}
						}
					});
					
				}
			}
		}
	});
	
	
	
	
	
}

function getEditInter(){
	document.getElementById("sel_system").innerHTML = "";
	$.ajax({
		url : "../getSystemAction",
		type : "post",
		dataType : "json",
		data : "sys_resid=-1",
		
		success : function(sys){
			var sysList = (sys.systemLists);
			// 遍历json对象
			var i;
			for (i = 0; i < sysList.length; i++) {
				var syss = sysList[i];
				var option = document.createElement("option");
				// 创建一个option
				document.getElementById("sel_system").appendChild(option);
				option.value = syss.resid;
				option.text = syss.system;
				if(i==0)
				{
					document.getElementById(control).innerHTML = "";
					$.ajax({
						url : "../getPathBySysId",
						type : "post",
						dataType : "json",
						data : {
							sysid : syss.resid,
						},
						
						success : function(path){
							var pathList = (path.pathlist);
							// 遍历json对象
							var i;
							for (i = 0; i < pathList.length; i++) {
								var paths = pathList[i];
								var option = document.createElement("option");
								// 创建一个option
								document.getElementById(control).appendChild(option);
								option.value = paths.resid;
								option.text = paths.path;
								if(i==0)
								{
									var getUrl = document.location.href;
									var id = getUrl.split('id=')[1];
									$.ajax({
										url : "../getInterfaceById",
										type : "get",
										dataType : "json",
										data : "id="+ id,
										success : function(json){
											var editList = json.getInterList;
											$("#hid_id").val(editList[0].id);
											$("#sel_system").val(editList[0].platform_id);
											$("#sel_path").val(editList[0].pathid);
											$("#txt_inter_name").attr("value",editList[0].interfaces) ; 
											CKEDITOR.instances.area_desc.setData(editList[0].remark);
											//alert(editList[0].id);
											
										}
									});
									
								}
							}
						}
					});
					
				}
			}
		}
	});
	
	
	
	
	
}


function getSystem() {
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
		if(i==0)
		{
			getInterPath(hall.resid);
			
		}
	}
}


function getInterPath(sysid) {
	// $("#sel_url").children().eq(0).siblings().remove();
	document.getElementById(control).innerHTML = "";
	$.ajax({
		url : "../getPathBySysId",
		type : "post",
		dataType : "json",
		data : {
			sysid : sysid,
		},
		success : bindInterPathList
	});
}

function bindInterPathList(json) {

	var hallList = (json.pathlist);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(control).appendChild(option);
		option.value = hall.resid;
		option.text = hall.path;
		if(i==0)
		{
			getInterface();
			
		}
	}
}


function getInterUrl(sysid) {
	// $("#sel_url").children().eq(0).siblings().remove();
	document.getElementById(control).innerHTML = "";
	$.ajax({
		url : "../getUrlAction",
		type : "post",
		dataType : "json",
		data : {
			sysid : sysid,
			typeName : "interface"
		},
		success : bindInterUrlList
	});
}

function bindInterUrlList(json) {

	var hallList = (json.urlLists);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById(control).appendChild(option);
		option.value = hall.typeid;
		option.text = hall.url;
		if(i==0)
		{
			getInterface();
			
		}
	}
}

//获取接口
function getInterface(pid) {
	// $("#sel_url").children().eq(0).siblings().remove();
	//clearTables();
	var pid = $("#sel_path").find("option:selected").val();
	document.getElementById("sel_interface").innerHTML = "";
	//var typeid = $("#sel_url").find("option:selected").val();
	$.ajax({
		url : "../getInterface",
		type : "post",
		dataType : "json",
		data : "pathid=" + pid,
		success : bindInterfaceList
	});
}

function bindInterfaceList(json) {

	var hallList = (json.interlist);
	interList = hallList;
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_interface").appendChild(option);
		option.value = hall.id;
		option.text = hall.interfaces;
		if(i==0)
		{
			getInterfaceRemark();
		}
	}
}


//获取接口
function getInterfaceRemark() {
	// $("#sel_url").children().eq(0).siblings().remove();
	var InterIndex = document.getElementById("sel_interface").selectedIndex;
	document.getElementById("div_remark").innerHTML=interList[InterIndex].remark;
	
	
}


function getRemarkInfo(numb)
{
	var spanId= "span_remark_"+numb;
	var selId="#sel_param_"+numb;
	document.getElementById(spanId).innerHTML=$(selId).val();
}


//获取接口参数绑定到select控件上
function getInterParam(numb) {
	// $("#sel_url").children().eq(0).siblings().remove();
	var typeid = $("#sel_url").find("option:selected").val();
	sel_numb= numb;
	document.getElementById("sel_param_"+sel_numb).innerHTML = "";
	$.ajax({
		url : "../getInterfaceParam",
		type : "post",
		dataType : "json",
		data:"typeid="+ typeid,
		success : bindInterParamList
	});
}

function bindInterParamList(json) {

	var hallList = (json.paramlist);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_param_"+sel_numb).appendChild(option);
		option.value = hall.remark;
		option.text = hall.param;
		
	}
	getRemarkInfo(sel_numb);
}




function getTypeName()
{
	document.getElementById("sel_type").innerHTML = "";
	var sys_id = $("#sel_system").find("option:selected").val();
	$.ajax({
		url : "../../getTypeListAction",
		type : "post",
		dataType : "json",
		data : "sys_resid="+ sys_id,
		success : bindTypeNameList
	});
}

function bindTypeNameList(json) {

	var hallList = (json.typeLists);
	// 遍历json对象
	var i;
	for (i = 0; i < hallList.length; i++) {
		var hall = hallList[i];
		var option = document.createElement("option");
		// 创建一个option
		document.getElementById("sel_type").appendChild(option);
		option.value = hall.resid;
		option.text = hall.typeName;
		/*if(i==0)
		{
			getInterUrl(hall.resid);
			
		}*/
	}
}


//获取接口List
function getInterfaceSetting() {
	// $("#sel_url").children().eq(0).siblings().remove();
	$.ajax({
		url : "../getInterface",
		type : "post",
		dataType : "json"
	});
}


//获取接口参数list
function getInterParamSetting() {
	$.ajax({
		url : "../getInterfaceParam",
		type : "post",
		dataType : "json"
		//success : alert("success")
	});
}


//生成Url
function genInterUrl()
{
	var url = "";
	var param = "";
	var paramList = "";
	var sel_domain = $("#sel_url").find("option:selected").text();
	var sel_inter = $("#sel_interface").find("option:selected").text();
	var sel_length = document.getElementById("table1").rows.length;
	url = sel_domain+"/"+sel_inter;
	for(var i=0;i<=sel_length-1;i++)
	{
		var chk_status = document.getElementById("chk_param_"+i).checked
		if(chk_status)
		{
			param=$("#sel_param_"+i).find("option:selected").text()+"="+$("#txt_val_"+i).val();
			if(paramList!="")
			{
				paramList+="&"+param;
			}
			else
			{
				paramList="?"+param;
			}
			
		}
	}
	
	url+=paramList;
	
	document.getElementById("area_genUrl").value=url;
}

//发送url

function sendInter() {
	var url = $("#area_genUrl").val();
	var imgUrl = url;
	var chkHttp = document.getElementById("chk_httpMethod").checked;
	if(chkHttp)
		{
			sendPostInter();
		}
	else
		{
	
	MaskUtil.mask("发送中...");
	if (url != "") {
			var arryurl = url.split("?");
	
			var url = arryurl[0];
			var param = arryurl[1] || "1=1";
			
			$.ajax({
				async : true,
				url : url,
				type : 'GET',
				dataType : 'json',
				data : param,
				timeout : 5000,
			}
			
			).complete(
					
					function(xhr) {
						try {
						
						returncode = xhr.status;
						responseResult = xhr.responseText;
						
						var formatJson= "";
						if(returncode=="200")
						{
							if(responseResult.match("GIF")=="GIF")
							{
								$("#img_response").attr("src", imgUrl);
							}
							else
							{
								formatJson= format(responseResult);
								$("#img_response").attr("src", imgUrl);
							}
							
						}
						else
						{
							formatJson= responseResult;
						}
						
						document.getElementById("area_response").value="HTTP Code:"+returncode+"\r\nResponse Text: \r\n"+formatJson;
						} catch (e) {
							alert("发送出现错误：" + e);
							end();
							// throw new Error(e);
						}
						MaskUtil.unmask();
						
					}
					/*function(json) {
						console.log(json);
					}*/
			)
			;
		}
		}
	}


function sendPostInter()
{
	var _url = $("#area_genUrl").val();
	var  url =_url.split('?')[0];
	var param = _url.split('?')[1];
	
	 $.ajax({
         //提交数据的类型 POST GET
         type:"POST",
         //提交的网址
         url:url ,

         //提交的数据
         data:param,
         
         //data:{client_id:"13e0125f4b4a74e7c1fa67714640e04e",client_secret:"a8495f23060aab08ac10f568dbd11fbe",grant_type:"password",username:"testBeta",password:"beta123"},
         //返回数据的格式
         datatype: "html",//"xml", "html", "script", "json", "jsonp", "text".
         //在请求之前调用的函数
         beforeSend:function(){$("#msg").html("logining");},
         //成功返回之后调用的函数             
         success:function(data){
        $("#msg").html(decodeURI(data));            
         }   ,
         //调用执行后调用的函数
         complete: function(XMLHttpRequest, textStatus){
        	 statusTxt = XMLHttpRequest.status+" "+XMLHttpRequest.statusText;
        	 responTxt = XMLHttpRequest.responseText;
            document.getElementById("area_response").value="HTTP Code:"+statusTxt +"\r\nResponse Text: \r\n"+responTxt;

         },
         //调用出错执行的函数
         error: function(){
             //请求出错处理
         }         
      });
}

function GetPostXml(xhr) {
	var aa = xhr.responseText;
}

function clearTables(){
	var sel_length = document.getElementById("table1").rows.length;
	var i=1;
	for(i;i<=sel_length;i++)
	{
		document.getElementById('table1').deleteRow(0);
    	$("#deleteTable").attr("disabled", true);
	}
    
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


function format(txt,compress)/*是否为压缩模式*/
{/* 格式化JSON源码(对象转换为JSON文本) */  
    var indentChar = '    ';   
    if(/^\s*$/.test(txt)){   
        alert('数据为空,无法格式化! ');   
        return;   
    }   
    try{var data=eval('('+txt+')');}   
    catch(e){   
        alert('数据源语法错误,格式化失败! 错误信息: '+e.description,'err');   
        return;   
    };   
    var draw=[],last=false,This=this,line=compress?'':'\n',nodeCount=0,maxDepth=0;   
       
    var notify=function(name,value,isLast,indent/*缩进*/,formObj){   
        nodeCount++;/*节点计数*/  
        for (var i=0,tab='';i<indent;i++ )tab+=indentChar;/* 缩进HTML */  
        tab=compress?'':tab;/*压缩模式忽略缩进*/  
        maxDepth=++indent;/*缩进递增并记录*/  
        if(value&&value.constructor==Array){/*处理数组*/  
            draw.push(tab+(formObj?('"'+name+'":'):'')+'['+line);/*缩进'[' 然后换行*/  
            for (var i=0;i<value.length;i++)   
                notify(i,value[i],i==value.length-1,indent,false);   
            draw.push(tab+']'+(isLast?line:(','+line)));/*缩进']'换行,若非尾元素则添加逗号*/  
        }else   if(value&&typeof value=='object'){/*处理对象*/  
                draw.push(tab+(formObj?('"'+name+'":'):'')+'{'+line);/*缩进'{' 然后换行*/  
                var len=0,i=0;   
                for(var key in value)len++;   
                for(var key in value)notify(key,value[key],++i==len,indent,true);   
                draw.push(tab+'}'+(isLast?line:(','+line)));/*缩进'}'换行,若非尾元素则添加逗号*/  
            }else{   
                    if(typeof value=='string')value='"'+value+'"';   
                    draw.push(tab+(formObj?('"'+name+'":'):'')+value+(isLast?'':',')+line);   
            };   
    };   
    var isLast=true,indent=0;   
    notify('',data,isLast,indent,false);   
    return draw.join('');   
}  