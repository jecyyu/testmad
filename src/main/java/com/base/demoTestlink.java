package com.base;


import java.net.MalformedURLException;
import java.net.URL;

import br.eti.kinoshita.testlinkjavaapi.TestLinkAPI;
import br.eti.kinoshita.testlinkjavaapi.constants.ExecutionType;
import br.eti.kinoshita.testlinkjavaapi.model.TestCase;
import br.eti.kinoshita.testlinkjavaapi.model.TestPlan;
import br.eti.kinoshita.testlinkjavaapi.util.TestLinkAPIException;

public class demoTestlink {
	
	//private static Logger logger = Logger.getLogger(APIObject.class);
    private static TestLinkAPI api = null;
    
    public static TestLinkAPI getAPI() {
        if (null == api) {
            String url = "http://localhost/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
            String devKey = "74d343dd8087d166ea8a0fcce9107830";
            //logger.debug("URL=" + url);
            //logger.debug("devKey=" + devKey);
            try {
                api = new TestLinkAPI(new URL(url), devKey);
            } catch (TestLinkAPIException te) {
                //logger.error(te.getMessage(), te);
            } catch (MalformedURLException mue) {
                //logger.error(mue.getMessage(), mue);
            }
        }
        return api;
    }

    
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String planName="流量分配平台";
        String projectName= "PerforMad";
        TestLinkAPI api = getAPI();
        TestPlan tl = api.getTestPlanByName(planName,projectName);
        TestCase[] tcs=api.getTestCasesForTestPlan(tl.getId(), null, null,null,null,null,
                                            null,null,ExecutionType.AUTOMATED,null,null);
        for(TestCase tc:tcs){
            //logger.debug(tc.toString());
        	System.out.println(">>>>>>>>>>>>"+tc.toString());
        }
		//getAPI();

	}

}
