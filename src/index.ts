import express from "express";
import dotenv from "dotenv";
import cors from "cors";



import { Database } from "./database/configDatabase";
import { routes } from "./routes/index";

dotenv.config();




Database.initialize();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

const port = process.env.PORT||3000;

app.listen(port, () => {
    console.log(`Server on, port ${port}`);
})


