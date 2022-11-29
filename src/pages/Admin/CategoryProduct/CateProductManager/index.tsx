import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { deleteCatePro, getCatePro } from "../../../../redux/slices/cateProductSlice";
import { RootState, useAppDispatch } from '../../../../redux/store';
import styles from './CateProductManager.module.css';

type Props = {}

const CategoryProductManager = (props: Props) => {
  const catePro = useSelector((state : RootState) => state.catePro)
  // console.log(catePro);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getCatePro()
    )
  }, [dispatch])
  const handremove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteCatePro(id));
        Swal.fire("Thành công!", "Xóa thành công.", "success");
        dispatch(
          getCatePro()
        );
      }
    });
    
  };
  
  return (
    <div className={styles.content}>
    <header>
      {/* <div className={styles.title}>Danh mục sản phẩm</div> */}
      <form action="" className="inline-flex">
          <div className="pr-4">
              <input className="pl-4 border-2 border-gray-400 border-solid min-w-[250px] py-[6px] rounded-xl"  placeholder="Tìm kiếm" type="text" name="" id="" />
          </div>
          <div className="pr-4">
              <input className="pl-4 border-2 border-gray-400 border-solid min-w-[250px] py-[6px] rounded-xl"  placeholder="Tìm kiếm" type="text" name="" id="" />
          </div>
          <div className="pr-4">
              <input className="pl-4 border-2 border-gray-400 border-solid min-w-[250px] py-[6px] rounded-xl"  placeholder="Tìm kiếm" type="text" name="" id="" />
          </div>
        <button className="inline-flex items-center px-6 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2A303B] hover:bg-[#4D535E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D535E]">Tìm kiếm</button>
        </form>
      <Link to='add' className='sm:ml-3'>
        <button
          type='button'
          className='inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          <TiPlus className='text-[20px] mr-2' />
          Thêm danh mục
        </button>
      </Link>
    </header>
    <main>
      <table>
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên danh mục</td>
            <td>Hình ảnh</td>
            <td>Hoạt động</td>
          </tr>
        </thead>
        <tbody>
          {catePro?.cateproducts?.map((item : any , index : number)=>{
            return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
                    <img
                      className={styles.image}
                      src={item.image}
                      alt=""
                      width="100px"
                    />
                  </td>
            <td className={styles.action}>
              <Link to={`/admin/category_product/${item._id}/edit`}>
                <AiOutlineEdit className={styles.edit} />
              </Link>
              <AiOutlineDelete
              onClick={() => handremove(item._id)}
                className={styles.delete}
              />
            </td>
          </tr>
          })}
          
        </tbody>
      </table>
    </main>
  </div>
  )
}

export default CategoryProductManager