import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getCatePro } from "../../../../redux/slices/cateProductSlice";
import { RootState, useAppDispatch } from '../../../../redux/store';
import styles from './CateProductManager.module.css';

type Props = {}

const CategoryProductManager = (props: Props) => {
  const catePro = useSelector((state : RootState) => state.catePro)
  console.log(catePro);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getCatePro()
    )
  }, [dispatch])
  
  
  return (
    <div className={styles.content}>
    <header>
      <div className={styles.title}>Danh mục sản phẩm</div>
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
            <td>Hoạt động</td>
          </tr>
        </thead>
        <tbody>
          {catePro?.cateproducts.data?.map((item : any , index : number)=>{
            return <tr key="1">
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className={styles.action}>
              <Link to={`/admin/category_post/:id/edit`}>
                <AiOutlineEdit className={styles.edit} />
              </Link>
              <AiOutlineDelete
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