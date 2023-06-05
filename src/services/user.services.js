import axios from "axios"


var URL = "http://127.0.0.1:8000/api/"

const login = async (loginData)=>{
   
    console.log(loginData)
    return await axios.post(URL+'login/',loginData)
    .then(res =>{
        let token =res.token;
    console.log(loginData)
        
        // let username=res.data.user?.username
        console.log("first here ")
        if(token){
            localStorage.setItem("token", token);
            // localStorage.setItem("username", username);
        }
        
        console.log(res)
        console.log(token)
        console.log(res.status)
        return res.status;
    })
    .catch(err => {
        console.error(err)
        return err.status
        }
    )
}
const register = async(registerData)=>{
    console.log(registerData)
    return await axios.post(URL+'register', registerData)
    .then(res =>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("username", res.data.username);
    })
}
const getUser =(id) =>{

}
const logout =( ) =>{
    localStorage.clear();
    window.location.reload();
}
export {
    login,
    register,
    getUser
}