package com.testing.dao;

import java.util.List;
import com.testing.domain.Interface;



/**
 * @author JecyLiu
 *
 */
public interface InterfaceVOMapper {
	List<Interface> getParam(String typeid);
	List<Interface> getInterface(String typeid);
	void insertInterParam(Interface inter);
	void updateInterParam(Interface inter);
	void insertInterface(Interface inter);
	void updateInterface(Interface inter);
	List<Interface> getPathBySysId(String sysid);
	List<Interface> getInterfaceById(String id);
	void delInterface(Interface inter);
}
