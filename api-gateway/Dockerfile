FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 80

# ./gradlew build && java -jar build/libs/service.user-0.1.0.jar
ARG JAR_FILE=build/libs/apigateway-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} apigateway.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/apigateway.jar"]
