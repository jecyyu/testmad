package com.param.dao;

import java.util.List;
import com.param.domain.Param;
import com.param.domain.Ip;


/**
 * @author JecyLiu
 *
 */
public interface ParamVOMapper {
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
	void delPicSize(int id);
	List<Param> getUrlList(int typid);
	List<Ip> getFirstCity();
	List<Ip> getSecondCity(int firstId);
	List<Ip> getCityIp(int cityId);
}
