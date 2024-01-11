import axios from "axios"
import toast from "react-hot-toast"

export const signUp = async (name, username, email, password, profileURL,bio) => {
    try {
        const { data } = await axios.post('https://blog-api-6yz2.onrender.com/api/v1/user/add', {
            name, username, email, password, profileURL,bio
        },{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const logIn = async (email,password)  => {
    try {
        const { data } = await axios.post('https://blog-api-6yz2.onrender.com/api/v1/user/login',{
            email,
            password
        },{
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        })
        toast.success(data.message)
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const verifyUser = async () => {
    try {
        const { data } = await axios.post('https://blog-api-6yz2.onrender.com/api/v1/user/verify',{},{
            withCredentials:true
        })
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const logOut = async () => {
    try {
        const { data } = await axios.post('https://blog-api-6yz2.onrender.com/api/v1/user/logout',{},{
            withCredentials : true
        })
        console.log(data)
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error("Something went wrong!")
    }
}

export const getUser = async (id) => {
    try {
        const { data } = await axios.get(`https://blog-api-6yz2.onrender.com/api/v1/user/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateBio = async (id,bio) => {
    try {
        const { data } = await axios.post(`https://blog-api-6yz2.onrender.com/api/v1/user/update/${id}`,{
            bio
        },{
            withCredentials : true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}