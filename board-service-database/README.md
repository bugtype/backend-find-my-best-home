


### 추후 해보고 싶은 거...

Database Clustering, Replication 둘다 이중화로 사용되지만 여전히 데이터 손실 문제가 여전히 있다. Slave에게 데이터를 넘기기전에 master가 장애가 발새한다던가... 데이터 불일치성이 발생한다. 그래서 보안된 것이 MMM(Multi - Master Replication Manager)이 있다. MMM은 Monitor를 두고 Master-Master(Read)-Slave로 두는 방식이다. 그러나... 이것 또한 문제가 발생한다. 그리고 나서 보완한 것이 **MHA(Master High Availability)** 인데 한번 시도해보고 싶다.

https://jwdeveloper.tistory.com/215