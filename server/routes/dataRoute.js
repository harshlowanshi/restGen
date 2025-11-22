const express = require("express")
const { addData, getAllData, getSingleData } = require("../controllers/dataController")

const router = express.Router()

router.post("/data",addData)
router.get("/restDataDB",getAllData)
router.get("/restData/:id/:dbName",getSingleData)

module.exports = router