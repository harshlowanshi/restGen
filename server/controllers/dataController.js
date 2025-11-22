
const Data = require("../models/dataModel")

const addData = async(req,res)=>{
  
    const {dataObj} =req.body


    if(!dataObj){
        res.status(400)
        throw new Error("Please Fill Detail")
    }
  
    // create data
    const data = await Data.create({
        dataObj
    })

    if(!data){
        res.status(400)
        throw new Error("Data not Add")
    }

    res.json(data)
}

const getAllData = async(req,res)=>{
    
    const data = await Data.find()

    if(!data){
        res.status(400)
        throw new Error("Data not fund")
    }

    res.json(data)

}

const getSingleData = async(req,res)=>{
  
    const singleData = await Data.findById(req.params.id)

    if(!singleData){
        res.status(400)
        throw new Error("Data not fund")
    }

    res.status(200).json(
        {
            restData:singleData.dataObj
        }
    )

}


module.exports={addData,getAllData,getSingleData}