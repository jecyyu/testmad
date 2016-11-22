package com.base;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.lang.Process;
import java.lang.Runtime;

public class ShellExec {
	
	private static void shellExec(){
		String scriptPath = "/service/script";
		Process process = null;
		
		String command1 = "mkdir ~/services/script/hello";
		try {
			process = Runtime.getRuntime().exec(command1);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			process.waitFor();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	

	public static void main(String[] args) throws IOException, InterruptedException {
		// TODO Auto-generated method stub
		String cmd = "sh ~/services/script/shellDemo.sh";
        
        if(args == null || args.length == 0){
            System.out.println("请输入命令行参数");
        }else{
            
            for(int i=0;i<args.length; i++){
                cmd += args[i] + " ";
            }
        }
        
 
        try {
            Process process = Runtime.getRuntime().exec(cmd);
 
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

}
