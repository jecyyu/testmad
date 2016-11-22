package com.user.dao;

import java.util.List;
import com.user.domain.User;



/**
 * @author JecyLiu
 *
 */
public interface UserVOMapper {
	
	
	List<User> loginUser(User user);
	List<User> getUserAll();
	void insertUser(User user);
	List<User> getUserInfoById(int id);
	void updateUser(User user);
	
}
