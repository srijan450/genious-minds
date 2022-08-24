import mongoose from "mongoose";
import { config } from "dotenv";
config();
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@genious-minds.tfscyyp.mongodb.net/?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch((e) => {
    console.error(`error\n${e}`);
});