package com.param.action;

import java.io.FileWriter;
import java.util.List;

import org.json.JSONArray;

import com.base.BaseAction;
import com.param.domain.Param;
import com.param.service.IParamService;

public class UrlSettingAction extends BaseAction {
	private IParamService paramService;
	private List<Param> urlLists;
	private List<Param> systemLists;
	private List<Param> typeLists;
	
	public String getUrlList()
	{
		String result = "";
		String sysid = request.getParameter("sysid");
		String typeName = request.getParameter("typeName");
		if(sysid!=null)
		{
			try {
				//jsonTest();
				Param param = new Param();
				param.setSysid(sysid);
				param.setTypeName(typeName);
				urlLists = paramService.getUrlListByTypeId(param);
				session.setAttribute("urlLists", urlLists);
				result = "success";
			} catch (Exception e) {
				e.printStackTrace();
				result = "error";
			}
		}
		else
		{
			result = "error";
		}
		
		
		return result;
	}
	
	public String getSysList()
	{
		String result = "";
		String sys_resid = request.getParameter("sys_resid");
		if(sys_resid!=null)
		{
			int resid = Integer.parseInt(sys_resid);
			try {
				//jsonTest();
				systemLists = paramService.getSystem(resid);
				session.setAttribute("systemLists", systemLists);
				result = "success";
			} catch (Exception e) {
				e.printStackTrace();
				result = "error";
			}
		}
		else
		{
			result = "error";
		}
		
		return result;
	}
	
	public String getTypeList()
	{
		String result = "";
		String sys_resid = request.getParameter("sys_resid");
		if(sys_resid!=null)
		{
			try {
				//jsonTest();
				typeLists = paramService.getTypeName(sys_resid);
				session.setAttribute("typeLists", typeLists);
				result = "success";
			} catch (Exception e) {
				e.printStackTrace();
				result = "error";
			}
		}
		else
		{
			result = "error";
		}
		
		return result;
	}
	
	

	public List<Param> getTypeLists() {
		return typeLists;
	}

	public void setTypeLists(List<Param> typeLists) {
		this.typeLists = typeLists;
	}

	public List<Param> getSystemLists() {
		return systemLists;
	}

	public void setSystemLists(List<Param> systemLists) {
		this.systemLists = systemLists;
	}

	public IParamService getParamService() {
		return paramService;
	}

	public void setParamService(IParamService paramService) {
		this.paramService = paramService;
	}

	public List<Param> getUrlLists() {
		return urlLists;
	}

	public void setUrlLists(List<Param> urlLists) {
		this.urlLists = urlLists;
	}

}
