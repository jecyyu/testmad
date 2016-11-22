package com.param.service.impl;

import java.util.List;

import com.param.dao.ParamVOMapper;
import com.param.domain.Ip;
import com.param.domain.Param;
import com.param.service.IParamService;


/**
 * @author JecyLiu
 *
 */
public class ParamServiceImpl implements IParamService {
	

	

	private ParamVOMapper paramVOMapper;
	
	
	public List<Param> getOS() {
		return paramVOMapper.getOS();
	}
	
	public List<Param> getOSV(String os) {
		return paramVOMapper.getOSV(os);
	}
	
	public List<Param> getUA(String osv) {
		return paramVOMapper.getUA(osv);
	}
	
	public List<Param> getMedia() {
		return paramVOMapper.getMedia();
	}
	
	public List<Param> getTypeId(Param param) {
		return paramVOMapper.getTypeId(param);
	}
	
	public List<Param> getUrlListByTypeId(Param param) {
		return paramVOMapper.getUrlListByTypeId(param);
	}
	
	public List<Param> getSystem(int resid) {
		return paramVOMapper.getSystem(resid);
	}
	
	public List<Param> getPicSizeAll() {
		return paramVOMapper.getPicSizeAll();
	}
	
	public void insertPicSize(Param param) {
		paramVOMapper.insertPicSize(param);
	}
	
	public void deletePicSize(int id) {
		paramVOMapper.delPicSize(id);
	}
	
	public List<Param> getIpAll() {
		return paramVOMapper.getIpAll();
	}
	
	public List<Param> getUrlList(int typeid){
		return paramVOMapper.getUrlList(typeid);
	}
	
	public List<Ip> getFirstCity(){
		return paramVOMapper.getFirstCity();
	}
	
	public List<Ip> getSecondCity(int firstId){
		return paramVOMapper.getSecondCity(firstId);
	}
	public List<Ip> getCityIp(int cityId){
		return paramVOMapper.getCityIp(cityId);
	}
	
	public List<Param> getTypeName(String sysid){
		return paramVOMapper.getTypeName(sysid);
	}
	
	//---------------------
	
	public ParamVOMapper getParamVOMapper() {
		return paramVOMapper;
	}

	public void setParamVOMapper(ParamVOMapper paramVOMapper) {
		this.paramVOMapper = paramVOMapper;
	}
}
