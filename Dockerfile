FROM node:10

COPY . .

RUN npm install

ENTRYPOINT [ "/bin/sh", "-c" ]
