import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, getProducts } from "../../redux/slices/productSlice";
import { RootState, useAppDispatch } from "../../redux/store";
import { formatCurrency } from "../../ultis";
import "./assets/css/detail.css";
type Props = {};

const DetailProduct = (props: Props) => {
  const { product } = useSelector((state: RootState) => state?.product);
  console.log("product", product);
  const { id } = useParams();
  const pages = useSelector((state: RootState) => state?.product.page);
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, pages]);

  const types: any = product?.type?.filter(
    (type: any, index: any, self: any) => {
      return index === self.findIndex((t: any) => t.color === type.color);
    }
  );
  const colors: any = product?.type?.filter(
    (type: any, index: any, self: any) => {
      return index === self.findIndex((t: any) => t.size === type.size);
    }
  );
  const quantity = product?.type?.find((type: any) => {
    return type.size === size && type.color === color;
  });
  console.log(quantity, size, color);

  return (
    <>
      <div className="detail_page">
        <div className="containerx">
          <div className="breadcrumb_list">
            <span className="breadcrumb_item_text">
              <a className="home_navigation" href="#">
                Trang chủ
              </a>
            </span>
            <span className="breadcrumb_item_text">
              <a className="name_product" href="#">
                {product.name}
              </a>
            </span>
          </div>
        </div>
        <div className="containerx">
          <div className="detail_product dp-flex">
            <div className="product-gallary__thumbs">
              <div className="product-gallery__thumb">
                <img src={product.image} alt="" />
              </div>
              <div className="product-gallery__thumb">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="avatar__wrapper">
              <img src={product.image} alt="" />
            </div>
            <div className="info__product">
              <h1 className="name__product">{product.name}</h1>
              <p className="price">{formatCurrency(+product?.price)}</p>
              <div className="color__wrapper">
                <h6 className="section-title">Màu sắc:</h6>
                <div className="select__color dp-flex">
                  {types?.map((e: any, index: any) => {
                    return (
                      <label
                        className="btn_color"
                        htmlFor="black"
                        onClick={() => {
                          setColor(e.color);
                        }}
                      >
                        <input type="radio" name="color" id="color" />
                        <div
                          className="code_color"
                          style={{ backgroundColor: `${e.color}` }}
                        ></div>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="size__wrapper">
                <h6 className="section-title">Kích cỡ:</h6>
                <div className="select__size dp-flex">
                  {colors?.map((e: any, index: any) => {
                    return (
                      <label
                        onClick={() => {
                          setSize(e.size);
                        }}
                        className="btn_size"
                        htmlFor="38"
                      >
                        <input type="radio" name="size" id="size" />
                        {e.size}
                      </label>
                    );
                  })}
                </div>
                <div className="size__guide dp-flex">
                  <img
                    src="./asset/img/Programming Line Craft.png"
                    alt=""
                    className="logo"
                  />
                  <a href="#" className="section-title">
                    Hướng dẫn chọn size
                  </a>
                </div>
              </div>
              <div className="add_cart">
                <button type="submit" className="btn_add">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="desc__wrapper">
                <h6 className="section-title">Mô tả</h6>
                <p className="desc">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-related_wrapper">
          <div className="containerx">
            <div className="heading-title">
              <h2>Có thể bạn sẽ thích</h2>
            </div>
            <div className="list-products">
              <div className="item">
                <img
                  src="https://i.ibb.co/PmYhcf3/img2.png"
                  alt=""
                  className="logo"
                />
                <div className="product-info">
                  <a href="#">Anselm Loose Fit Jean Light Blue </a>
                  <span>690,000 đ</span>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/PmYhcf3/img2.png"
                  alt=""
                  className="logo"
                />
                <div className="product-info">
                  <a href="#">Anselm Loose Fit Jean Light Blue </a>
                  <span>690,000 đ</span>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/PmYhcf3/img2.png"
                  alt=""
                  className="logo"
                />
                <div className="product-info">
                  <a href="#">Anselm Loose Fit Jean Light Blue </a>
                  <span>690,000 đ</span>
                </div>
              </div>
              <div className="item">
                <img
                  src="https://i.ibb.co/PmYhcf3/img2.png"
                  alt=""
                  className="logo"
                />
                <div className="product-info">
                  <a href="#">Anselm Loose Fit Jean Light Blue </a>
                  <span>690,000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comments_wrapper">
          <div className="containerx">
            <h2 className="heading-title">
              Bình luận về Áo sơ mi - AR220134DT
            </h2>
            <div className="form_comment">
              <form action="">
                <textarea
                  name=""
                  id=""
                  cols={30}
                  placeholder="Mời bạn để lại bình luận..."
                  rows={6}
                  defaultValue={""}
                />
                <button type="submit">GỬI</button>
              </form>
            </div>
            <div className="list-comments_wrapper">
              <div className="item">
                <div className="user dp-flex">
                  <img
                    src="https://i.ibb.co/4jB5j40/Avatar.png"
                    alt=""
                    className="logo"
                  />
                  <div className="info">
                    <h3 className="name">Quyết</h3>
                    <span className="time-comment">1 giờ trước</span>
                  </div>
                </div>
                <p className="content">Áo này đẹp quá !</p>
              </div>
              <div className="item">
                <div className="user dp-flex">
                  <img
                    src="https://i.ibb.co/4jB5j40/Avatar.png"
                    alt=""
                    className="logo"
                  />
                  <div className="info">
                    <h3 className="name">Quyết</h3>
                    <span className="time-comment">1 giờ trước</span>
                  </div>
                </div>
                <p className="content">Áo này đẹp quá !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
