import express from "express";
import helmet from "helmet";
import shop from "./routes/shop";
import auth from "./routes/auth";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(helmet());

app.use(auth);
app.use(shop);

app.listen(PORT);
