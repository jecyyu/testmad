#!/bin/bash
ssh madhouse@172.16.26.128 "source ~/.bash_profile;cd /services/scripts/performad/report/;mocha queryFlightListByCampaignGroup.js --j 150,2015/12/31,2016/03/31,report"