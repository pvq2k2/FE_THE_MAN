import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import styles from './CatePostManager.module.css';

type Props = {}

const CategoryPostManager = (props: Props) => {
  return (
    <div className={styles.content}>
    <header>
      <div className={styles.title}>Danh mục bài viết</div>
      <Link to='products/add' className='sm:ml-3'>
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
          <tr key="1">
            <td>1</td>


            <td>Thời trang</td>
            <td className={styles.action}>
              <Link to={`/admin/category_post/1`}>
                <AiOutlineEdit className={styles.edit} />
              </Link>

              <AiOutlineDelete
                className={styles.delete}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
  )
}

export default CategoryPostManager