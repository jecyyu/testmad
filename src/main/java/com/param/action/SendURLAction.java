package com.param.action;

import java.text.SimpleDateFormat;

import com.base.BaseAction;
import com.param.service.IParamService;
/*import com.base.SoapCampaign;
import com.madhouse.campaign.v2014.BidSetting;
import com.madhouse.campaign.v2014.Campaign;
import com.madhouse.campaign.v2014.CampaignType;
import com.madhouse.campaign.v2014.CampaignStatus;
import com.madhouse.campaign.v2014.ImpressionMonitorUrl;
import com.madhouse.campaign.v2014.CampaignServingStatus;
import com.madhouse.campaign.v2014.Campaign.ImpressionUrls; 
import com.madhouse.campaign.v2014.ClickMonitorUrl;
import com.madhouse.campaign.v2014.Campaign.ClickUrls;
import com.madhouse.campaign.v2014.Target;
import com.madhouse.campaign.v2014.AdUnit;
import com.madhouse.campaign.v2014.AdunitSchedule;
import com.madhouse.campaign.v2014.AdUnit.Schedules;
import com.madhouse.campaign.v2014.Target.Adunits;
import com.madhouse.campaign.v2014.Creative;
import com.madhouse.campaign.v2014.Campaign.Creatives;
import com.madhouse.campaign.v2014.Campaign.BidSettings;
import com.madhouse.campaign.v2014.Channel;
import com.madhouse.campaign.v2014.Campaign.Channels;
import com.madhouse.campaign.v2014.Target.OsList;
import com.madhouse.campaign.v2014.Target.Connections;
import com.madhouse.campaign.v2014.Target.Devices;
import com.madhouse.campaign.v2014.Target.Geos;
import com.madhouse.campaign.v2014.Target.Isps;
import com.madhouse.campaign.v2014.Target.Langs;
import com.madhouse.campaign.v2014.Target.Medias;
import com.madhouse.campaign.v2014.Target.Times;*/

