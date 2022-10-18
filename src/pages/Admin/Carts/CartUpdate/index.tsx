import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiOutlineCheck, HiOutlineX, HiRefresh } from 'react-icons/hi'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { readCart, updateStatusCart } from '../../../../redux/slices/orderSlice'
import { getCatePost, updateCatePost } from '../../../../redux/slices/catePostSlice'
import { useAppDispatch } from '../../../../redux/store'



const CartUpdate = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate();
  const { id } = useParams();
  const {register,handleSubmit,formState:{errors}, reset}=useForm();
  const carts = useSelector((state:any) => state.carts.cart)
  console.log(carts);
  let sum = 0
  const onEditCart = (data: any) => {
            dispatch(updateStatusCart(data))
            navigate(`/admin/carts`)
  }
  useEffect(() => {
    (async () => {
      const carts = await dispatch(readCart(id));
      console.log("ca", carts);
      
      reset(carts?.payload);
    })();
  }, [id, dispatch, reset]);
  return (
    <div>
      <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Cập nhật trạng thái đơn hàng</h1>
            <Link to="/admin/carts" className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <HiRefresh className="text-[20px] mr-2" />
                Quay lại
              </button>
            </Link>
          </div>
        </header>
        <div className="m-auto max-w-7xl pb-36 mt-5">
          <div className="mt-5 md:mt-0 md:col-span-2">
          <table className="table-auto w-full ">
            <thead className="pb-10 ">
              <tr className="text-left ">
                <th className=" font-semibold pb-10">Sản phẩm</th>
                <th className=" font-semibold pb-10">Màu sắc / Kích cỡ </th>
                <th className="font-semibold pb-10">Số lượng</th>
                <th className="font-semibold pb-10">Tổng tiền</th>
              </tr>
            </thead>
            <tbody className="w-full">
             {carts?.product?.map((item:any) => {
              
              {sum += item.quantity * item.price}
              
              
              return <tr className="border-t-2">
              <td className="flex py-10  gap-8">
                <img src={item.image} className="w-20"></img>
                <div className="pt-7">
                  <p>{item.name}</p>
                  <p className="font-bold"> <NumberFormat
                  value={item?.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />{" "} VNĐ</p>
                </div>
              </td>
              <td className="w-40">
              <div className="font-bold flex">  <div style={{ backgroundColor: `${item.color}` }} className="h-[20px] w-[20px] rounded-[50%]" ></div> / {item.size}</div>
              </td>
              <td className="w-40">
               
                <span className="px-6">{item.quantity}</span>
                
              </td>
              <td className="font-bold"> <NumberFormat
                  value={item?.price * item?.quantity}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                /> VNĐ </td>
              <td>
                <button>
                  <i className="fa-sharp fa-solid fa-circle-xmark text-slate-300 bg-black rounded-full shadow-md shadow-black text-3xl"></i>
                </button>
              </td>
            </tr>

           
              
             })}
            
            </tbody>
           
          </table>
          <h2 className='font-bold text-[20px] my-[20px]'>Thông tin người nhận:</h2>
          <table className="table-auto w-full ">
            <thead className="pb-10 ">
              <tr className="text-left ">
                <th className=" font-semibold pb-10">Họ tên</th>
                <th className=" font-semibold pb-10">Địa chỉ </th>
                <th className="font-semibold pb-10">Số điện thoại</th>
                <th className="font-semibold pb-10">Tổng tiền</th>
                <th className="font-semibold pb-10">Hành động</th>
              </tr>
            </thead>
            <tbody className="w-full">
            
              
              
               <tr className="border-t-2">
               <td className="font-bold"> 
               {carts?.infomation?.fullname}
                 </td>
                 <td className="font-bold"> 
               {carts?.infomation?.address}
                 </td>
                 <td className="font-bold"> 
               {carts?.infomation?.phonenumber}
                 </td>
                 <td className="font-bold"> <NumberFormat
                  value={sum}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                /> VNĐ
                 </td>
                 <td className="font-bold"> 
                        <form onSubmit={handleSubmit(onEditCart)}>
                            <select {...register('status')} className="p-[5px] my-[5px]">
                                <option value="">Bấm vào để chọn</option>
                                <option value="0">Đang xử lý</option>
                                <option value="1">Đã gửi</option>
                            </select>
                            <button type='submit' className='bg-blue-300 p-[10px] rounded-[5px]'>Xác nhận</button>
                        </form>
                 </td>
             
            </tr>

           
              
            
            
            </tbody>
           
          </table>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartUpdate