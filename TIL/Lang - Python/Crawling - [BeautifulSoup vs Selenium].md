# Crawling - [BeautifulSoup vs Selenium]


## BeautifulSoup
BeatifulSoup4는 html, xml 같은 **정적인 페이지를 파싱**하기 위한 python 라이브러리다.  
바로 윗 문장에서 설명했듯이 html로만 이루어지지 않은, 스크립트가 돌아가는 페이지에서는 bs4를 사용할 수가 없다.  
하지만 해당 url의 html을 받아와서 바로 데이터를 수집하기 때문에 속도가 빠르다.  
그렇기에 bs4와 selenium을 적절히 조합하여 사용하는 것이 중요하다.

## Selenium
bs4의 설명을 읽었다면 Selenium의 용도에 대해서 어느정도 감이 올 것이다.  
Selenium은 **주로 동적인 페이지(=스크립트가 돌아가는 페이지)를 다룰 때 쓰인다.**  
정적/동적 웹페이지 둘 다 사용가능하지만,  
Chromedriver를 이용해야하고 브라우저가 실행될때까지 기다려야하기 때문에 속도가 상대적으로 느리다.  


## 요약
| | BeautifulSoup | Selenium |
|:---:|:---:|:---:|
| **주 사용처** | 정적 웹 페이지 | 동적 웹 페이지 |
| **속도** | html문서의 text를 가져오는거나 다름없기에 빠름 | WebDriver 기반 크롤링이기에 다소 느림 |
