import { Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./assets/detailCateProduct.css"
type Props = {}

const DetailCateProduct = (props: Props) => {
  return (
    <div className='w-10/12 m-auto py-5'>
        <div className=''>
        <nav >
        <ul className="flex font-semibold ">
          <li className="group block relative mx-1 mt-1 text-slate-200 hover:text-blue-400 transition duration-400 ease-in-out">
           <Link to={"/"}>Trang chủ</Link> 
          </li>
          <li className=" block relative mx-1  text-base   text-black duration-400">
            |
          </li>
          <li className=" block relative mx-1 mt-1 text-black transition duration-400">
            Áo Polo
          </li>
          
        </ul>
      </nav>
        </div>
        <div>
        <div className='grid sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 mt-3'>
            <div className='group'>
              <Link to={""}>
                <img className='w-full border-spacing-1 rounded-2xl group-hover:opacity-80' src="http://res.cloudinary.com/dmlv9tzte/image/upload/v1664880187/duanTn/346627589_dong-ho-thoi-trang15_adlt0c.jpg" alt="" />
                <div className='mt-3 text-center'>
                    <h3 className='font-semibold text-lg'>Áo Polo coc tay</h3>
                    <p className='mt-1 text-red-600 text-base  font-semibold '>120.000</p>
                </div>
                </Link>
            </div>
            <div className='group'>
              <Link to={""}>
                <img className='w-full border-spacing-1 rounded-2xl group-hover:opacity-80' src="http://res.cloudinary.com/dmlv9tzte/image/upload/v1664880187/duanTn/346627589_dong-ho-thoi-trang15_adlt0c.jpg" alt="" />
                <div className='mt-3 text-center'>
                    <h3 className='font-semibold text-lg'>Áo Polo coc tay</h3>
                    <p className='mt-1 text-red-600 text-base  font-semibold '>120.000</p>
                </div>
                </Link>
            </div>
            <div className='group'>
              <Link to={""}>
                <img className='w-full border-spacing-1 rounded-2xl group-hover:opacity-80' src="http://res.cloudinary.com/dmlv9tzte/image/upload/v1664880187/duanTn/346627589_dong-ho-thoi-trang15_adlt0c.jpg" alt="" />
                <div className='mt-3 text-center'>
                    <h3 className='font-semibold text-lg'>Áo Polo coc tay</h3>
                    <p className='mt-1 text-red-600 text-base  font-semibold '>120.000</p>
                </div>
                </Link>
            </div>
            <div className='group'>
              <Link to={""}>
                <img className='w-full border-spacing-1 rounded-2xl group-hover:opacity-80' src="http://res.cloudinary.com/dmlv9tzte/image/upload/v1664880187/duanTn/346627589_dong-ho-thoi-trang15_adlt0c.jpg" alt="" />
                <div className='mt-3 text-center'>
                    <h3 className='font-semibold text-lg'>Áo Polo coc tay</h3>
                    <p className='mt-1 text-red-600 text-base  font-semibold '>120.000</p>
                </div>
                </Link>
            </div>
        </div>
        <div className=' relative mt-20 '>
        <Pagination className='pagination'
          defaultCurrent={3}
          total={10}
          pageSize={10}
        />
        </div>
       
        </div>
    </div>
  )
}

export default DetailCateProduct