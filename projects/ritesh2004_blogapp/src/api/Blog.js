import axios from "axios"
import toast from "react-hot-toast"

export const uploadBlog = async (title, description, imageURL) => {
    try {
        const { data } = await axios.post("https://blog-api-6yz2.onrender.com/api/v1/blog/add", {
            title, description, imageURL
        }, {
            withCredentials: true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
    }
}

export const getallBlogs = async () => {
    try {
        const { data } = await axios.get("https://blog-api-6yz2.onrender.com/api/v1/blogs/all");
        return data
    } catch (error) {
        alert("Something went wrong! Try again later")
    }
}

export const myBlogs = async () => {
    try {
        const { data } = await axios.get("https://blog-api-6yz2.onrender.com/api/v1/blogs/my",{
            withCredentials:true
        });
        return data;
    } catch (error) {
        alert("Something went wrong! Try again later")
    }
}

export const getBlog = async (id) => {
    try {
        const { data } = await axios.get(`https://blog-api-6yz2.onrender.com/api/v1/blog/${id}`,{
            withCredentials:true
        });
        return data;
    } catch (error) {
        alert("Something went wrong! Try again later")
    }
}

export const editBlog = async (id,title, description) => {
    try {
        const { data } = await axios.post(`https://blog-api-6yz2.onrender.com/api/v1/blog/edit/${id}`,{
            title,description
        },{
            withCredentials : true
        })
        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const deleteBlog = async (id) => {
    try {
        const { data } = await axios.get(`https://blog-api-6yz2.onrender.com/api/v1/blog/delete/${id}`,{
            withCredentials : true
        })

        toast.success(data.message)
        return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}