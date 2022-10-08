import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { listCarts, removeCart } from "../../../../redux/slices/cartSlice";
import { deleteCatePost, getAllCatePosts } from "../../../../redux/slices/catePostSlice";
import { formatCurrency } from "../../../../ultis";
import styles from "./Cart.module.css";

type Props = {};

const CartPostManager = () => {
  const dispatch = useDispatch<any>()
  const carts = useSelector((state: any) => state.carts.orderdetail)
  const onDelete = (id:any) => {
    const confirm = window.confirm("Bạn có chắc chắc muốn xoá đơn hàng này không?")
      if(confirm) { 
        dispatch(removeCart(id))
      }
  }
  useEffect(() => {
        dispatch(listCarts())
  }, [dispatch])
  return (
    <div className={styles.content}>
      <header>
        <div className={styles.title}>Danh sách đơn hàng</div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <td>STT</td>
              <td>Tổng tiền</td>
              <td>Trạng thái</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
         {carts?.map((item: any, index: number) => {
          return  <tr key={index + 1}>
          <td>{index + 1}</td>
          <td>{formatCurrency(item.totalprice)}</td>
          <td>{item.status == 0 ? "Đang xử lý" : "Đơn hàng đã được gửi"}</td>
          <td className={styles.action}>
            <Link to={`/admin/carts/update/${item._id}`}>
              <AiOutlineEdit className={styles.edit} />
            </Link>

            <AiOutlineDelete onClick={() => onDelete(item._id)}  className={styles.delete} />
          </td>
        </tr>
         })}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default CartPostManager;
