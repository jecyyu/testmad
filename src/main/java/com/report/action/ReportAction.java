package com.report.action;

import java.util.List;

import com.base.BaseAction;
import com.report.domain.Report;
import com.report.service.IRecordService;


public class ReportAction extends BaseAction {
	
	private IRecordService recordService;
	private List<Report> reportlist;
	private List<Report> dateReportlist;
	private List<Report> testCountList;

	public String getMonitorReport()
	{
		String result = "";
		String author = (String)session.getAttribute("loginValue");
		try{
			recordService.getMonitorReport(author);
			result="success";
		}
		catch(Exception ex)
		{ 
			result="error";
		}
		return result;
	}
	
	public String getMonitorReportByPage()
	{
		String result = "";
		String author = (String)session.getAttribute("loginValue");
		int pageIndex = Integer.parseInt(request.getParameter("page").toString());
		Report report = new Report();
		report.setAuthor(author);
		report.setPageIndex(pageIndex);
		try{
			reportlist = recordService.getMonitorReportByPage(report);
			result="success";
		}
		catch(Exception ex)
		{ 
			result="error";
		}
		return result;
	}
	

	public String getDateReport()
	{
		String result = "";
		try{
			dateReportlist = recordService.getDateReport();
			result="success";
		}
		catch(Exception ex)
		{ 
			result="error";
		}
		return result;
	}
	
	public String getTestCountReport()
	{
		String result = "";
		try{
			testCountList = recordService.getTestCount();
			result="success";
		}
		catch(Exception ex)
		{ 
			result="error";
		}
		return result;
	}
	
	public String clearTestCountData()
	{
		String result = "";
		try{
			
			String str_id = request.getParameter("id");
			int id = Integer.parseInt(str_id);
			recordService.clearData(id);
			result="success";
		}
		catch(Exception ex)
		{ 
			result="error";
		}
		return result;
	}
	
	public List<Report> getTestCountList() {
		return testCountList;
	}

	public void setTestCountList(List<Report> testCountList) {
		this.testCountList = testCountList;
	}

	public List<Report> getDateReportlist() {
		return dateReportlist;
	}

	public void setDateReportlist(List<Report> dateReportlist) {
		this.dateReportlist = dateReportlist;
	}
	
	public List<Report> getReportlist() {
		return reportlist;
	}



	public void setReportlist(List<Report> reportlist) {
		this.reportlist = reportlist;
	}



	public IRecordService getRecordService() {
		return recordService;
	}

	public void setRecordService(IRecordService recordService) {
		this.recordService = recordService;
	}

}
