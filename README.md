# Backend API

## 설명

### 프로젝트 흐름

![](docs/backend-flow.png)

#### API 요청

1. 유저가 요청을 합니다.
2. nginx를 통해서 load balancing을 합니다. ( 현재 layer 7 )
3. app에 응답을 하게 되고, 필요에 따라 DB와 통신을 하며, 유저에게 데이터를 보냅니다.

#### 로그

1. 유저가 요청을 하면 nginx에 로그가 쌓입니다.
2. nginx 로그는 filebeat와 volume이 공유되어 있습니다.
3. 공유된 file을 logstash로 보냅니다.
4. logstash는 parse, filter, transform 된 로그를 elasticsearch로 보냅니다.
5. kibana는 elasticsearch로 데이터를 받아와서 보여줍니다.

- nginx, filebeat는 volume을 공유하고 있습니다.

---

## 기술 스택

- NodeJs
- Docker
- Mysql
- Nginx
- NestJs
- Swagger
- ELK (Elasticsearch, Logstash, Kibana)

## ELK 연동

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

```

---

## 테스트

### 샘플 데이터

```
# 샘플 데이터 생성
curl -X POST http://localhost/boards
// 샘플 데이터가 생성되었습니다.
```

### Scale

```
# 1. 스케일링
docker-compose up -d --scale app=10

# 2. nginx 재시작
docker exec house-nginx nginx -s reload

# 3. 확인
curl -X GET http://localhost
// appId : 373682 / Hello World!
// appId : 457576 / Hello World!
```

## API 확인

http://localhost/api

```
curl -X GET http://localhost/boards?page=1
```

---

## TODO (?)

- CI/CD
- DDD
- CQRS, Event Sourcing
- Cache
- Stream(kafka)
- k8s (GCP)
