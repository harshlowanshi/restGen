// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux"

// const useAuthStatus =()=>{

//     const {user}=useSelector(state=>state.auth)

//     const [userExit,setUserexit]=useState(false)
//     const [checkingUser,setCheckingUser]=useState(true)

//     useEffect(()=>{
//         user ? setUserexit(true):setUserexit(false)
//         setCheckingUser(false)
//     },[user])
    
//     return{userExit, checkingUser}

// }

// export default useAuthStatus