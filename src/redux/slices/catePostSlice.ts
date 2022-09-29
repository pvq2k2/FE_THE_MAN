import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCatePost } from "../../api-cilent/CatePost";
import { ICatePost } from "../../models/CatePost";
interface ICatePostState{
    cateposts:ICatePost[];
    catepost:ICatePost|{};
}
const initialState:ICatePostState={
    cateposts:[],
    catepost:{}
}
export const addCatePost = createAsyncThunk(
    "catepost/create",
    async(catepost:ICatePost)=>{
    const res = await createCatePost(catepost);
    return res
})
const catePostSlice = createSlice({
    name:"catepost",
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(addCatePost.fulfilled,(state,{payload})=>{
            state.cateposts.push(payload as ICatePost)
        })
    }
})
export default catePostSlice.reducer;