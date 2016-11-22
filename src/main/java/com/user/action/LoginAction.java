package com.user.action;

import java.util.List;

import com.base.BaseAction;
import com.user.domain.User;
import com.user.service.IUserService;

/**
 * @author JecyLiu
 * 
 */
public class LoginAction extends BaseAction {

	private static final long serialVersionUID = 1L;
	private IUserService userService;
	private List<User> list_user;
	private List<User> list_userinfo;
	private List<User> list_login;

	

	public String loginUser() {
		String result = "";
		try {
			User user = new User();
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			user.setUsername(username);
			user.setPassword(string2MD5(password));
			list_login = userService.loginUser(user);
			user = list_login.get(0);
			String resid = user.getResid();
			String loginUser = user.getUsername();
			int roleid = user.getRoleid();
			if (resid != null) {
				result = "success";
				session.setAttribute("loginValue", resid);
				session.setAttribute("loginUser", loginUser);
				session.setAttribute("loginRole", roleid);
			} else {
				session.setAttribute("loginValue", "-1");
				session.setAttribute("loginRole", "-1");
				result = "fail";
			}
		} catch (Exception ex) {
			session.setAttribute("loginValue", "-1");
			result = "error";
		}

		return result;
	}

	public String logoutUser() {
		String result = "success";
		session.removeAttribute("loginValue");
		return result;
	}

	public String getUserListAll() {
		String result = "";
		try {
			list_user = userService.getUserAll();
			session.setAttribute("list_user", list_user);
			result = "success";
		} catch (Exception ex) {
			result = "error";
		}
		return result;
	}

	public String insertUser() {
		User user = new User();
		String result = "";
		try {
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			String str_roleid = request.getParameter("roleid");
			int roleid = Integer.parseInt(str_roleid);
			user.setResid(getResId());
			user.setUsername(username);
			user.setPassword(string2MD5(password));
			user.setStatus(0);
			user.setRoleid(roleid);
			userService.insertUser(user);
			result = "success";
		} catch (Exception ex) {
			result = "error";
		}
		return result;
	}

	public String getUserListById() {
		String result = "";
		String str_id = request.getParameter("id");
		try {
			int int_id = Integer.parseInt(str_id);
			list_userinfo = userService.getUserInfoById(int_id);
			result = "success";
		} catch (Exception ex) {
			result = "error";
		}
		return result;
	}

	public String updateUser() {
		User user = new User();
		String result = "";
		try {
			String username = request.getParameter("username");
			String password = request.getParameter("password");
			String status = request.getParameter("status");
			user.setResid(getResId());
			user.setUsername(username);
			user.setPassword(password);
			user.setStatus(Integer.parseInt(status));
			userService.updateUser(user);
			result = "success";
		} catch (Exception ex) {
			result = "error";
		}
		return result;
	}

	public List<User> getList_user() {
		return list_user;
	}

	public void setList_user(List<User> list_user) {
		this.list_user = list_user;
	}

	public IUserService getUserService() {
		return userService;
	}

	public void setUserService(IUserService userService) {
		this.userService = userService;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public List<User> getList_userinfo() {
		return list_userinfo;
	}

	public void setList_userinfo(List<User> list_userinfo) {
		this.list_userinfo = list_userinfo;
	}
	
	public List<User> getList_login() {
		return list_login;
	}

	public void setList_login(List<User> list_login) {
		this.list_login = list_login;
	}

}
