#!/bin/bash
#####script_name.sh [0/1/2] [path] [name] [param] [report-name]
#####script_name.sh 0 /report queryFlightListByCampaignGroup.js 150,2015/12/31,2016/03/31,report
#####ssh madhouse@172.16.26.128 "source ~/.bash_profile;cd /services/scripts/performad/report/;mocha queryFlightListByCampaignGroup.js --reporter mochawesome --reporter-options reportName=testReport --j 150,2015/12/31,2016/03/31,report"
#####$1=(1-performad,2-premiummad,3-exchange)
domain=madhouse@172.16.26.128
script_name=$3
param=$4
report_name=$5
if [$1==1]
  then
        echo "performad"
        main="performad"
        ssh ${domain} "source ~/.bash_profile;cd /services/scripts/${main}${2}/;mocha ${script_name} --reporter mochawesome --reporter-options reportName=${report_name} --j ${param}"
elif [$1==2]
  then
        echo "premiummad"
        main="premiummad"
        ssh ${domain} "source ~/.bash_profile;cd /services/scripts/${main}${2}/;mocha ${script_name} --reporter mochawesome --reporter-options reportName=${report_name} --j ${param}"
elif [$1==3]
  then
        echo "exchange"
        main="exchange"
        ssh ${domain} "source ~/.bash_profile;cd /services/scripts/${main}${2}/;mocha ${script_name} --reporter mochawesome --reporter-options reportName=${report_name} --j ${param}"
else
  echo "Unknown Platform."
fi

