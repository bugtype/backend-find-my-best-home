## 설명

- 구현중

## TODO

- Docker
- CI/CD
- DDD
- CQRS, Event Sourcing

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

## elk 연동

### STEP 1

https://github.com/deviantony/docker-elk 를 통해서 elk 를 구축한다.

### STEP 2

logstash에다가 filebeat 셋팅을 한다.( logstash.conf )

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
