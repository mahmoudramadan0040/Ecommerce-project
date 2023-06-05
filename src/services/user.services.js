import axios from "axios"


var URL = "http://127.0.0.1:8000/"

const login = async (loginData)=>{
   
    console.log(loginData)
    await axios.post(URL+'login',loginData)
    .then(res =>{
        const {token ,username} = res;

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        console.log(res)
        console.log(token)
    })
    .catch(err => console.error(err))
}
const register = async(registerData)=>{
    console.log(registerData)
    await axios.post(URL+'signup', registerData)
    .then(res =>{
        localStorage.setItem("token", res.data)
    })
}
const getUser =(id) =>{

}
export {
    login,
    register,
    getUser
}