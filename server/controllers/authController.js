const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

const registerUser=async(req ,res)=>{

    let {name ,email,phone,password}= req.body

    if(!name || !email || !phone || !password ){
        res.status(400)
        throw new Error("Please Fill All Details")
    }

    if(phone.length !== 10){
res.status(400)
throw new Error("Please Enter Vaild Numbare")
    }

    // Check if user already exists
    let emailExist = await User.findOne({ email: email })
    let phoneExist = await User.findOne({ phone: phone })

    if(emailExist || phoneExist){
        res.status(400)
        throw new Error("User Already Exist")
    }


    // hash password 
    const salt =  await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)


    const user = await User.create({
        name,
        email,
        phone,
        password:hashPassword
    })

    if(!user){
        res.status(400)
        throw new Error("User Not Created")
    }

    res.status(200).json({
        name:user.name,
        email:user.email,
        phone:user.phone,
        password:user.password,
        _id:user._id
        
    })
  
}

const loginUser=async(req ,res)=>{

    const {email,password}=req.body

    if(!email || !password){
        res.status(400)
        throw new Error("Please Fill All Detail's")
    }

    const user = await User.findOne({email})

    if(user && await bcrypt.compare(password,user.password)){
        res.status(201).json({
            name:user.name,
            email:user.email,
            phone:user.phone,
            password:user.password,
            _id:user._id
        })

    }else{
        res.status(400)
        throw new Error("invalid cradentials")
    }

    
}

module.exports= {registerUser,loginUser}