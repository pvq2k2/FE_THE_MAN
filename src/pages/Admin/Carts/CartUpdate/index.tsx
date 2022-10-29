import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiOutlineCheck, HiOutlineX, HiRefresh } from 'react-icons/hi'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCatePost, updateCatePost } from '../../../../redux/slices/catePostSlice'
import { readOrder } from '../../../../redux/slices/orderSlice'
import { useAppDispatch } from '../../../../redux/store'



const CartUpdate = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate();
  const { id } = useParams();
  const {register,handleSubmit,formState:{errors}, reset}=useForm();
  const order = useSelector((state:any) => state.orders)
 
  
  let sum = 0
  const onUpdate = (data: any) => {
            console.log("dat",data);
          //  navigate(`/admin/carts`)
          console.log(order, " console.log(order);");
  }
  useEffect(() => {
    (async () => {
      const carts = await dispatch(readOrder(id!));
      reset(carts?.payload);
    })();
  }, [id, dispatch, reset]);
  return (
    <div>
      <div className='ml-[40px] mx-8'>
        <header className="bg-white ">
          <div className="max-w-7xl mx-auto py-6   flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Chi tiết đơn hàng</h1>
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
                <th className=" font-semibold pb-10">Thông tin người nhận</th>
                <th className=" font-semibold pb-10">Thông tin vận chuyển</th>
                <th className="font-semibold pb-10">Thời gian đặt hàng</th>
                <th className="font-semibold pb-10">Tổng tiền</th>
                <th className="font-semibold pb-10">Hành động</th>
              </tr>
            </thead>
            <tbody className="w-full">
            <tr className="border-t-2">
              <td className=" py-10  gap-8 text-[15px]"> 
                  <div><b>Họ tên: </b> {order?.order?.infomation?.fullname}</div>
                  <div><b>Email:</b> {order?.order?.infomation?.email}</div>
                  <div><b>Địa chỉ: </b> {order?.order?.infomation?.address}</div>
                  <div><b>Số điện thoại: </b> {order?.order?.infomation?.phonenumber}</div>
               </td>  
              <td className=" py-10  gap-8"> </td>  
              <td className=" py-10  gap-8">{order?.order?.createdAt} </td>             
              <td className=" py-10  gap-8"> { <NumberFormat
                            value={order?.order?.totalprice}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />
                          }VNĐ</td>  
              <td className="py-10  gap-8 outline-none">
                <h2 className='my-[10px]'>Xác nhận đơn hàng: </h2>
                <form onSubmit={handleSubmit(onUpdate)} className='flex flex-col'>
                  <select {...register("status")} className='max-w-[150px] my-[5px] py-[10px]'>
                    <option value={0}>Đang xử lý</option>
                    <option value={1}>Xác nhận</option>
                  </select>
                  <button className='max-w-[150px] bg-blue-300 py-[5px]' type='submit'>Gửi</button>
                </form>
                
                </td>  
            </tr>
            
            </tbody>
           
          </table>
          <table className="table-auto w-full ">
            <thead className="pb-10 ">
              <tr className="text-left ">
              <th className=" font-semibold pb-10">STT</th>
                <th className=" font-semibold pb-10">Sản phẩm</th>
                <th className=" font-semibold pb-10">Màu sắc  </th>
                <th className="font-semibold pb-10">Số lượng</th>
                <th className="font-semibold pb-10">Tổng tiền</th>
              </tr>
            </thead>
            <tbody className="w-full">
             {order?.order?.product?.map((item:any, index:number) => {
              
              {sum += item.quantity * item.price}
              
              
              return <tr key={index++} className="border-t-2">
                   <td className="w-40">
               
               <span className="px-6">{index ++}</span>
               
             </td>
              <td className="flex py-10  gap-8">
                <img src={item.image} className="w-20"></img>
                <div className="pt-4">
                  <p className='text-[16px]'>{item.name}</p>
                  <p className=' text-gray-500'>Giá: <NumberFormat className="font-bold"
                  value={item?.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />{" "} <span className="font-bold">VNĐ</span>  </p>
                <p className=' text-gray-500'>Kích cỡ: <b>{item.size}</b></p>
                </div>
              </td>
              <td className="w-40">
              <div className="font-bold flex">  <div style={{ backgroundColor: `${item.color}` }} className="h-[35px] w-[50px] rounded" ></div></div>
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
        
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartUpdate