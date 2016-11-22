package com.user.service.impl;

import java.util.List;

import com.user.dao.UserVOMapper;
import com.user.domain.User;
import com.user.service.IUserService;


/**
 * @author JecyLiu
 *
 */
public class UserServiceImpl implements IUserService {

	private UserVOMapper userVOMapper;
	
	public List<User> loginUser(User user) {
		return userVOMapper.loginUser(user);
	}
	
	public List<User> getUserAll() {
		return userVOMapper.getUserAll();
	}
	
	public void insertUser(User user){
		userVOMapper.insertUser(user); 
	}
	
	
	public UserVOMapper getUserVOMapper() {
		return userVOMapper;
	}

	public void setUserVOMapper(UserVOMapper userVOMapper) {
		this.userVOMapper = userVOMapper; 
	}
	
	public List<User> getUserInfoById(int id) {
		return userVOMapper.getUserInfoById(id);
	}//void updateUser(User user);
	
	public void updateUser(User user){
		userVOMapper.updateUser(user); 
	}
	
}
