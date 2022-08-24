import express from "express";
import routes from "./routes/userRoutes.js";
import "./database/connect.js";














const app = express();
app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server started at port ${port}.`);
})