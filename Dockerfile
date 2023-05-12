FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY 05heroesapp.jar 05heroesapp.jar
EXPOSE 8081
ENTRYPOINT exec java $JAVA_OPTS -jar 05heroesapp.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
#ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar 05heroesapp.jar
