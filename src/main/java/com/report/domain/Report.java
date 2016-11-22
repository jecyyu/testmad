package com.report.domain;



/**
 * @author JecyLiu
 *
 */
public class Report {
	private int id;	
	private String adspaceid;
	private String campid;
	private String convid;
	private int req;
	private int imp;
	private int clk;
	private int act;
	private int system;
	private String author;
	private String remark;
	private String reportdate;
	private String createtime;
	private int pageIndex;
	private String recordtime;
	
	public String getRecordtime() {
		return recordtime;
	}
	public void setRecordtime(String recordtime) {
		this.recordtime = recordtime;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getPageIndex() {
		return pageIndex;
	}
	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}
	public String getReportdate() {
		return reportdate;
	}
	public void setReportdate(String reportdate) {
		this.reportdate = reportdate;
	}
	
	public String getAdspaceid() {
		return adspaceid;
	}
	public void setAdspaceid(String adspaceid) {
		this.adspaceid = adspaceid;
	}
	public String getCampid() {
		return campid;
	}
	public void setCampid(String campid) {
		this.campid = campid;
	}
	public String getConvid() {
		return convid;
	}
	public void setConvid(String convid) {
		this.convid = convid;
	}
	public int getReq() {
		return req;
	}
	public void setReq(int req) {
		this.req = req;
	}
	public int getImp() {
		return imp;
	}
	public void setImp(int imp) {
		this.imp = imp;
	}
	public int getClk() {
		return clk;
	}
	public void setClk(int clk) {
		this.clk = clk;
	}
	public int getAct() {
		return act;
	}
	public void setAct(int act) {
		this.act = act;
	}
	public int getSystem() {
		return system;
	}
	public void setSystem(int system) {
		this.system = system;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	
	
	
	
}
