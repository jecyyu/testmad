package com.setting.action;

import java.util.List;

import com.base.BaseAction;
import com.setting.domain.Version;
import com.setting.service.IVersionService;

public class VersionAction extends BaseAction {
	
	private IVersionService verService;
	private List<Version> vers;
	private String  str_json;
	
	public String getlastVersion()
	{
		String result = "";
		try
		{
			vers = verService.getlastVersion();
			str_json = "{\"version\":\""+vers.get(0).getVersion()+"\",\"description\":\""+vers.get(0).getDescription()+"\",\"createtime\":\""+vers.get(0).getCreatetime()+"\"}";
			result="success";
		}
		catch(Exception ex)
		{
			System.out.println(ex.toString());
			result="error";
		}

		return result;
	}
	
	public String addVersion()
	{
		String result = "";
		try{
			String version = request.getParameter("txt_version");
			String description = request.getParameter("txt_description");

			Version ver = new Version();
			ver.setVersion(version);
			ver.setDescription(description);
			verService.addVersion(ver);
			result = "success";
		}
		catch(Exception e){result = "error";}
		return result;
	}


	public String getStr_json() {
		return str_json;
	}


	public void setStr_json(String str_json) {
		this.str_json = str_json;
	}


	public List<Version> getVers() {
		return vers;
	}


	public void setVers(List<Version> vers) {
		this.vers = vers;
	}


	public IVersionService getVerService() {
		return verService;
	}

	public void setVerService(IVersionService verService) {
		this.verService = verService;
	}

}
