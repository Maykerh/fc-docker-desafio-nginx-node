FROM node:latest

WORKDIR /app

COPY /app .
COPY /start.sh .

RUN chmod +x /app/start.sh

RUN npm install mysql
RUN npm install express

RUN apt update && \
    apt install -y wget netcat && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

EXPOSE 3000