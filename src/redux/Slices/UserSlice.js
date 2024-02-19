import{createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

export const UserLogin=createAsyncThunk("/login",async(data,{rejectWithValue})=>{
try {
    const res=await axios.post("http://localhost:8081/api/user/login",data)
return res.data
} catch (error) {
 return  rejectWithValue(error.response.data.msg) 
}


})
const userSlice=createSlice({
    name:"userSlice",
    initialState:{
        userData:{},
        token:localStorage.getItem('token')||null,
        isLoading:false,
        error:null,
        isAuth:localStorage.getItem('isAuth')||false ,
    }
})
export default userSlice.reducer
