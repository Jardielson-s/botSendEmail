import express from "express";
import router from "./routes/routes";

const server = express();
server.use(express.json());
server.use(router);



server.listen(process.env.PORT_MICROSERVICE, () => {
    console.log(`microservice runnning in port ${process.env.PORT_MICROSERVICE}`);
})