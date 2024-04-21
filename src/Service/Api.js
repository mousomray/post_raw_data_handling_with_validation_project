import axios from "axios"

// Data is fetch in one time 
const API_URL = 'https://tureappservar.onrender.com/student/create'

// For put Data in post API. (Use this function in Adduser.jsx file);
export const addStudent = async (data) => {
    try {
        return await axios.post(API_URL, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}