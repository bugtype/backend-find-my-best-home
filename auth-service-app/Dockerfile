FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 1000

# ./gradlew build && java -jar build/libs/service.token-0.1.0.jar
ARG JAR_FILE=build/libs/service.token-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} service.token.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/service.token.jar"]
