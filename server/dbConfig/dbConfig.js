const { default: mongoose } = require("mongoose")

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB CONNECTION CONECT SUCCESSFULL : ${conn.connection.name}`)
    } catch (error) {
        console.log(`DB CONNECTION FUIL : ${error.message}`)
    }
}

module.exports =connectDB