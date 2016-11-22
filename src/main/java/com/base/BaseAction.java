package com.base;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.json.JSONException;
import org.apache.struts2.json.JSONUtil;
import org.json.JSONObject;
import org.json.JSONArray;


import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.lang.Process;
import java.lang.Runtime;

import com.opensymphony.xwork2.ActionSupport;

import java.security.MessageDigest;  

/**
 * @author JecyLiu
 * 
 */
public class BaseAction extends ActionSupport implements ServletRequestAware,
		ServletResponseAware {

	private static final long serialVersionUID = 1L;
	protected HttpServletRequest request;
	protected HttpServletResponse response;
	protected HttpSession session;
	private Vector<String> errMessage;
	protected int start;
	protected int limit;
	
	
	public JSONArray jsonTest(){  
	    JSONObject json=new JSONObject();  
	    JSONArray jsonMembers = new JSONArray();  
	    JSONObject member1 = new JSONObject();  
	    member1.put("name", "320*50");  
	    member1.put("width", "320");  
	    member1.put("height","50");  
	    jsonMembers.put(member1);  
	  
	    /*JSONObject member2 = new JSONObject();  
	    member2.put("loginname", "zf");  
	    member2.put("password", "userpass");  
	    member2.put("email","8223939@qq.com");  
	    member2.put("sign_date", "2008-07-16");  
	    jsonMembers.put(member2);  
	    json.put("users", jsonMembers); */
	  
	    return jsonMembers;  
	}  
	
	public String getResId()
	{
		String result = "";
		long timestamp = System.currentTimeMillis();
		String times = String.valueOf(timestamp);
		result = string2MD5(times);
		//convertMD5(convertMD5(times));解密
		
		return result;
	}

	public void setServletRequest(HttpServletRequest req) {
		this.request = req;
		this.session = request.getSession();
	}

	public void setServletResponse(HttpServletResponse res) {
		this.response = res;
	}

	public static String sendGet(String url, String param,String ua) {
		String result = "";
		BufferedReader in = null;
		try {
			String urlNameString = url + "?" + param;
			URL realUrl = new URL(urlNameString);
			// 打开和URL之间的连接
			URLConnection connection = realUrl.openConnection();
			// 设置通用的请求属性
			connection.setRequestProperty("accept", "*/*");
			connection.setRequestProperty("connection", "Keep-Alive");
			connection.setRequestProperty("user-agent",ua);
			// 建立实际的连接
			connection.connect();
			// 获取所有响应头字段
			Map<String, List<String>> map = connection.getHeaderFields();
			// 遍历所有的响应头字段
			for (String key : map.keySet()) {
				System.out.println(key + "--->" + map.get(key));
			}
			// 定义 BufferedReader输入流来读取URL的响应
			in = new BufferedReader(new InputStreamReader(
					connection.getInputStream()));
			String line;
			while ((line = in.readLine()) != null) {
				result += line;
			}
		} catch (Exception e) {
			System.out.println("发送GET请求出现异常！" + e);
			e.printStackTrace();
		}
		// 使用finally块来关闭输入流
		finally {
			try {
				if (in != null) {
					in.close();
				}
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}
		return result;
	}

	/**
	 * 向指定 URL 发送POST方法的请求
	 * 
	 * @param url
	 *            发送请求的 URL
	 * @param param
	 *            请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
	 * @return 所代表远程资源的响应结果
	 */
	public static String sendPost(String url, String param,String ua) {
		PrintWriter out = null;
		BufferedReader in = null;
		String result = "";
		try {
			URL realUrl = new URL(url);
			// 打开和URL之间的连接
			URLConnection conn = realUrl.openConnection();
			// 设置通用的请求属性
			conn.setRequestProperty("accept", "*/*");
			conn.setRequestProperty("connection", "Keep-Alive");
			conn.setRequestProperty("user-agent",ua);
			// 发送POST请求必须设置如下两行
			conn.setDoOutput(true);
			conn.setDoInput(true);
			// 获取URLConnection对象对应的输出流
			out = new PrintWriter(conn.getOutputStream());
			// 发送请求参数
			out.print(param);
			// flush输出流的缓冲
			out.flush();
			// 定义BufferedReader输入流来读取URL的响应
			in = new BufferedReader(
					new InputStreamReader(conn.getInputStream()));
			String line;
			while ((line = in.readLine()) != null) {
				result += line;
			}
		} catch (Exception e) {
			System.out.println("发送 POST 请求出现异常！" + e);
			e.printStackTrace();
		}
		// 使用finally块来关闭输出流、输入流
		finally {
			try {
				if (out != null) {
					out.close();
				}
				if (in != null) {
					in.close();
				}
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		}
		return result;
	}

	public void writeError() {
		try {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter writer = response.getWriter();
			writer.write("{success:false,msg:'");
			for (String msg : errMessage) {
				writer.write(msg);
				writer.write("<br/>");
			}
			errMessage.clear();
			writer.write("'}");
			writer.flush();
			writer.close();
		} catch (java.io.IOException exc) {
			exc.printStackTrace();
		}
	}

	public void writeJson(Object obj) {
		try {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter writer = response.getWriter();
			writer.write(JSONUtil.serialize(obj));
			writer.flush();
			writer.close();
		} catch (java.io.IOException exc) {
			exc.printStackTrace();
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}

	public void writeJson(Object obj, boolean isSuccess) {
		try {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter writer = response.getWriter();
			if (isSuccess) {
				writer.write("{success:true,data:");
			} else {
				writer.write("{success:false,data:");
			}
			writer.write(JSONUtil.serialize(obj));
			writer.write("}");
			writer.flush();
			writer.close();
		} catch (java.io.IOException exc) {
			exc.printStackTrace();
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}

	public void write(String outStr) {
		try {
			response.setContentType("text/html;charset=utf-8");
			PrintWriter writer = response.getWriter();
			writer.write(outStr);
			writer.flush();
			writer.close();
		} catch (java.io.IOException exc) {
			exc.printStackTrace();
		}
	}

	public void writeXml(String outStr) {
		try {
			response.setContentType("text/xml;charset=utf-8");
			PrintWriter writer = response.getWriter();
			writer.write(outStr);
			writer.flush();
			writer.close();
		} catch (java.io.IOException exc) {
			exc.printStackTrace();
		}
	}

	protected void addError(String msgId, Object... params) {
		if (errMessage == null) {
			errMessage = new Vector<String>();
		}
		errMessage.add(String.format(getText(msgId), params));
	}

	protected void addErrorWithMsg(String msg, Object... params) {
		if (errMessage == null) {
			errMessage = new Vector<String>();
		}
		errMessage.add(String.format(msg, params));
	}

	public boolean isInvalid() {
		if (errMessage != null && errMessage.size() > 0) {
			writeError();
			return true;
		}
		return false;
	}
	
    public static String string2MD5(String inStr){  
        MessageDigest md5 = null;  
        try{  
            md5 = MessageDigest.getInstance("MD5");  
        }catch (Exception e){  
            System.out.println(e.toString());  
            e.printStackTrace();  
            return "";  
        }  
        char[] charArray = inStr.toCharArray();  
        byte[] byteArray = new byte[charArray.length];  
  
        for (int i = 0; i < charArray.length; i++)  
            byteArray[i] = (byte) charArray[i];  
        byte[] md5Bytes = md5.digest(byteArray);  
        StringBuffer hexValue = new StringBuffer();  
        for (int i = 0; i < md5Bytes.length; i++){  
            int val = ((int) md5Bytes[i]) & 0xff;  
            if (val < 16)  
                hexValue.append("0");  
            hexValue.append(Integer.toHexString(val));  
        }  
        return hexValue.toString();  
  
    }  
  
    /** 
     * 加密解密算法 执行一次加密，两次解密 
     */   
    public static String convertMD5(String inStr){  
  
        char[] a = inStr.toCharArray();  
        for (int i = 0; i < a.length; i++){  
            a[i] = (char) (a[i] ^ 't');  
        }  
        String s = new String(a);  
        return s;  
  
    }  
    
    public void execShell(String shellName,String shellParam){
/*    	if(args == null || args.length == 0){
            System.out.println("请输入命令行参数");
        }else{
            
            for(int i=0;i<args.length; i++){
                cmd += args[i] + " ";
            }
        }*/ 
 
        try {
            Process process = Runtime.getRuntime().exec("sh /services/webapps/"+ shellName+" "+shellParam);
            InputStreamReader ir = new InputStreamReader(process.getInputStream());
            LineNumberReader input = new LineNumberReader(ir);
            String line;
            while ((line = input.readLine()) != null) {
                System.out.println(line);
            }
        } catch (java.io.IOException e) {
            System.err.println("IOException " + e.getMessage());
        }
    }
    
 // 测试主函数  
    /*public static void main(String args[]) {  
        String s = new String("tangfuqiang");  
        System.out.println("原始：" + s);  
        System.out.println("MD5后：" + string2MD5(s));  
        System.out.println("加密的：" + convertMD5(s));  
        System.out.println("解密的：" + convertMD5(convertMD5(s)));  
  
    }  */

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
}
