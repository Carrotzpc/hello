# Dockerfile to create a docker image
FROM index.tenxcloud.com/docker_library/node:4.2.5
# 中文测试
RUN echo test for webhook 222
# Add files to the image
RUN mkdir -p /opt/nodejs
ADD . /opt/nodejs
WORKDIR /opt/nodejs

# Expose the container port
EXPOSE 5000

ENTRYPOINT ["node", "index.js"]
