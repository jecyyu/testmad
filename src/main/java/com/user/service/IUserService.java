package com.user.service;

import java.util.List;
import com.user.domain.User;



/**
 * @author JecyLiu
 *
 */
public interface IUserService {
	
	List<User> loginUser(User user);
	List<User> getUserAll();
	void insertUser(User user);
	List<User> getUserInfoById(int id);
	void updateUser(User user);
}
