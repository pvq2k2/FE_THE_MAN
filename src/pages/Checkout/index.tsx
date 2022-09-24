import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const CheckoutPage = (props: Props) => {
  return (
    <div>
      
      <section className="flex gap-8 w-10/12 m-auto py-20">
        <section className="basis-4/6">
          <h4 className="text-2xl font-bold mb-10">THÔNG TIN GIAO HÀNG</h4>
          <table className="table-auto w-full ">
            <label htmlFor="" className="font-semibold">Họ và Tên <span className='text-red-700'>*</span></label><br />
          <input
              className="border w-8/12 py-3 px-2  mt-5 mb-5"
              type="text"
              placeholder="Họ và Tên"
            />
          </table>
          <table className="table-auto w-full ">
            <label htmlFor="" className="font-semibold">Địa chỉ <span className='text-red-700'>*</span></label><br />
          <input
              className="border w-8/12 py-3 px-2  mt-5 mb-5"
              type="text"
              placeholder="Địa chỉ"
            />
          </table>
          <table className="table-auto w-full ">
            <label htmlFor="" className="font-semibold">Số Điện Thoại <span className='text-red-700'>*</span></label><br />
          <input
              className="border w-8/12 py-3 px-2  mt-5 mb-5"
              type="text"
              placeholder="Số Điện Thoại"
            />
          </table>
          <table className="table-auto w-full ">
            <label htmlFor="" className="font-semibold">Email <span className='text-red-700'>*</span></label><br />
          <input
              className="border w-8/12 py-3 px-2 mt-5 mb-5"
              type="text"
              placeholder="Email"
            />
          </table>
          <table className="table-auto w-full ">
            <label htmlFor="" className="font-semibold">Ghi chú</label><br />
          <input
              className="border w-8/12 py-3 px-2  mt-5 mb-5"
              type="text"
              placeholder="Ghi chú"
            />
          </table>
          
          
        </section>
        <section className="basis-2/6 w-full">
          <section className="bg-zinc-100 mt-12">
            <div className="p-10">
              <p className='text-2xl font-bold'>ĐƠN HÀNG CỦA BẠN</p>
              <div>-----------------------------------------------------------</div>
              <div className=" pt-5 flex">
                <span className="grow font-semibold">Sản Phẩm</span>
                <span className="text-right font-semibold">Giá</span>
              </div>
              <div className=" pt-5 flex">
                <span className="grow">01. Vanilla salted caramel</span>
                <span className="text-right ">$ 300.0</span>
              </div>
              <div className=" pt-5 flex">
                <span className="grow">01. Vanilla salted caramel</span>
                <span className="text-right ">$ 300.0</span>
              </div>
              <div className=" pt-5 flex">
                <span className="grow">01. Vanilla salted caramel</span>
                <span className="text-right ">$ 300.0</span>
              </div>
              <div className=" pt-5 flex">
                <span className="grow">01. Vanilla salted caramel</span>
                <span className="text-right ">$ 300.0</span>
              </div>
              <div>-----------------------------------------------------------</div>
              <div className=" pt-5 flex">
                <span className="grow font-semibold">Tạm Tính </span>
                <span className="text-right ">$730.99</span>
              </div>
              <div className=" pt-5 flex">
                <span className="grow font-semibold">Chi phí vận chuyển</span>
                <span className="text-right ">$20</span>
              </div>
              <div className=" pt-5 flex">
                <span className="grow font-semibold">Tổng tiền</span>
                <span className="text-right ">$750.99</span>
              </div>


              <button className="bg-black text-white font-semibold p-3 mt-10 w-full">
              Hoàn tất Đơn hàng
              </button>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}

export default CheckoutPage