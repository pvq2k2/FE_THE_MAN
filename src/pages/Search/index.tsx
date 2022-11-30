import React from "react";
import { BiSearch } from "react-icons/bi";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
type Props = {};

const Search = (props: Props) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.title}>
        {/* <h1>NHẬP TỪ KHÓA ĐỂ TÌM KIẾM SẢN PHẨM</h1> */}
        <h1>CÓ 19 KẾT QUẢ TÌM KIẾM PHÙ HỢP</h1>

        {/* Không có sản phẩm thì hiện thông báo này lên và input search */}
        {/* <h1>KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN.</h1> */}
        {/* <span>Vui lòng nhập từ khóa tìm kiếm khác</span> */}
      </div>

      {/* Có sản phẩm thì ẩn search */}
      {/* <div className={styles.searchInput}>
        <input type="text" placeholder="Bạn cần tìm gì hôm nay?" />
        <div className={styles.icSearch}>
          <BiSearch />
        </div>
      </div> */}

      <div className={styles.rowProduct}>
        <div
          //key={index + 1}
          className={styles.itemProduct}
        >
          <Link to={`/detail/1`}>
            <div className={styles.imgProduct}>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/15-ddab1c6e-2819-4a2a-aa6e-7e6b594112e9.jpg?v=1669434384850"
                alt=""
                className={styles.imgDf}
              />
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/16.jpg?v=1669434388827"
                className={styles.subImg}
              />
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
            <h3>CLOWNZ LEOPARD ZIPPED HOODIE</h3>
            <span>649.000 VNĐ</span>
          </Link>
        </div>

        <div
          //key={index + 1}
          className={styles.itemProduct}
        >
          <Link to={`/detail/1`}>
            <div className={styles.imgProduct}>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/15-ddab1c6e-2819-4a2a-aa6e-7e6b594112e9.jpg?v=1669434384850"
                alt=""
                className={styles.imgDf}
              />
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/16.jpg?v=1669434388827"
                className={styles.subImg}
              />
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
            <h3>CLOWNZ LEOPARD ZIPPED HOODIE</h3>
            <span>649.000 VNĐ</span>
          </Link>
        </div>

        <div
          //key={index + 1}
          className={styles.itemProduct}
        >
          <Link to={`/detail/1`}>
            <div className={styles.imgProduct}>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/15-ddab1c6e-2819-4a2a-aa6e-7e6b594112e9.jpg?v=1669434384850"
                alt=""
                className={styles.imgDf}
              />
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/16.jpg?v=1669434388827"
                className={styles.subImg}
              />
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
            <h3>CLOWNZ LEOPARD ZIPPED HOODIE</h3>
            <span>649.000 VNĐ</span>
          </Link>
        </div>

        <div
          //key={index + 1}
          className={styles.itemProduct}
        >
          <Link to={`/detail/1`}>
            <div className={styles.imgProduct}>
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/15-ddab1c6e-2819-4a2a-aa6e-7e6b594112e9.jpg?v=1669434384850"
                alt=""
                className={styles.imgDf}
              />
              <img
                src="https://bizweb.dktcdn.net/100/414/728/products/16.jpg?v=1669434388827"
                className={styles.subImg}
              />
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
            <h3>CLOWNZ LEOPARD ZIPPED HOODIE</h3>
            <span>649.000 VNĐ</span>
          </Link>
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

export default Search;
