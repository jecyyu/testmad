package com.report.dao;

import java.util.List;

import com.report.domain.Record;
import com.report.domain.Report;



/**
 * @author JecyLiu
 *
 */
public interface ReportVOMapper {
	void insertDetailReport(Report report);
	void insertReq(Record record);
	void insertImp(Record record);
	void insertClk(Record record);
	void insertAct(Record record);
	void proc_record(Record record);
	List<Report> getMonitorReport(String author);
	List<Report> getDateReport();
	List<Report> getMonitorReportByPage(Report report);
	void testCount(String campId);
	List<Report> getTestCount();
	void clearData(int id);
}
