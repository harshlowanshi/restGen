import axios from 'axios'

const register = async(formData)=>{
const response = await axios.post('/api/auth/register', formData)
console.log(response.data)
return response.data
}

const service = {register}

export default service