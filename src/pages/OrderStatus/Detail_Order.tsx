import React from 'react'
import { HiRefresh } from 'react-icons/hi'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'

const Detail_Order = () => {
  return (
    <div>
              <div className='ml-[40px] mx-8'>
        <header className="bg-white ">
          <div className="max-w-7xl mx-auto py-6   flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Chi tiết đơn hàng</h1>
            <Link to="/order" className="sm:ml-3">
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
                <th className="font-semibold pb-10">Phí giao hàng</th>
                <th className="font-semibold pb-10">Tiền hàng</th>
                <th className="font-semibold pb-10">Tổng tiền</th>
                <th className="font-semibold pb-10">Hành động</th>
              </tr>
            </thead>
            <tbody className="w-full">
            <tr className="border-t-2">
              <td className=" py-10  gap-8 text-[15px]"> 
                  <div><b>Họ tên: </b> Đào ngọc linh</div>
                  <div><b>Email:</b> daongoclinh22@gmail.com</div>
                  <div><b>Địa chỉ: </b> Hà nội </div>
                  <div><b>Số điện thoại: </b> 1988973942</div>
               </td>  
              <td className=" py-10  gap-8"> 
                  
                  <div><p  className='text-[#d53b3bcc]'>2 giờ 30 phút</p><p className='text-[#26aa99] border-solid'>đang chờ </p></div>
                
              </td>  
              <td className="py-10  gap-8"> <p>2 tiếng</p> <p>50 tiếng</p></td>
              <td className=" py-10  gap-8"> 200.333 VNĐ</td>   
              <td className=" py-10  gap-8"> 3243 VNĐ</td>            
              <td className=" py-10  gap-8"> 3243243 VNĐ</td>  
              <td className="py-10  gap-8 outline-none">
                <h2 className='my-[10px]'>Xác nhận đơn hàng: </h2>
                <form  className='flex flex-col '>
                  <select className='max-w-[150px] my-[5px] py-[10px] border-[1px] border-[#333] rounded outline-none'>
                    <option >Đang xử lý</option>
                    <option>Xác nhận</option>
                    <option >Huỷ đơn hàng</option>
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
             
              
              
             <tr className="border-t-2">
                   <td className="w-40">
               
               <span className="px-6">1</span>
               
             </td>
              <td className="flex py-10  gap-8">
                <img src='https://res.cloudinary.com/assignment22/image/upload/v1666929320/Ass-reactjs/%C3%A1o_hqugdy.jpg' className="w-20"></img>
                <div className="pt-4">
                  <p className='text-[16px]'>áo rét</p>
                  <p className=' text-gray-500'>Giá: <NumberFormat className="font-bold" /><span className="font-bold">VNĐ</span>  </p>
                <p className=' text-gray-500'>Kích cỡ: <b>M</b></p>
                </div>
              </td>
              <td className="w-40">
              <div className="font-bold flex">  <div style={{ backgroundColor: `red` }} className="h-[35px] w-[50px] rounded" ></div></div>
              </td>
              <td className="w-40">
               
                <span className="px-6">20</span>
                
              </td>
              <td className="font-bold"> <NumberFormat  /> VNĐ </td>
              <td>
                <button>
                  <i className="fa-sharp fa-solid fa-circle-xmark text-slate-300 bg-black rounded-full shadow-md shadow-black text-3xl"></i>
                </button>
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

export default Detail_Order