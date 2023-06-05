import axios from "axios"


var URL = "http://127.0.0.1:8000/api/"

const login = async (loginData)=>{
   
    console.log(loginData)
    return await axios.post(URL+'login/',loginData)
    .then(res =>{
        let token =res.data.access;
        let username =res.data.username;
        console.log(loginData)
        console.log(token ,username)
        // let username=res.data.user?.username
        console.log("first here ")
        if(token){
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
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
    let data = {
            "name":registerData.username,
            "email":registerData.email,
            "password":registerData.password
        }
    return await axios.post(URL+'register/', data)
    .then(res =>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("username", res.data.username);
        console.log(res.status)
        return res.status;
    })
    .catch(err => {
        console.error(err)
        return err.status
        }
    )
}
const getUser =(id) =>{

}
const logout =( ) =>{
    localStorage.clear();
    window.location.reload();
}
const IsAuthenticated =() =>{
    let token = localStorage.getItem('token')
    return token ? true : false
}
export {
    login,
    register,
    getUser,
    logout,IsAuthenticated
}