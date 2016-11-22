package com.setting.service.impl;

import com.setting.domain.Version;

import java.util.List;
import com.setting.dao.VersionVOMapper;
import com.setting.service.IVersionService;

public class VersionServiceImpl implements IVersionService {
	
	private VersionVOMapper verVOMapper;
	
	public List<Version> getlastVersion(){
		return verVOMapper.getlastVersion();
	}
	
	public void addVersion(Version ver){
		verVOMapper.addVersion(ver);
	}
	
	
	
	
	
	
	

	public VersionVOMapper getVerVOMapper() {
		return verVOMapper;
	}

	public void setVerVOMapper(VersionVOMapper verVOMapper) {
		this.verVOMapper = verVOMapper;
	}

}
