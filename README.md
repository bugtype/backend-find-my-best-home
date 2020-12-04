
프론트 : https://github.com/bugtype/frontend-find-my-best-home

# Backend API

### 프로젝트 흐름

#### 이전

![](docs/backend-flow.png)


#### Next (재 설계 - 작업 중)
![](docs/backend-flow-next.png)


#### Folder 

- `api-gateway` - Spring Cloud Zuul 를 이용하여 구현. 인증, 로깅 등을 할 예정이다.

- Board-service
  
  - `board-service-nginx` - nginx를 이용하여 load balancing을 하였다. ( 폴더 명 변경 예정 ) 
  
  - `board-service-app` - nextJs를 이용하여 구현하였다. Spring 처럼 어노테이션, DI 등이 가능하다.

  - `board-service-database` - Mysql, 유저입장에서 자주사용하는 곳이므로 Cache 용도로 Redis응 별도록 만들 예정이다.
  
- User Service

  - `user-service-app` - User 관련을 조회한다. 현재 db는 임시로 h2를 이용하여 구현하였다.

  - `user-service-proxy` - User 서비스를 load balancing 용도로 만들 예정이다. HAProxy

- `filebeat` - 지금은 사용 X, 예전 인프라에서 nginx 로깅에 사용하였다.
 

### 이렇게 설계한 이유는 ?

#### 책임 분리

- Monolithic은 규모가 커질수록 불필요한 리소스가 커진다. 예를 들어서 쇼핑몰 웹 사이트가 있다고 해보자. 예를 들어서, 1일에 상품 조회 요청 쿼리가 100만번 요청이 있는데... 상품 조회가 100만이라고 해서, 결제 서비스를 똑같이 100만 번 호출하지는 않느다. 누구는 구매를 하고, 누구는 안하기 때문이다. 근데 모놀리식으로 구현하면, 같이 `Scale out`을 해야한다. 불필요한 리소스가 늘어나는 것이다. 서비스 분리를 통해서 스트레스를 많이 받는 서비스만 `Scale Out`할 수 있다.

#### 추후 서비스간의 결합도를 낮추기 위한 분리

- 추후 Event Driven하게 구현 ! - 현재 Event Driven하게 구현 되어 있지 않지만, Event Driven하게 구현하면 결합도를 낮출수 있다. `구매 알림, 결제 알림, 배송 알림 기능`이 있다고 해보자. 그러면 구매, 배송, 결제 Service는 `Notification Service`에 대한 의존성이 생긴다. 서비스가 커지고, 알림기능이 많아지면... 엄청난 결합도가 생기고 만다. :( 만약 Event Driven하게 구현하면 `Service`는 Event만 발생하면 되기 때문에, Notification에 대한 의존성을 없앨 수 있다.
-  `Notification Service`는 Event Message Queue를 구독하고 있다가 Event가 오면 처리하면 된다. :) 

#### Cross-cutting concern 코드를 API Gateway에서 관리

- API Gateway를 통해서, 인증, 로깅, 라우팅 처리할 수 있다. Spring에서 Cross-cutting concern를 AOP로 구현하는데, MSA에서 하게 되면, 모든 서비스에 공통코드로 들어가게 된다. 예를 들어서 서비스가 100개가 있다고 하면, 100개 서비스에 인증 절차 코드가 있다. 😭 
-  이러한 공통코드를 API Gateway에서 처리 가능하다. 인프라 Filter(Spring의 Filter)라고 생각하면 될 듯 하다.

- API의 version 관리도 편하게 할 수 있다.



---

## 기술 스택

- API Gateway ( spring cloud zuul )
- Load balancer ( nginx )
- Spring boot
- NodeJs
- Docker
- Mysql
- Nginx
- NestJs
- Swagger
- ELK (Elasticsearch, Logstash, Kibana)
- Typescript


---

## Board 서비스 시작 및 테스트

### 샘플 데이터

```
# 샘플 데이터 생성
curl -X POST http://localhost/api d
// 샘플 데이터가 생성되었습니다.
```

### Scale

```
# 1. 스케일링
docker-compose up -d --scale app=3

# 2. nginx 재시작
docker exec board-service-nginx nginx -s reload

# 3. 확인
# board service LB
curl -X GET http://localhost:8000/api/boards
```

## API 확인

http://localhost/api

```
curl -X GET http://localhost/api/boards?page=1
```

---

### User 서비스 시작 및 테스트

TODO

<!-- ~~## ELK 연동

### STEP 1

https://github.com/deviantony/docker-elk 를 통해서 ELK를 구축한다.

- Elasticsearch 
- Logstash 
- Kibana

### STEP 2

- logstash에다가 filebeat 셋팅을 한다.( logstash.conf )
- **Expose 포트** 확인

```
input {
	tcp {
		port => 5000
	}
	beats {
    	port => 5044
  	}
}

``` -->