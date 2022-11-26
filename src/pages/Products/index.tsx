import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiOutlineControl } from "react-icons/ai";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { getProducts } from "../../redux/slices/productSlice";
import { getCatePro } from "../../redux/slices/cateProductSlice";
type Props = {};

const Products = (props: Props) => {
  const product = useSelector((state: RootState) => state?.product);
  const pages = useSelector((state: RootState) => state?.product.page);
  const catePro = useSelector((state : RootState) => state.catePro)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getProducts({
        page: pages,
        limit: 8,
      })
    );
  }, [dispatch, 1]);
  // category
  useEffect(() => {
    dispatch(
      getCatePro()
    )
  }, [dispatch])
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.linkBreakcrumb}>
          Trang chủ
        </Link>
        <span>Áo</span>
      </div>
      <div className="banner">
        <img
          src="https://owen.vn/media/catalog/category/_o_nam_2_1_.jpg"
          alt=""
        />
      </div>
      <div className={styles.content}>
        <div className={styles.category}>
          <div className={styles.boxCategory}>
            <h3>Danh mục</h3>
            <ul>
           {
            catePro?.cateproducts.map((item:any,index:any)=>{
              return (
                <li key={index+1}>
              <Link to={`/detail/cate/${item._id}/product`}>{item.name}</Link>
               </li>
              )
            })
           }
            </ul>
          </div>

        </div>
        <div className="products">
          <div className={styles.filter}>
            <span>Bộ lọc</span>
            <AiOutlineControl size={25} />
          </div>
          <div className="boxProducts">
            <div className={styles.rowProduct}>
              {product?.products.products?.map((item: any, index: any) => {
                return (
                  <div key={index+1} className={styles.itemProduct}>
                    <Link to={`/detail/${item._id}`}>
                    <div className={styles.imgProduct}>
                      <img src={item.image} alt="" />
                    </div>
                    <h3>{item.name}</h3>
                    <span>{item.price} VNĐ</span>
                    </Link>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        <div className={styles.arrows}>
          <SlArrowLeft />
        </div>
        <span className={styles.active}>1</span>
        <span>2</span>
        <span>3</span>
        <div className={styles.arrows}>
          <SlArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Products;
