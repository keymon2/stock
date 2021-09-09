import requests
import configparser
import xml.etree.ElementTree as ET

class Data():
    CORP_CODE_URL ="http://api.seibro.or.kr/openapi/service/CorpSvc/getIssucoCustnoByNm"
    CORP_INFO_URL ="http://api.seibro.or.kr/openapi/service/CorpSvc/getIssucoBasicInfo"
    STOCK+DISTRIBUTION_URL="http://api.seibro.or.kr/openapi/service/CorpSvc/getStkDistributionShareholderStatus"

def __init__(self):
    config =configparser.RawConfigParser()
    config.read("conf/config.ini")
    self.api_key =config["DATA"]["api_key"]
    if self.api_key is None:
        raise Exception("Need to api key")


    