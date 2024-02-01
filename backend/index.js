import express  from "express";
const port = 3000;

const cors = require('cors');
import { dataBaseConnect } from "./MongooseConnect/paytmDb";
import rootRouter from "./routes/index";


const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//connect database
dataBaseConnect("mongodb+srv://sumit21:********@cluster0.kpmct6i.mongodb.net/payTM");

// route middleware
app.use("/api/v1", rootRouter)


// listen port
app.listen(port,()=>console.log("server started"))