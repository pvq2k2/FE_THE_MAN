import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../store";

type Province = {
  province: [],
  district: [],
  ward: []
};

const initialState: Province = {
    province: [],
    district: [],
    ward: []

};


export const getProvince  = createAsyncThunk("provinces/getprovinces", async () => {
    const res = await axios.get("https://online-gateway.ghn.vn/shiip/public-api/master-data/province", {
        headers: {
            'token': '422b151b-4b63-11ed-8008-c673db1cbf27'
        }
    })
    return res.data.data
            
})
export const getDistrict  = createAsyncThunk("provinces/getdistrict", async (id: number) => {
   
    const province = {
        'province_id': parseInt(id)
    }  
   
   const res = await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/district', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'token': '422b151b-4b63-11ed-8008-c673db1cbf27'
      },
      body: JSON.stringify(province),
    }).then((response) => response.json())
    .then((data) => {
        return data
    }
    );
    return res.data
    
            
})



const provinceSlice = createSlice({
  name: "provinces",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(getProvince.fulfilled, (state, { payload }) => {
      state.province = payload as any;
    });
    builder.addCase(getDistrict.fulfilled, (state, { payload }) => {
        state.district = payload as any;
        console.log("load", payload);
        
      });
  },
});

export default provinceSlice.reducer;
export const { setPage } = provinceSlice.actions;
