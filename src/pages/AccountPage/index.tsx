import React from 'react'

type Props = {}

const AccountPage = (props: Props) => {
  return (
    <div className='p-40'>
        <section className="grid grid-cols-2 grid-flow-row-dense gap-2">
        <div className="logo flex gap-5 items-center">
            <img src="https://i.pinimg.com/736x/56/86/03/568603cbd1860c67bf8f6776cbe7f885.jpg" className="bg-left-top bg-no-repeat h-40 w-40" alt="" />
            <div>
                <h4 className="font-bold text-lg">truongcmph15429@fpt.edu.vn</h4>
                <button>Sửa Thông Tin Tài Khoản</button>
            </div>
            
          </div>
          <div className='pl-20'>
            <h1 className='text-4xl'>Thông Tin Người Dùng</h1>

            <div className='m-2'>
                <div className='text-xl pb-2'>Email: </div>
                <div className='text-lg pb-2'>truongcmph15429@fpt.edu.vn</div>
                <div className='text-xl pb-2' >Họ Tên :</div>
                <div className='text-lg pb-2'>truongcmph15429@fpt.edu.vn</div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AccountPage