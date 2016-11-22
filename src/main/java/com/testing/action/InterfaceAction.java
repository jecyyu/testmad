package com.testing.action;

import com.base.BaseAction;

import java.util.List;

//import com.sun.tools.javac.util.Convert;
import com.testing.service.IInterService;
import com.testing.domain.Interface;

public class InterfaceAction extends BaseAction{
	
	private IInterService interService;
	private List<Interface> paramlist;
	private List<Interface> interlist;
	private List<Interface> pathlist;
	private List<Interface> getInterList;
	
	
	public String execShell()
	{
		String result = "";
		String script_name = request.getParameter("name");
		String script_param = request.getParameter("param");
		String script_platform = request.getParameter("platform");
		String script_path = request.getParameter("path");
		String report_name = request.getParameter("report_name");
		String param = script_platform + " " + script_path + " " + script_name + " " + script_param + " " + report_name;
		try {
			//interlist = interService.getInterface(typeid);
			//session.setAttribute("interlist", interlist);
			execShell("scriptExec.sh",param);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}		
	
	public String delInterface()
	{
		String result = "";
		int id=Integer.parseInt(request.getParameter("id"));
		try {
			Interface inter = new Interface();
			inter.setId(id);
			interService.delInterface(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	

	//获取接口
	public String getInterface()
	{
		String result = "";
		String pathid = request.getParameter("pathid");
		try {
			interlist = interService.getInterface(pathid);
			session.setAttribute("interlist", interlist);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	//获取接口
	public String getPathBySysId()
	{
		String result = "";
		String sysid = request.getParameter("sysid");
		try {
			pathlist = interService.getPathBySysId(sysid);
			session.setAttribute("pathlist", pathlist);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	


	//添加接口名称
	public String insertInterface()
	{
		String result = "";
		String interfaces=request.getParameter("txt_inter_name");
		int pathid=Integer.parseInt(request.getParameter("sel_path"));
		String remark = request.getParameter("area_desc");
		int plat_id = Integer.parseInt(request.getParameter("sel_system"));
		try {
			Interface inter = new Interface();
			inter.setInterfaces(interfaces);
			inter.setRemark(remark);
			inter.setPlatform_id(plat_id);
			inter.setPathid(pathid);
			interService.insertInterface(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	//修改接口参数
	public String updateInterface()
	{
		String result = "";
		int id=Integer.parseInt(request.getParameter("hid_id"));
		String interfaces=request.getParameter("txt_inter_name");
		int pathid=Integer.parseInt(request.getParameter("sel_path"));
		String remark = request.getParameter("area_desc");
		int plat_id = Integer.parseInt(request.getParameter("sel_system"));
		try {
			Interface inter = new Interface();
			inter.setId(id);
			inter.setInterfaces(interfaces);
			inter.setRemark(remark);
			inter.setPlatform_id(plat_id);
			inter.setPathid(pathid);
			interService.updateInterface(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	public String getInterfaceById()
	{
		String result = "";
		String id=request.getParameter("id");
		try {
			getInterList = interService.getInterfaceById(id);
			session.setAttribute("getInterList", getInterList);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}

	//删除接口参数
	public String deleteInterface()
	{
		String result = "";
		int int_id=0;
		String id=request.getParameter("id");
		int_id = Integer.parseInt(id);
		String interfaces=request.getParameter("interface");
		String remark=request.getParameter("remark");
		try {
			Interface inter = new Interface();
			inter.setId(int_id);
			inter.setInterfaces(interfaces);
			inter.setRemark(remark);
			inter.setStatus(1);
			interService.updateInterface(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	//添加接口参数
	/*public String insertInterParam()
	{
		String result = "";
		String param=request.getParameter("param");
		String remark=request.getParameter("remark");
		try {
			Interface inter = new Interface();
			inter.setParam(param);
			inter.setRemark(remark);
			interService.insertInterParam(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}*/
	
	//修改接口参数
	/*public String updateInterParam()
	{
		String result = "";
		int int_id=0;
		String id=request.getParameter("id");
		int_id = Integer.parseInt(id);
		String param=request.getParameter("param");
		String remark=request.getParameter("remark");
		try {
			Interface inter = new Interface();
			inter.setId(int_id);
			inter.setParam(param);
			inter.setRemark(remark);
			interService.updateInterParam(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}*/
	
	//删除接口参数
	/*public String deleteInterParam()
	{
		String result = "";
		int int_id=0;
		String id=request.getParameter("id");
		int_id = Integer.parseInt(id);
		String param=request.getParameter("param");
		String remark=request.getParameter("remark");
		try {
			Interface inter = new Interface();
			inter.setId(int_id);
			inter.setParam(param);
			inter.setRemark(remark);
			inter.setStatus(1);
			interService.updateInterParam(inter);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}*/
	
	//获取接口参数
		/*public String getInterParam()
		{
			String result = "";
			String typeid = request.getParameter("typeid");	
			try {
				paramlist = interService.getParam(typeid);
				session.setAttribute("paramlist", paramlist);
				result = "success";
			} catch (Exception e) {
				e.printStackTrace();
				result = "error";
			}
			return result;
		}*/
	
	public List<Interface> getGetInterList() {
		return getInterList;
	}


	public void setGetInterList(List<Interface> getInterList) {
		this.getInterList = getInterList;
	}
	
	public List<Interface> getPathlist() {
		return pathlist;
	}


	public void setPathlist(List<Interface> pathlist) {
		this.pathlist = pathlist;
	}

	public IInterService getInterService() {
		return interService;
	}

	public void setInterService(IInterService interService) {
		this.interService = interService;
	}

	public List<Interface> getParamlist() {
		return paramlist;
	}

	public void setParamlist(List<Interface> paramlist) {
		this.paramlist = paramlist;
	}
	
	public List<Interface> getInterlist() {
		return interlist;
	}

	public void setInterlist(List<Interface> interlist) {
		this.interlist = interlist;
	}
}
