import mongoose from "mongoose";

export const dataBaseConnect = (url)=>{

    mongoose.connect(url).then(()=>console.log("DataBase Connected"));
}

