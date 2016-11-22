package com.report.service.impl;

import java.util.List;

import com.report.dao.ReportVOMapper;
import com.report.domain.Record;
import com.report.domain.Report;
import com.report.service.IRecordService;


/**
 * @author JecyLiu
 *
 */
public class RecordServiceImpl implements IRecordService {
	
	private ReportVOMapper reportVOMapper;
	
	public void insertDetailReport(Report report){
		reportVOMapper.insertDetailReport(report);
	}
	
	public void insertReq(Record record){
		reportVOMapper.insertReq(record);
	}
	
	public void insertImp(Record record){
		reportVOMapper.insertImp(record);
	}
	
	public void insertClk(Record record){
		reportVOMapper.insertClk(record);
	}
	
	public void insertAct(Record record){
		reportVOMapper.insertAct(record);
	}
	
	public void proc_record(Record record){
		reportVOMapper.proc_record(record);
	}
	
	public void testCount(String campId){
		reportVOMapper.testCount(campId);
	}
	
	public List<Report> getMonitorReport(String author){
		return reportVOMapper.getMonitorReport(author);
	}
	
	public List<Report> getMonitorReportByPage(Report report){
		return reportVOMapper.getMonitorReportByPage(report);
	}
	
	public List<Report> getDateReport(){
		return reportVOMapper.getDateReport();
	}
	
	public void clearData(int id)
	{
		reportVOMapper.clearData(id);
	}
	
	
	public List<Report> getTestCount(){
		return reportVOMapper.getTestCount();
	}
	
	
	public ReportVOMapper getReportVOMapper() {
		return reportVOMapper;
	}

	public void setReportVOMapper(ReportVOMapper reportVOMapper) {
		this.reportVOMapper = reportVOMapper;
	}

	public ReportVOMapper getRecordVOMapper() {
		return reportVOMapper;
	}


	public void setRecordVOMapper(ReportVOMapper recordVOMapper) {
		this.reportVOMapper = recordVOMapper;
	}


}