public class SendURLAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private IParamService paramService;

	public IParamService getParamService() {
		return paramService;
	}

	public void setParamService(IParamService paramService) {
		this.paramService = paramService;
	}

	public String sendControl() {
		String result = "success";
		sendUrl();
		return result;
	}

	public String sendUrl() {
		while (true) {
			String url = request.getParameter("area_genUrl");
			String ua = request.getParameter("sel_ua");
			String site = url.split("?")[0];
			String param = url.split("?")[1];
			String resultStatus = "";

			try {
				resultStatus = sendGet(site, param, ua);
				resultStatus = "success";
			} catch (Exception ex) {
				resultStatus = "fail";
			}

			return resultStatus;
		}
	}

	/*public String sendSoapCampaign() {
		String result = "fail";
		SoapCampaign scamp = new SoapCampaign();
		Campaign p_camp = new Campaign();
		try {
			p_camp.setType(CampaignType.NON_RTB);
			p_camp.setCampaignName("soap广告活动");
			p_camp.setId("SOAP_0000001");
			p_camp.setAdType("1");
			p_camp.setStatus(CampaignStatus.ACTIVE);
			p_camp.setServingStatus(CampaignServingStatus.SERVING);
			//p_camp.setChannels(com.madhouse.campaign.v2014.Channel);b
			
			//展示监测地址
			ImpressionMonitorUrl p_impUrl = new ImpressionMonitorUrl();
			p_impUrl.setUrl("http://imp.");
			ImpressionUrls p_impUrls = new ImpressionUrls();
			p_impUrls.getImpressionUrl().add(p_impUrl);
			p_camp.setImpressionUrls(p_impUrls);
			
			//点击监测地址
			ClickMonitorUrl p_clkUrl = new ClickMonitorUrl();
			p_clkUrl.setUrl("http://clkmonitor");
			ClickUrls p_clkUrls = new ClickUrls();
			p_clkUrls.getClickUrl().add(p_clkUrl);
			p_camp.setClickUrls(p_clkUrls);
			Creative p_creative = new Creative();
			Creatives p_creatives = null;
			p_creatives = new com.madhouse.campaign.v2014.Campaign.Creatives();
			p_creative.setWidth(1280);
			p_creative.setHeight(200);
			p_creative.setVersionID("22");
			p_creative.setImgUrl("http://admin.ui.airwaveone.net/material/83/43/26/22_1/material_320x50.jpg");
			p_creatives.getCreative().add(p_creative);
			p_camp.setCreatives(p_creatives);
			
			p_camp.setRemark("sss");
			BidSetting bid = new BidSetting();
			BidSettings bids = new BidSettings();
			bid.setBid(2000);
			bids.getBidSetting();
			p_camp.setBidSettings(bids);
			
			Channel ch = new Channel();
			Channels chs = new Channels();
			ch.setName("adwords");
			chs.getChannel();
			p_camp.setChannels(chs);
			
			
			com.madhouse.campaign.v2014.BudgetOptiMode p_budgetMode;
			p_budgetMode = com.madhouse.campaign.v2014.BudgetOptiMode.FOR_CPC;
			
			
			switch(scamp.getPriceType()){
			case CPC:
				//p_bidType = com.madhouse.campaign.v2014.BidStrategyType.CPC;
				p_budgetMode = com.madhouse.campaign.v2014.BudgetOptiMode.FOR_CPC;
				break;
			case CPM:
				//p_bidType = com.madhouse.campaign.v2014.BidStrategyType.CPM;
				p_budgetMode = com.madhouse.campaign.v2014.BudgetOptiMode.FOR_CPM;
				break;
			case CPD:
				//p_bidType = com.madhouse.campaign.v2014.BidStrategyType.CPD;
				p_budgetMode = com.madhouse.campaign.v2014.BudgetOptiMode.FOR_CPD;
				break;
			case CPA:
				//p_bidType = com.madhouse.campaign.v2014.BidStrategyType.CPA;
				p_budgetMode = com.madhouse.campaign.v2014.BudgetOptiMode.FOR_CPA;
				break;
			default:
				//p_bidType = com.madhouse.campaign.v2014.BidStrategyType.CPM;
				p_budgetMode = com.madhouse.campaign.v2014.BudgetOptiMode.NONE;
				break;
			}
			
			com.madhouse.campaign.v2014.BudgetUnit p_bunit = new com.madhouse.campaign.v2014.BudgetUnit();
			p_bunit.setAmount(100.00);
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			p_bunit.setStart("2014-12-30");
			p_bunit.setEnd("2015-01-30");
			com.madhouse.campaign.v2014.BudgetDeliverMethod method = com.madhouse.campaign.v2014.BudgetDeliverMethod.ACCELERATE;
					camp.getSpeed() == SpeedType.fast ? com.madhouse.campaign.v2014.BudgetDeliverMethod.ACCELERATE
							: com.madhouse.campaign.v2014.BudgetDeliverMethod.STANDARD;
			p_bunit.setMethod(method);
			
			com.madhouse.campaign.v2014.Budget.BudgetUnits p_budgets = new com.madhouse.campaign.v2014.Budget.BudgetUnits();
			p_budgets.getBudgetUnit().add(p_bunit);
			
			com.madhouse.campaign.v2014.Budget p_budget = new com.madhouse.campaign.v2014.Budget();
			p_budget.setBudgetUnits(p_budgets);
			p_budget.setMethod(method);
			p_budget.setOptiMode(com.madhouse.campaign.v2014.BudgetOptiMode.FOR_CPC);
			p_camp.setBudget(p_budget);
			
			
			//定向数据
			Target p_target = new Target();
			AdUnit p_adunit = new AdUnit();
			AdunitSchedule p_schedule = new AdunitSchedule();
			Schedules p_schedules = new Schedules();
			Adunits p_adunits = new Adunits();
			p_adunit.setAdUnitID("90000122");
			p_schedule.setBudget(123);
			p_schedule.setPrice(1);
			p_schedule.setStart("1419264000000");
			p_schedule.setEnd("1450886399000");
			p_schedules.getSchedule().add(p_schedule);
			p_adunit.setSchedules(p_schedules);
			p_adunits.getAdunit().add(p_adunit);
			p_target.setAdunits(p_adunits);
			OsList os =new OsList();
			os.getOs();
			p_target.setOsList(os);
			
			Connections conn =new Connections();
			conn.getConnection();
			p_target.setConnections(conn);
			
			Devices dev = new Devices();
			dev.getDevice();
			p_target.setDevices(dev);
			
			Geos geos = new Geos();
			geos.getGeo();
			p_target.setGeos(geos);
			
			Isps isp = new Isps();
			isp.getIsp();
			p_target.setIsps(isp);
			
			Langs langs = new Langs();
			langs.getLang();
			p_target.setLangs(langs);
			
			Medias media = new Medias();
			media.getMedia();
			p_target.setMedias(media);
			
		    Times times = new Times();
		    times.getTime();
			p_target.setTimes(times);
			
			p_camp.setTarget(p_target);
			
			
			scamp.sendSoap("http://10.10.49.31:8080/cmc/campaignservice/campaign.wsdl", "create", p_camp);
			result = "success";
		} catch (Exception ex) {
			result = "error";
		}
		return result;
	}*/

}
