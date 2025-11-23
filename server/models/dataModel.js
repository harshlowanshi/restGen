const { mongoose } = require("mongoose");

const dataSchma = new mongoose.Schema({
dataObj :{
    type:Object ,
    require:[true,"please add data"]
}
},{
    TimesTamps : true
})

module.exports= mongoose.model("Data",dataSchma)