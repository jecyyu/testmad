package com.param.action;

import java.util.List;
import org.json.JSONArray;
import com.base.BaseAction;
import com.param.domain.Param;
import com.param.service.IParamService;

/**
 * @author JecyLiu
 *
 */
public class IndexLoadAction extends BaseAction {
	
	private static final long serialVersionUID = 1L;
	private IParamService paramService;
	private List<Param> oslist;
	private List<Param> osvlist;
	private List<Param> ualist;
	private List<Param> medialist;
	private List<Param> urllist;
	private List<Param> picsizelist;
	private List<Param> rowslist;

	public List<Param> getRowslist() {
		return rowslist;
	}

	public void setRowslist(List<Param> rowslist) {
		this.rowslist = rowslist;
	}

	public String indexloadAction()
	{
		String result="";
		
		try {
			oslist = paramService.getOS();
			medialist=paramService.getMedia();
			
			session.setAttribute("mediaList", medialist);
			session.setAttribute("osList", oslist);
			result="success";
		} catch (Exception e) {
			e.printStackTrace();
			result="fail";
		}
		return result;
	}
	
	public String getMediaAction()
	{
		try {
			medialist=paramService.getMedia();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "success";
	}
	
	public String getOSAction()
	{
		try {
			oslist = paramService.getOS();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "success";
	}
	
	public String getOSVAction()
	{
		String os=request.getParameter("os");
		try {
			osvlist = paramService.getOSV(os);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "success";
	}
	
	public String getUaAction()
	{
		String osv_ua=request.getParameter("osv");
		try {
			ualist = paramService.getUA(osv_ua);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}
	
/*	public String getUrlAction()
	{
		String url_sys=request.getParameter("sys");
		try {
			urllist = paramService.getUrl(url_sys);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "success";
	}
	
	public String getUrlListJson()
	{
		String result = "";
		try {
			rowslist = paramService.getUrl("SmartMad");
			//JSONArray jsonArray = JSONArray.fromObject(urllist);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		result = "success";
		return result;
	}*/
	
	public String getBroadTestAction()
	{
		String result="";
		
		try {
			oslist = paramService.getOS();
			session.setAttribute("osList", oslist);
			result="success";
		} catch (Exception e) {
			e.printStackTrace();
			result="fail";
		}
		return result;
	}
	

	public IParamService getParamService() {
		return paramService;
	}

	public void setParamService(IParamService paramService) {
		this.paramService = paramService;
	}

	public List<Param> getOslist() {
		return oslist;
	}

	public void setOslist(List<Param> oslist) {
		this.oslist = oslist;
	}

	public List<Param> getOsvlist() {
		return osvlist;
	}

	public void setOsvlist(List<Param> osvlist) {
		this.osvlist = osvlist;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public List<Param> getUalist() {
		return ualist;
	}

	public void setUalist(List<Param> ualist) {
		this.ualist = ualist;
	}
	
	public List<Param> getMedialist() {
		return medialist;
	}

	public void setMedialist(List<Param> medialist) {
		this.medialist = medialist;
	}
	
	public List<Param> getUrllist() {
		return urllist;
	}

	public void setUrllist(List<Param> urllist) {
		this.urllist = urllist;
	}
	
	public List<Param> getPicsizelist() {
		return picsizelist;
	}

	public void setPicsizelist(List<Param> picsizelist) {
		this.picsizelist = picsizelist;
	}

}
