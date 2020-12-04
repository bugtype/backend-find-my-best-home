FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 1000

# ./gradlew build && java -jar build/libs/service.user-0.1.0.jar
ARG JAR_FILE=build/libs/service.user-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} service.user.jar

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/service.user.jar"]
