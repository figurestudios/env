FROM node:alpine
COPY . /app
WORKDIR /app
ENV OURCUSTOMENV="old env"
ENV SKYLINK=""
RUN npm install fs --save
RUN npm install dotenv --save
RUN npm install @nebulous/skynet --save
CMD [ "node", "main.js", "env"]