
import React, { useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { TiPlus } from 'react-icons/ti';
import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
import styles from './ProductManager.module.css';
type Props = {};

const ProductManager = (props: Props) => {

  // const handleRemove = (id: any) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
  //     }
  //   });
  // };
  return (
    <div className={styles.content}>
      <header>
        <div className={styles.title}>Product Manager</div>
        <Link to='products/add' className='sm:ml-3'>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <TiPlus className='text-[20px] mr-2' />
            Add Product
          </button>
        </Link>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr key="1">
              <td>1</td>


              <td>Producr A</td>
              <td>
                <img
                  className={styles.image}
                  src="https://res.cloudinary.com/assignmentjs/image/upload/v1659720669/nextjsproduct/pituhei9utpepxgvntfd.jpg"
                  alt=''
                  width='100px'
                />
              </td>
              <td>100</td>
              <td>
                Desc Product
              </td>
              <td className={styles.action}>
                <Link to={`/admin/products/1`}>
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
  );
};


export default ProductManager;

