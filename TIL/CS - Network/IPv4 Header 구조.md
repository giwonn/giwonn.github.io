## IPv4패킷 헤더 구조
![ip패킷구조](/images/TIL/CS-Network/ipv4-header.png)

IP패킷은 라우터 **MTU**(Maximum Transfer Unit)에 맞게 전송해야 한다.  
패킷의 크기가 클 경우 단편화가 일어나게 된다.  


- **Version** - 4bit
  - IPv4인지 IPv6인지 구별해줌
<br><br>
- **IHL (Header Length)** - 4bit
  - 헤더의 길이가 담겨있음 (MIN 20byte ~ MAX 40byte)
  - D : 이 플래그가 체크되어 있으면 단편화를 할 수 없다.
  - M : 1이면 단편화된 조각이 더 있다는 뜻이고 0이면 마지막 패킷이라는 뜻
<br><br>
- **TOS (Type Of Service)** - 8bit
  - 서비스(=패킷 처리)에 대한 우선순위를 설정할 수 있음
  - 우선순위를 나타내는 Precedence (3bit) + 서비스 유형지정비트 (4bit) + 사용되지 않는 1bit 로 이루어져 있음
![tos](/images/TIL/CS-Network/tos.png)  
![tos-2](/images/TIL/CS-Network/tos-2.png)
<br><br>
- **Total Length** - 16bit
  - 헤더와 데이터를 포함한 패킷의 전체 길이를 나타낸다.
<br><br>
- **Identification** - 16bit
  - 전체 IP 패킷의 길이를 바이트 단위로 나타낸다.
<br><br>
- **IP Flags** - 3bit
  - IP 패킷의 Fragmentation 가능 여부와 마지막 Fragment인지 아닌지를 알리기 위해 사용되는 필드
  - Reserved Flag (1번째 1bit) : 항상 0으로 설정되어 있다.
  - May Fragment (2번째 1bit) : IP 라우터에 의해 분열되는 여부를 나타낸다.
    - 0 = 분열 가능
    - 1 = 분열 방지
  - More Fragment (3번쨰 1bit) : 분열된 조각이 더 있는지 확인하는 bit
    - 0 = 마지막 조각
    - 1 = 조각이 더 있음
<br><br>
- **Fragment Offset** (13bit)
  - 8바이트 오프셋으로 조각에 저장된 원래 데이터의 바이트 범위를 나타낸다.  
![fregmentation](/images/TIL/CS-Network/fregmentation.png)
<br><br>
- **TTL (Time To Live)** (8bit)
  - 패킷이 무한루핑 하는 것을 방지하기 위하여 만들어졌으며 라우터를 지날 때마다 1씩 감소한다.
  - 0이 되면 해당 패킷은 폐기되고 Type3의 Destination Unreachable을 보내준다.
<br><br>
- **Protocol Identifier** (8bit)
  - 어떤 프로토콜을 사용하는지 명시하는 필드이다.
|Protocol Number|Protocol Type|
|:---:|:---:|
|1|ICMP|
|2|IGMP|
|6|TCP|
|17|UDP|
<br><br>
- **Header Checksum** (16bit)
  - IP Header가 생성되거나 수정될 때마다 IP 헤더 내 비트를 검사한다.
  - IP 패킷이 전송되고 계산 결과가 똑같다면, IP헤더는 문제 없이 정확히 전송된 것이다.
  - 계산방법 : 2byte씩 IP헤더를 모두 잘라 더한 후에 발생한 올림영역까지 더해준 후, 1의 보수(비트반전)을 시켜준다.
<br><br>
- **Source IP Address** - 32bit
  - 출발지 IP 주소
<br><br>
- **Destination IP Address** - 32bit
  - 목적지 IP 주소
<br><br>
- IP Option (가변 bit)
  - Type-of-Service 플래그처럼 특별한 처리 옵션을 추가로 정의할 수 있다.


<br><br>

## IPv6 header 구조 (번외)
![ipv6](/images/TIL/CS-Network/ipv6.png)
