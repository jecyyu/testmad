package com.setting.service;

import java.util.List;

import com.setting.domain.Version;

public interface IVersionService {
	
	List<Version> getlastVersion();
	void addVersion(Version ver);

}
