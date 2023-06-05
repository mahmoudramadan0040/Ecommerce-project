import axios from "axios"


var URL = "http://127.0.0.1:8000/"

const login = async (loginData)=>{
   
    console.log(loginData)
    return await axios.post(URL+'login',loginData)
    .then(res =>{
        let token =res.data.token;
        
        let username=res.data.user.username
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        console.log(res.data)
        console.log(token)
        console.log(res.status)
        return res.status;
    })
    .catch(err => console.error(err))
}
const register = async(registerData)=>{
    console.log(registerData)
    return await axios.post(URL+'signup', registerData)
    .then(res =>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("username", res.data.username);
    })
}
const getUser =(id) =>{

}
export {
    login,
    register,
    getUser
}