import React, { useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import styles from "./ProductManager.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  getProduct,
  setPage,
} from "../../../../redux/slices/productSlice";
import { useAppDispatch } from "../../../../redux/store";
import { RootState } from "../../../../redux/store";
import ReactPaginate from "react-paginate";
import "../../../../styleAntd/panigation.css";
import Swal from "sweetalert2";
import { getAll } from "../../../../api-cilent/Product";
import { Pagination } from "antd";
import "../../Dashboard/dashboard.css"
import "../../../OrderStatus/Cancel/index.css"
type Props = {};

const ProductManager = (props: Props) => {
  const product = useSelector((state: RootState) => state?.product);

  const pages = useSelector((state: RootState) => state?.product.page);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        page: pages,
        limit: 10,
      })
    );
  }, [dispatch, pages]);

  // const showDetailProduct = async (id: any) => {
  //   const detailProduct = await dispatch(getProduct(id));
  //   return ( <div>
  //     {detailProduct.payload}
  //   </div>)
  // }
  const handleRemove = (id: any) => {
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
        await dispatch(deleteProduct(id));
        Swal.fire("Thành công!", "Xóa thành công.", "success");
        dispatch(
          getProducts({
            page: pages,
            limit: 10,
          })
        );
      }
    });
  };

  return (
    <div className={styles.content}>
      <header>
        <div className={styles.title}>Danh sách sản phẩm</div>
        <Link to="add" className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2A303B] hover:bg-[#4D535E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4D535E]"
          >
            <TiPlus className="text-[20px] mr-2" />
            Thêm sản phẩm
          </button>
        </Link>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Tên sản phẩm</td>
              <td>Ảnh sản phẩm</td>
              <td>Giá sản phẩm</td>
              <td>Chi tiết sản phẩm</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
            {product?.products.products?.map((item: any, index: any) => {
              return (
                <tr key={item._id}>
                  <td>{(pages - 1) * 10 + ++index}</td>

                  <td>{item.name}</td>
                  <td>
                    <img
                      className={styles.image}
                      src={item.image}
                      alt=""
                      width="100px"
                    />
                  </td>
                  <td>{item.price}đ</td>
                  <td >
                    <div className="h-[150px] w-[400px] overflow-x-auto scoll">{item.desc}</div>
                    </td>
                  <td className={styles.action}>
                    {/* <AiOutlineInfoCircle className={styles.info} onClick={() => showDetailProduct(item._id)}/> */}
                    <Link to={`/admin/products/${item._id}/edit`}>
                      <AiOutlineEdit className={styles.edit} />
                    </Link>

                    <AiOutlineDelete
                      onClick={() => handleRemove(item._id)}
                      className={styles.delete}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          defaultCurrent={1}
          total={product?.products.count}
          pageSize={10}
          onChange={(pages) => {
            dispatch(setPage(pages));
          }}
        />
      </main>
    </div>
  );
};

export default ProductManager;
