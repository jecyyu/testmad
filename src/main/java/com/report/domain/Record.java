package com.report.domain;

public class Record {
	private int id;
	private int type;
	private String resid;
	private String status;
	private String url;
	private String acttype;
	private String author;
	private String adspaceid;
	private String campid;
	private String convid;
	private String remark;
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
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
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getResid() {
		return resid;
	}
	public void setResid(String resid) {
		this.resid = resid;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getActtype() {
		return acttype;
	}
	public void setActtype(String acttype) {
		this.acttype = acttype;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	private String createtime;
}
