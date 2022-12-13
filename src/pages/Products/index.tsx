import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { getProducts } from "../../redux/slices/productSlice";
import { getCatePro } from "../../redux/slices/cateProductSlice";
import NumberFormat from "react-number-format";
type Props = {};

const Products = (props: Props) => {
  const product = useSelector((state: RootState) => state?.product);
  const pages = useSelector((state: RootState) => state?.product.page);
  const catePro = useSelector((state: RootState) => state.catePro);
  const dispatch = useAppDispatch();
  const [isShowFilter, setIsShowFilter] = useState(false);

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
    dispatch(getCatePro());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {/* <div className={styles.breadcrumb}>
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
      </div> */}
      <div className={styles.content}>
        <div className={styles.row_ctr}>
          <div className={styles.category}>
            <h3>Danh mục</h3>
            <div className={styles.boxCategory}>
              <span>Tất cả</span>
              <ul>
                {catePro?.cateproducts.map((item: any, index: any) => {
                  return (
                    <li key={index + 1}>
                      <Link to={`/detail/cate/${item._id}/product`}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className={styles.filter}>
            <div
              className={styles.title_filter}
              onClick={() => setIsShowFilter(!isShowFilter)}
            >
              <span>Tìm theo</span>
              <AiOutlinePlus size={15} />
            </div>
            {isShowFilter ? (
              <div className={styles.box_filter}>
                <div className={styles.price}>
                  <h3>Giá sản phẩm</h3>
                  <ul>
                    <li>
                      <input type="checkbox" name="100k" id="100k" />
                      <label htmlFor="100k">Giá dưới 100.000đ</label>
                    </li>
                    <li>
                      <input type="checkbox" name="200k" id="200k" />
                      <label htmlFor="200k">100.000đ - 200.000đ</label>
                    </li>
                    <li>
                      <input type="checkbox" name="300k" id="300k" />
                      <label htmlFor="300k">200.000đ - 300.000đ</label>
                    </li>
                    <li>
                      <input type="checkbox" name="500k" id="500k" />
                      <label htmlFor="500k">300.000đ - 500.000đ</label>
                    </li>
                    <li>
                      <input type="checkbox" name="500k" id="500k" />
                      <label htmlFor="500k">300.000đ - 500.000đ</label>
                    </li>
                    <li>
                      <input type="checkbox" name="1000k" id="1000k" />
                      <label htmlFor="1000k">500.000đ - 1.000.000đ</label>
                    </li>
                    <li>
                      <input type="checkbox" name="1m" id="1m" />
                      <label htmlFor="1m">Giá trên 1.000.000đ</label>
                    </li>
                  </ul>
                </div>

                <div className={styles.size}>
                  <h3>Size</h3>
                  <ul>
                    <li>
                      <input type="checkbox" name="s" id="s" />
                      <label htmlFor="s">S</label>
                    </li>
                    <li>
                      <input type="checkbox" name="m" id="m" />
                      <label htmlFor="m">M</label>
                    </li>
                    <li>
                      <input type="checkbox" name="l" id="l" />
                      <label htmlFor="l">L</label>
                    </li>
                    <li>
                      <input type="checkbox" name="xl" id="xl" />
                      <label htmlFor="xl">XL</label>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="boxProducts">
          <div className={styles.rowProduct}>
            {product?.products?.Product?.map((item: any, index: any) => {
              return (
                <div key={index + 1} className={styles.itemProduct}>
                  <Link to={`/detail/${item._id}`}>
                    <div className={styles.imgProduct}>
                      <img src={item.image} alt="" className={styles.imgDf} />
                      <img src={item.subimg[0]} className={styles.subImg} />
                      <div className={styles.color}>
                        <div
                          className={styles.item_color}
                          style={{
                            backgroundColor: `red`,
                          }}
                        ></div>

                        <div
                          className={styles.item_color}
                          style={{
                            backgroundColor: `green`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <h3>{item.name}</h3>
                    <span> <NumberFormat
                    value={item?.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                  />{" "}
                   VNĐ</span>
                  </Link>
                </div>
              );
            })}
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
