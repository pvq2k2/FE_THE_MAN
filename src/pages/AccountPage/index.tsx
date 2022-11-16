import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';

type Props = {}

const AccountPage = (props: Props) => {

  let isLogged = useSelector((state: any) => state.auth.isLogged);
  let currentUser = useSelector((state: any) => state.auth.currentUser) as User;
  if (localStorage.getItem("user")) {
    (isLogged = true),
      (currentUser = JSON.parse(localStorage.getItem("user") || "{}"));
  }
  console.log(currentUser);
  
  return (
    <div className='p-40'>
        <section className="grid grid-cols-2 grid-flow-row-dense gap-2">
        <div className="logo flex gap-5 items-center">
            <img src={`${currentUser?.users?.fullname}`} className="bg-left-top bg-no-repeat h-40 w-40" alt="" />
            <div>
                <h4 className="font-bold text-lg">{currentUser?.users?.email}</h4>
                <Link to={`/editaccount/${currentUser?.users?.id}`} className="sm:ml-3">
                <button>Sửa Thông Tin Tài Khoản</button>
        </Link>
            </div>
            
          </div>
          <div className='pl-20'>
            <h1 className='text-4xl'>Thông Tin Người Dùng</h1>

            <div className='m-2'>
                <div className='text-xl pb-2'>Email: </div>
                <div className='text-lg pb-2'>{currentUser?.users?.email}</div>
                <div className='text-xl pb-2' >Họ Tên :</div>
                <div className='text-lg pb-2'>{currentUser?.users?.fullname}</div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AccountPage