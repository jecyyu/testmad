package com.setting.dao;

import java.util.List;
import com.setting.domain.Version;

public interface VersionVOMapper {
	
	List<Version> getlastVersion();
	void addVersion(Version ver);

}
