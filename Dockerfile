# Dockerfile used to build a deployable image for Node.Js.
# Adjust as required.
FROM node:14


WORKDIR /app


COPY package*.json ./


RUN npm install


COPY . .

ENV PORT=3000
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_NAME=mydatabase
ENV DB_USER=myuser
ENV DB_PASSWORD=mypassword


EXPOSE $PORT


CMD [ "npm", "start" ]