## 설명

- 구현중

### Flow

![](docs/backend-flow.png)

- 구현중

## 샘플 데이터

```
# 샘플 데이터 생성
curl -X POST http://localhost:3000/boards
```

## API 확인

http://localhost:3000/api

```
curl -X GET http://localhost:3000/boards?page=1
```

## ELK 연동

### STEP 1

https://github.com/deviantony/docker-elk 를 통해서 ELK를 구축한다.

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

## TODO

- CI/CD
- DDD
- CQRS, Event Sourcing
- Cache
- Stream(kafka)
- k8s (GCP)
