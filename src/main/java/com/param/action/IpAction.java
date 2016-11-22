package com.param.action;

import java.util.List;

import com.base.BaseAction;
import com.param.domain.Ip;
import com.param.service.IParamService;

public class IpAction  extends BaseAction {
	private IParamService paramService;
	private List<Ip> firstCityList;
	private List<Ip> secondCityList;
	private List<Ip> cityIpList;
	
	

	public String getFirstCity()
	{
		String result = "";
		try {
			//jsonTest();
			firstCityList = paramService.getFirstCity();
			session.setAttribute("firstCityList", firstCityList);
			result = "success";
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	public String getSecondCity()
	{
		String result = "";
		try {
			String str_firstId = request.getParameter("firstId");
			int firstId = 0;
			if(str_firstId==null)
			{
				result = "error";
			}
			else
			{
				firstId = Integer.parseInt(str_firstId);
				secondCityList = paramService.getSecondCity(firstId);
				session.setAttribute("secondCityList", secondCityList);
				result = "success";
			}
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	public String getCityIp()
	{
		String result = "";
		try {
			int cityId = 0;
			String str_cityId = request.getParameter("cityId");
			
			if(str_cityId==null)
			{
				result = "error";
			}
			else
			{
				cityId = Integer.parseInt(str_cityId);
				cityIpList = paramService.getCityIp(cityId);
				session.setAttribute("cityIpList", cityIpList);
				result = "success";
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			result = "error";
		}
		return result;
	}
	
	
	public IParamService getParamService() {
		return paramService;
	}

	public void setParamService(IParamService paramService) {
		this.paramService = paramService;
	}

	public List<Ip> getFirstCityList() {
		return firstCityList;
	}

	public void setFirstCityList(List<Ip> firstCityList) {
		this.firstCityList = firstCityList;
	}

	public List<Ip> getSecondCityList() {
		return secondCityList;
	}

	public void setSecondCityList(List<Ip> secondCityList) {
		this.secondCityList = secondCityList;
	}

	public List<Ip> getCityIpList() {
		return cityIpList;
	}

	public void setCityIpList(List<Ip> cityIpList) {
		this.cityIpList = cityIpList;
	}
}
