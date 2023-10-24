import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { Database } from "./database/configDatabase.js";
import { routes } from "./routes/index.js";

Database.initialize();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(routes);

const port = process.env.PORT||3000;

app.listen(port, () => {
    console.log(`Server on, port ${port}`);
})


