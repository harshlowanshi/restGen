import axios from "axios"

const restAdd =async(restDate)=>{
const response = await axios.post("https://restgen.onrender.com/api/data",restDate)
return response.data
}

const service ={restAdd}

export default  service