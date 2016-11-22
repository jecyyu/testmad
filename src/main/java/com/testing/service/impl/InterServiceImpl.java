package com.testing.service.impl;

import java.util.List;

import com.testing.dao.InterfaceVOMapper;
import com.testing.domain.Interface;
import com.testing.service.IInterService;

/**
 * @author JecyLiu
 * 
 */
public class InterServiceImpl implements IInterService {

	private InterfaceVOMapper interfaceVOMapper;

	public List<Interface> getParam(String typeid) {
		return interfaceVOMapper.getParam(typeid);
	}

	public List<Interface> getInterface(String typeid) {
		return interfaceVOMapper.getInterface(typeid);
	}
	
	public void insertInterParam(Interface inter) {
		interfaceVOMapper.insertInterParam(inter);
	}
	
	public void updateInterParam(Interface inter) {
		interfaceVOMapper.updateInterParam(inter);
	}
	
	public void insertInterface(Interface inter) {
		interfaceVOMapper.insertInterface(inter);
	}
	
	public void updateInterface(Interface inter) {
		interfaceVOMapper.updateInterface(inter);
	}
	
	public void delInterface(Interface inter){
		interfaceVOMapper.delInterface(inter);
	}
	
	
	
	
	
	
	public List<Interface> getPathBySysId(String sysid) {
		return interfaceVOMapper.getPathBySysId(sysid);
	}
	
	public List<Interface> getInterfaceById(String id){
		return interfaceVOMapper.getInterfaceById(id);
	}
	
	
	public InterfaceVOMapper getInterfaceVOMapper() {
		return interfaceVOMapper;
	}

	public void setInterfaceVOMapper(InterfaceVOMapper interfaceVOMapper) {
		this.interfaceVOMapper = interfaceVOMapper;
	}

}
