import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getProduct } from "../../redux/slices/productSlice";
import "./assets/css/detail.css";
import NumberFormat from "react-number-format";
import { json, useParams } from "react-router-dom";
import { addCart } from "../../redux/slices/orderSlice";
type Props = {};

type TypeColorSize = Map<
  string,
  {
    size: {
      title: string;
      quantity: number;
    }[];
  }
>;

const DetailProduct = (props: Props) => {
  const { id } = useParams();
  // const [types, setTypes] = useState<any[]>([]);
  const dispatch = useDispatch<any>();
  const product = useSelector((state: any) => state.product.product);
  const [colorSize, setColorSize] = useState<TypeColorSize>(new Map());
  // console.log("colorSize", colorSize);
  const [rproducts, setRproducts] = useState(0);
  const [colorSelected, setColorSelected] = useState<string>();
  const [sizeSelected, setSizeSelected] = useState<string>();
  const [quantities, setQuantities] = useState(0);
  const [User,setUser] = useState()
  useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user") as any))  
  },[])
  const onAddOrder = async () => {
    if(!User) {
      return toast.info("Bạn cần phải đăng nhập mới có thể mua hàng", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (quantities < 1) {
      return toast.info("Số lượng phải lớn hơn 1", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const {
      type,
      subimg,
      categoryId,
      createdAt,
      desc,
      updatedAt,
      __v,
      ...rest
    } = product;
    const products = {
      ...rest,
      size: sizeSelected,
      color: colorSelected,
      quantity: quantities,
      remainingproducts: rproducts,
    };
    console.log("rproducts", products);
    
    const r = dispatch(addCart(products));
    console.log("r", r);
  };
  const onSize = async (c: any) => {
    setSizeSelected(c.title);
    setRproducts(
      colorSize
        .get(colorSelected || "")
        ?.size.filter((s) => s.title === c.title)[0].quantity!
    );
    setQuantities(0);
  };

  const onColor = (c: any) => {
    setColorSelected(c);
    setSizeSelected(undefined);
    setQuantities(0);
    //   console.log("a", colorSize.get(colorSelected || "")?.size || 0);
  };
  useEffect(() => {
    if (product.type) {
      let colorSizeValue: TypeColorSize = new Map();
      product.type.forEach((p: any) => {
        colorSizeValue.set(p.color, {
          size: [
            ...(colorSizeValue.get(p.color)?.size || []),
            {
              title: p.size,
              quantity: parseInt(p.quantity),
            },
          ],
        });
      });
      setColorSize(colorSizeValue);
      setColorSelected(Array.from(colorSizeValue.keys())[0]);
    }
  }, [product]);

  // const size = types.map((item: any) => {
  //   if (item.color === "blue") {
  //     return item.size;
  //   }
  // });
  // console.log(size);

  useEffect(() => {
    (async () => {
      await dispatch(getProduct(id)).unwrap();
      // setTypes(product.type || []);
      const script = document.createElement("script");
      script.src = "https://hait2810.github.io/assets_datn/main.js";
      document.body.appendChild(script);
    })();
  }, [id, dispatch]);

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
                {product?.name}
              </a>
            </span>
          </div>
        </div>
        <div className="containerx">
          <div className="detail_product dp-flex">
            <div className="product-gallary__thumbs">
              {product?.subimg?.map((item: any, index: number) => {
                return (
                  <div key={index++} className="product-gallery__thumb">
                    <img src={item} alt="" className="imglist " />
                  </div>
                );
              })}
            </div>
            <div className="avatar__wrapper">
              <img
                src={product?.image}
                className="img_main max-w-[600px]"
                alt=""
              />
            </div>
            <div className="info__product">
              <h1 className="name__product !font-bold !text-[25px]">
                {" "}
                {product?.name}
              </h1>
              <p className="price">
                {" "}
                <NumberFormat
                  value={product?.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={""}
                />{" "}
                ₫
              </p>
              <div className="color__wrapper">
                <h6 className="section-title">Màu sắc:</h6>
                <div className="select__color dp-flex">
                  {Array.from(colorSize).map((c, index) => {
                    return (
                      <label
                        key={index++}
                        onClick={() => onColor(c[0])}
                        className="btn_color"
                        htmlFor="black"
                      >
                        <div
                          className={`code_color ${
                            colorSelected === c[0]
                              ? "!border-4 !border-blue-300"
                              : ""
                          } `}
                          style={{ backgroundColor: `${c[0]}` }}
                        ></div>
                      </label>
                    );
                  })}
                  {/* <label className="btn_color" htmlFor="white">
                    <input type="radio" name="color" id="color" />
                    <div className="code_color"></div>
                  </label> */}
                </div>
              </div>
              <div className="size__wrapper">
                <h6 className="section-title">Kích cỡ:</h6>
                <div className="select__size dp-flex">
                  {(colorSize.get(colorSelected || "")?.size || []).map(
                    (c, index) => (
                      <label
                        key={index++}
                        className={`btn_size ${
                          sizeSelected === c.title
                            ? "!border-4 !border-black"
                            : ""
                        }`}
                        htmlFor="38"
                        onClick={() => onSize(c)}
                      >
                        <input
                          type="radio"
                          name="size"
                          id="size"
                          defaultValue={38}
                        />
                        {c.title}
                      </label>
                    )
                  )}
                </div>
                <h2 className="t_quantity text-[18px] font-bold my-[20px]">
                  Số lượng:
                </h2>
                {rproducts == 0 ? (
                  <div className="text-rose-600 text-sm font-semibold">
                    Hết hàng
                  </div>
                ) : (
                 <>
                  <div className="text-rose-600 text-sm font-semibold my-[10px]">
                  Còn lại : {rproducts}
                </div>
                  <div className="quantity flex items-center mb-[30px]">
                   
                    <button
                      type="submit"
                      onClick={() => setQuantities((old) => old - 1)}
                      disabled={quantities <= 0}
                      className="bg-blue-300 w-[35px] h-[28px] rounded-sm"
                    >
                      -
                    </button>
                    <span className="w-[30px] text-center font-bold">
                      {quantities}
                    </span>
                    <button
                      type="submit"
                      onClick={() => setQuantities((old) => old + 1)}
                      disabled={quantities >= rproducts || sizeSelected == null}
                      className="bg-blue-300 w-[35px] h-[28px] rounded-sm"
                    >
                      +
                    </button>
                  </div>
                 </>
                )}

                <div className="size__guide dp-flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/93/93640.png"
                    alt=""
                    className="logo w-[20px] h-[20px] "
                  />
                  <a href="#" className="section-title">
                    Hướng dẫn chọn size
                  </a>
                </div>
              </div>

              <div className="add_cart">
                <button
                  type="submit"
                  onClick={() => onAddOrder()}
                  className="btn_add"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="desc__wrapper">
                <h6 className="section-title">Mô tả</h6>
                <p className="desc min-w-[430px]">{product?.desc}</p>
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
