package com.report.action;

import com.base.BaseAction;
import com.report.domain.Record;
import com.report.domain.Report;
import com.report.service.IRecordService;

public class RecordAction extends BaseAction {

	private IRecordService recordService;

	public String recordDataAction() {
		String result = "";
		try {

			Report report = new Report();
			String author = session.getAttribute("loginValue").toString();
			int req = Integer.parseInt(request.getParameter("req"));
			int imp = Integer.parseInt(request.getParameter("imp"));
			int clk = Integer.parseInt(request.getParameter("clk"));
			int act = Integer.parseInt(request.getParameter("act"));
			String adspaceid = request.getParameter("adspaceid");
			String campid = request.getParameter("campid");
			String convid = request.getParameter("convid");
			String remark = request.getParameter("remark");
			report.setReq(req);
			report.setImp(imp);
			report.setClk(clk);
			report.setAct(act);
			report.setAuthor(author);
			report.setAdspaceid(adspaceid);
			report.setCampid(campid);
			report.setConvid(convid);
			report.setRemark(remark);
			recordService.insertDetailReport(report);
			result = "success";
		} catch (Exception e) {
			System.out.println(e);
			result = "error";
		}
		return result;
	}

	public String insertReq() {
		String result = "";
		String url = request.getParameter("url");
		String adspaceid = request.getParameter("adspaceid");
		String status = request.getParameter("status");
		String campid = request.getParameter("campid");
		String resid = request.getParameter("resid");
		String remark = request.getParameter("remark");
		String author = "";
		if(session.getAttribute("loginValue")!=null)
		{
			author = session.getAttribute("loginValue").toString();
		}
		Record record = new Record();
		try {
			record.setAuthor(author);
			record.setActtype("");
			record.setConvid("");
			record.setType(0);
			record.setUrl(url);
			record.setResid(resid);
			record.setStatus(status);
			record.setAdspaceid(adspaceid);
			record.setCampid(campid);
			record.setRemark(remark);
			recordService.proc_record(record);
			result = "success";
		} catch (Exception ex) {
			result = "error";
			System.out.println("AAAAAAAAAAAAA"+ex.toString());
		}
		return result;
	}

	public String insertImp() {
		String result = "";
		String url = request.getParameter("url");
		String adspaceid = request.getParameter("adspaceid");
		String status = request.getParameter("status");
		String campid = request.getParameter("campid");
		String remark = request.getParameter("remark");
		String resid = request.getParameter("resid");
		String author = "";
		if(session.getAttribute("loginValue")!=null)
		{
			author = session.getAttribute("loginValue").toString();
			Record record = new Record();
			try {
				record.setAuthor(author);
				record.setType(1);
				record.setUrl(url);
				record.setResid(resid);
				record.setStatus(status);
				record.setAdspaceid(adspaceid);
				record.setCampid(campid);
				record.setRemark(remark);
				recordService.proc_record(record);
				result = "success";
			} catch (Exception ex) {
				result = "error";
				System.out.println("BBBBBBBBBBB"+ex.toString());
			}
		}
		else
		{
			result = "login_error";
		}
		return result;
	}

	public String insertClk() {
		String result = "";
		String url = request.getParameter("url");
		String resid = request.getParameter("resid");
		String status = request.getParameter("status");
		String remark = request.getParameter("remark");
		String adspaceid = request.getParameter("adspaceid");
		String campid = request.getParameter("campid");
		String author = "";
		if(session.getAttribute("loginValue")!=null)
		{
			author = session.getAttribute("loginValue").toString();
			Record record = new Record();
			try {
				record.setAuthor(author);
				record.setType(2);
				record.setUrl(url);
				record.setResid(resid);
				record.setAdspaceid(adspaceid);
				record.setStatus(status);
				record.setCampid(campid);
				record.setRemark(remark);
				recordService.proc_record(record);
				result = "success";
			} catch (Exception ex) {
				result = "error";
			}
		}
		else
		{
			result = "login_error";
		}
		return result;
	}

	public String insertAct() {
		String result = "";
		String url = request.getParameter("url");
		String acttype = request.getParameter("acttype");
		String remark = request.getParameter("remark");
		String resid = request.getParameter("resid");
		String convid = request.getParameter("convid");
		String author = "";
		if(session.getAttribute("loginValue")!=null)
		{
			author = session.getAttribute("loginValue").toString();
			Record record = new Record();
			try {
				record.setAuthor(author);
				record.setType(3);
				record.setUrl(url);
				record.setResid(resid);
				record.setConvid(convid);
				record.setRemark(remark);
				recordService.proc_record(record);
				result = "success";
			} catch (Exception ex) {
				result = "error";
			}
		}
		else
		{
			result = "login_error";
		}
		return result;
	}
	
	public String testCount(){
		String campId = request.getParameter("remark");
		String result = "success";
		
		try
		{
			if(campId==null)
			{
				campId="RemarkNull";
				result = "error";
			}
			recordService.testCount(campId);
		}
		catch(Exception ex)
		{
			result = "error";
		}
		return result;
	}

	public IRecordService getRecordService() {
		return recordService;
	}

	public void setRecordService(IRecordService recordService) {
		this.recordService = recordService;
	}
}
