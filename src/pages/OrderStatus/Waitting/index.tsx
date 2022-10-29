import { HiRefresh } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./waiting.css"

type Props = {};

const Waitting = (props: Props) => {
  return (

    <div>

      <div className="m-auto max-w-full pb-36 mt-5">
        <div className="mt-5 md:mt-0 md:col-span-2">
        <table className="table-auto w-full ">
          <thead className="pb-10 ">
            <tr className="text-left ">
              <th className=" font-semibold pb-5">STT</th>
              <th className=" font-semibold pb-5 text-center">Sản phẩm</th>
              <th className="font-semibold pb-5">Tổng tiền</th>
              <th className="font-semibold pb-5">Trạng thái đơn hàng</th>
              <th className="font-semibold pb-5">Chi tiết đơn hàng </th>
              <th className="font-semibold pb-5">Hành động</th>
            </tr>
          </thead>
          <tbody className="w-full">
          <tr className="border-t-2">
            <td className=" py-10  gap-8">1</td>  
            <td className="prod py-10 gap-8 inline-flex ml-[40px]">
             <div className="img-item w-[190px] h-[190px] overflow-hidden pt-4">
                <img src="https://res.cloudinary.com/assignment22/image/upload/v1666929320/Ass-reactjs/%C3%A1o_hqugdy.jpg" alt="Áo thun" />
             </div>
             <div className="pt-3">
                <div className="w-[330px] break-words">
                    <span className="text-[17px] ">Áo thun nam Teelab sieu chat luong thoang mat cho mua he nang dong</span>
                </div>
                <div className="text-[15px] text-gray-500 pt-[10px]">Phân loại hàng : <b> M</b></div> 
                <div className="text-[15px] text-gray-500 pt-[7px] flex">Màu săc : <p className="w-[20px] h-[20px] bg-red-600 ml-2"></p></div>  
                <div className="text-[15px] text-gray-500 pt-[7px]">Số lượng : 2</div>  
                <div className="sales  w-[110px] pt-[8px]"> <p className="text-[#ee4d2d] text-[11px]">7 ngày đổi trả hàng</p> </div>            
              </div> 
            </td>  
            <td className=" py-10  gap-8"> 200.000 VND</td>  
            <td className="py-10  gap-8 text-red-600 ">Đang chờ xác nhận</td>  
            <td className=" py-10  gap-8 "> <button className="btn">Chi tiết sản phẩm</button></td>  
            <td className="py-10  gap-8">
              <form  className='flex flex-col pt-7'>
                <select className='max-w-[190px] my-[6px] py-[5px] outline-none'>
                  <option >Tiến hành giao hàng</option>
                  <option >Chưa xác nhận</option>
                </select>
                <button className='max-w-[150px] bg-[#ee4d2d] text-[#fff] rounded py-[5px]' type='submit'>Gửi</button>
              </form>
              
              </td>
          </tr>
          
          </tbody>
         
        </table>
        </div>
      </div>
    </div>

  );
};

export default Waitting;
