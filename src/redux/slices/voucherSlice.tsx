import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { checkVoucherApi } from "../../api-cilent/Voucher";

type Ivoucher = {
      voucher: {}
};

const initialState: Ivoucher = {
    voucher: {}
};


export const checkVoucher = createAsyncThunk("voucher/checkvoucher", async (data:any) => {
    const res = await checkVoucherApi(data)
    if(res?.data?.code == 404) {
        return toast.error(res?.data?.message)
    }else if(res?.data?.code == 495) {
      return toast.error(res?.data?.message)
    }else if(res?.data?.code == 496) {
      return toast.error(res?.data?.message)
    }else if(res?.data?.code == 498) {
      return toast.error(res?.data?.message)
    }else if(res?.data?.code == 499) {
      return toast.error(res?.data?.message)
    }else if(res?.data?.code == 500) {
      return toast.error(res?.data?.message)
    }
    const response = {
      ...res.data,
      code: 200
    } 
    return response
})



const voucherSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(checkVoucher.fulfilled, (state, { payload }) => { 
          if(payload.code == 200){
            state.voucher = payload
          }
          
    })
  },
});

export default voucherSlice.reducer;

export const { setPage } = voucherSlice.actions;