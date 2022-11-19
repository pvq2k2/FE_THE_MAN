import React from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiOutlineControl } from "react-icons/ai";
import styles from "./Products.module.css";
type Props = {};

const Products = (props: Props) => {
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
            <h3>Áo</h3>
            <ul>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
            </ul>
          </div>

          <div className={styles.boxCategory}>
            <h3>Áo</h3>
            <ul>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
              <li>
                <Link to="#">Áo Sơ Mi</Link>
              </li>
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
              <div className={styles.itemProduct}>
                <div className={styles.imgProduct}>
                  <img
                    src="https://bucket.nhanh.vn/store1/41786/ps/20220818/000017.jpg"
                    alt=""
                  />
                </div>
                <h3>Anselm Loose Fit Jean Light Blue</h3>
                <span>690,000 đ</span>
              </div>

              <div className={styles.itemProduct}>
                <div className={styles.imgProduct}>
                  <img
                    src="https://bucket.nhanh.vn/store1/41786/ps/20220818/000017.jpg"
                    alt=""
                  />
                </div>
                <h3>Anselm Loose Fit Jean Light Blue</h3>
                <span>690,000 đ</span>
              </div>

              <div className={styles.itemProduct}>
                <div className={styles.imgProduct}>
                  <img
                    src="https://bucket.nhanh.vn/store1/41786/ps/20220818/000017.jpg"
                    alt=""
                  />
                </div>
                <h3>Anselm Loose Fit Jean Light Blue</h3>
                <span>690,000 đ</span>
              </div>

              <div className={styles.itemProduct}>
                <div className={styles.imgProduct}>
                  <img
                    src="https://bucket.nhanh.vn/store1/41786/ps/20220818/000017.jpg"
                    alt=""
                  />
                </div>
                <h3>Anselm Loose Fit Jean Light Blue</h3>
                <span>690,000 đ</span>
              </div>

              <div className={styles.itemProduct}>
                <div className={styles.imgProduct}>
                  <img
                    src="https://bucket.nhanh.vn/store1/41786/ps/20220818/000017.jpg"
                    alt=""
                  />
                </div>
                <h3>Anselm Loose Fit Jean Light Blue</h3>
                <span>690,000 đ</span>
              </div>
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
