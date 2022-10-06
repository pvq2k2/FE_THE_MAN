import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getProduct } from "../../redux/slices/productSlice";
import "./assets/css/detail.css";
import NumberFormat from "react-number-format";
import { json, useParams } from "react-router-dom";
type Props = {};

type TypeColorSize = Map<string, string[]>;

const DetailProduct = (props: Props) => {
  const { id } = useParams();
  // const [types, setTypes] = useState<any[]>([]);
  const dispatch = useDispatch<any>();
  const product = useSelector((state: any) => state.product.product);
  const [colorSize, setColorSize] = useState<TypeColorSize>(new Map());
 // console.log("colorSize", colorSize);
  
  const [colorSelected, setColorSelected] = useState<string>();
  const [sizeSelected, setSizeSelected] = useState<string>();
  const [quantitys, setQuantitys] = useState(1);
  

  const quantityx = JSON.parse(localStorage.getItem("quantity") as any);
  const onSize  = (c:any) => {
    setSizeSelected(c)
    setQuantitys(0)
  }
  const onColor = (c:any) => {
    setColorSelected(c)
    setQuantitys(0)
  }
 console.log("selected-------", colorSelected, sizeSelected);
  let quantity
  if(sizeSelected && product.type) {
       quantity = product.type.filter((item:any) => {if(item.color === colorSelected && item.size === sizeSelected){
            if(item.quantity > 0) {
              return item.quantity 
            }
            
      }})
      if(quantity.length === 0) {
        toast.info("Không còn hàng !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }else{
        
        toast.info("Còn lại "+quantity[0].quantity + " sản phẩm", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
       localStorage.setItem("quantity", quantity[0].quantity)
            
      }
      

      
        
  }

  useEffect(() => {
    if (product.type) {
      let colorSizeValue: TypeColorSize = new Map();
      product.type.forEach((p: any) => {
      
        colorSizeValue.set(p.color, [
          ...(colorSizeValue.get(p.color) || []),
          p.size,
        ],
        );
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
    const script = document.createElement("script");
    script.src = "https://hait2810.github.io/assets_datn/main.js";
    document.body.appendChild(script);
    (async () => {
      await dispatch(getProduct(id)).unwrap();
      // setTypes(product.type || []);
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
                    <img src={item} alt="" className="imglist" />
                  </div>
                );
              })}
            </div>
            <div className="avatar__wrapper">
              <img src={product?.image} className="img_main" alt="" />
            </div>
            <div className="info__product">
              <h1 className="name__product"> {product?.name}</h1>
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
                  {Array.from(colorSize).map((c) => {
                    return (
                      <label
                        onClick={() => onColor(c[0])}
                        className="btn_color"
                        htmlFor="black"
                      >
                        <div
                          className={`code_color ${
                            colorSelected === c[0]
                              ? "!border-4 !border-yellow-100"
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
                  {(colorSize.get(colorSelected || "") || []).map((c) => (
                    <label
                      className={`btn_size ${
                        sizeSelected === c ? "!border-4 !border-black" : ""
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
                      {c}
                    </label>
                  ))}
                  
                  {/* <label className="btn_size" htmlFor="39">
                    <input
                      type="radio"
                      name="size"
                      id="size"
                      defaultValue={39}
                    />
                    39
                  </label>
                  <label className="btn_size" htmlFor="40">
                    <input
                      type="radio"
                      name="size"
                      id="size"
                      defaultValue={40}
                    />
                    40
                  </label>
                  <label className="btn_size" htmlFor="41">
                    <input
                      type="radio"
                      name="size"
                      id="size"
                      defaultValue={41}
                    />
                    41
                  </label> */}
                  
                </div>
                <h2 className="t_quantity text-[18px] font-bold	my-[20px]">Số lượng:</h2>
                <div className="quantity flex items-center mb-[30px]">
                    <button type="submit" onClick={() => setQuantitys(quantitys  - 1)} disabled={quantitys <= 0} className="bg-blue-300 w-[35px] h-[28px] rounded-sm">-</button>
                    <span className="w-[30px] text-center	font-bold">{quantitys}</span>
                    <button type="submit" onClick={() => setQuantitys(quantitys + 1)} disabled={quantitys >= quantityx} className="bg-blue-300 w-[35px] h-[28px] rounded-sm">+</button>
              </div>
                <div className="size__guide dp-flex items-center" >
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
                <button type="submit" className="btn_add">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <div className="desc__wrapper">
                <h6 className="section-title">Mô tả</h6>
                <p className="desc">
                  Áo sơ mi dài tay, kiểu dáng Regular Fit dễ mặc, hợp form dáng.
                  Màu sắc và kiểu dáng trẻ trung, kiểu dáng hiện đại, dễ phối
                  đồ. Chất liệu Bamboo mịn mát từ vải sợi tre thân thiện môi
                  trường.
                </p>
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
