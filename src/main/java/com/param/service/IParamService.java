package com.param.service;

import java.util.List;

import com.param.domain.Ip;
import com.param.domain.Param;



/**
 * @author JecyLiu
 *
 */
public interface IParamService {
	
	List<Param> getOS();
	List<Param> getOSV(String os);
	List<Param> getUA(String osv);
	List<Param> getMedia();
	List<Param> getPicSizeAll();
	List<Param> getIpAll();
	List<Param> getSystem(int resid);
	List<Param> getTypeId(Param param);
	List<Param> getTypeName(String sysid);
	List<Param> getUrlListByTypeId(Param param);
	void insertPicSize(Param param);
	void deletePicSize(int id);
	List<Param> getUrlList(int typeid);
	List<Ip> getFirstCity();
	List<Ip> getSecondCity(int firstId);
	List<Ip> getCityIp(int cityId);
}
