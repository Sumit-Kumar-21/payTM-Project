const mongoose = require("mongoose") ;

const dataBaseConnect = (url)=>{

    mongoose.connect(url).then(()=>console.log("DataBase Connected"));
}

module.exports = {dataBaseConnect};