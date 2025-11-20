const express = require("express")
const { addData, getAllData, getSingleData } = require("../controllers/dataController")

const router = express.Router()

router.post("/data",addData)
router.get("/data",getAllData)
router.get("/data/:id",getSingleData)

module.exports = router