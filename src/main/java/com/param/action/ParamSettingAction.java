package com.param.action;

import java.io.FileWriter;
import java.util.List;

import org.json.JSONArray;

import com.base.BaseAction;
import com.param.domain.Ip;
import com.param.domain.Param;
import com.param.service.IParamService;

public class ParamSettingAction extends BaseAction {
	
	private IParamService paramService;
	private List<Param> picsizeCombo;
	private List<Param> picsizelist;
	private List<Param> ipList;
	private List<Param> chList;

	public String getPicSizeAction()
	{
		try {
			//jsonTest();
			picsizeCombo = paramService.getPicSizeAll();
			
			JSONArray json = new JSONArray();  
	        json.put(picsizeCombo); 
	        try {  
	        	String courseFile = request.getSession().getServletContext().getRealPath("/");
	        	FileWriter writer = new FileWriter(courseFile+"sizelist.json");
	        	String str_json = json.toString();
	        	str_json = str_json.substring(1, str_json.length()-1);
	           writer.write(str_json);
	            writer.flush();
	            writer.close();
	         
	        } catch (Exception e) {  
	            e.printStackTrace();  
	  
	        }  
			//session.setAttribute("picsizeCombo", picsizeCombo);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}

	

	public String insertPicSize()
	{
		String result = "";
		try{
			String sizename = request.getParameter("sizename");
			String width = request.getParameter("width");
			String height = request.getParameter("height");
			Param param = new Param();
			param.setName(sizename);
			param.setWidth(width);
			param.setHeight(height);
			param.setType("jpg,png");
			paramService.insertPicSize(param);
			result = "success";
		}
		catch(Exception e){result = "error";}
		return result;
	}
	
	public String getPicSizeList()
	{
		String result = "";
		try {
			//jsonTest();
			picsizelist = paramService.getPicSizeAll();
			session.setAttribute("picsizelist", picsizelist);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return "success";
	}
	
	public String getCityIpList()
	{
		String result = "";
		try {
			//jsonTest();
			ipList = paramService.getIpAll();
			session.setAttribute("iplist", ipList);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return "success";
	}
	
	public String getChannelList()
	{
		String result = "";
		try {
			//jsonTest();
			chList = paramService.getMedia();
			session.setAttribute("chlist", chList);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return "success";
	}
	
	public String deletePicSize()
	{
		try {
			int id = Integer.parseInt(request.getParameter("id"));
			paramService.deletePicSize(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}
	
	
	
	public List<Param> getPicsizeCombo() {
		return picsizeCombo;
	}



	public void setPicsizeCombo(List<Param> picsizeCombo) {
		this.picsizeCombo = picsizeCombo;
	}
	
	public List<Param> getIpList() {
		return ipList;
	}

	public void setIpList(List<Param> ipList) {
		this.ipList = ipList;
	}


	public List<Param> getChList() {
		return chList;
	}

	public void setChList(List<Param> chList) {
		this.chList = chList;
	}

	
	

	public IParamService getParamService() {
		return paramService;
	}

	public void setParamService(IParamService paramService) {
		this.paramService = paramService;
	}
	

	public List<Param> getPicsizelist() {
		return picsizelist;
	}

	public void setPicsizelist(List<Param> picsizelist) {
		this.picsizelist = picsizelist;
	}

}
