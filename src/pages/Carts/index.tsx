import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Decrement, Increment, readCart } from "../../redux/slices/cartSlice";
import NumericInput from "react-numeric-input";
import { readUserLocal } from "../../redux/slices/userSlice";
import "../Carts/cart.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const CartPage = (props: Props) => {
  const dispatch = useDispatch<any>();
  const carts = useSelector((state: any) => state.carts);
  const navigate = useNavigate();
  let sum = 0;
  const [Id, setId] = useState<any>();
  const IncrementC = (data: any) => {
    const product = {
      ...data,
      userID: Id,
    };
    dispatch(Increment(product));
  };
  const DecrementC = (data: any) => {
    const product = {
      ...data,
      userID: Id,
    };
    dispatch(Decrement(product));
  };

  useEffect(() => {
    (async () => {
      const user = await dispatch(readUserLocal());
      setId(user?.payload?.users?.id);
      await dispatch(readCart(user?.payload?.users?.id)).unwrap();
    })();
  }, []);
  const changeQuantity = (data: any) => {
    console.log(data);
    
  }
  return (
    <div>
      <div>
        {/* <ul className="flex">
          <li>
            <Link to={"/"}>Trang chủ </Link>
          </li>
          / <li> Giỏ hàng</li>
        </ul> */}
      </div>
      <section className="flex gap-8 w-10/12 m-auto py-20">
        <section className="basis-4/6">
          <table className="table-auto w-full ">
            <thead className="pb-10 ">
              <tr className="text-left ">
                <th className=" font-semibold pb-10">Sản phẩm</th>
                <th className=" font-semibold pb-10">Màu sắc / Kích cỡ </th>
                <th className="font-semibold pb-10">Số lượng</th>
                <th className="font-semibold pb-10">Tổng tiền</th>
              </tr>
            </thead>
            <tbody className="w-full ">
              {carts?.carts?.products?.map((item: any, index: number) => {
                {
                  sum += item.quantity * item.price;
                }
                return (
                  <tr key={index++} className="border-t-2">
                    <td className="flex py-10  gap-8">
                      <img src={item.image} className="w-20"></img>
                      <div className="pt-7">
                        <p>{item.name}</p>
                        <p className="font-bold">
                          {" "}
                          <NumberFormat
                            value={item?.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={""}
                          />{" "}
                          VNĐ
                        </p>
                      </div>
                    </td>
                    <td className="w-40">
                      <div className="font-bold flex">
                        {" "}
                        <div
                          style={{ backgroundColor: `${item.color}` }}
                          className="h-[20px] w-[20px] rounded-[50%]"
                        ></div>{" "}
                        / {item.size}
                      </div>
                    </td>
                    <td className=" mr-[300px]">
                      {/* <NumericInput
                        className="h-[40px] mr-[39px] w-[100px] outline-none rounded-md"
                        type="number"
                        min={0}
                        // max={100}
                        onChange={(e ) => changeQuantity({cart: item, e})}
                        value={item.quantity}
                      /> */}
                      <NumericInput mobile className="w-[80px] ml-[10px] mr-[-20px] h-[30px] outline-none !border-none" required type="number" min={0}  onChange={(e ) => changeQuantity({cart: item, e})} value={item.quantity} />
                      {/* <button
                        onClick={() => DecrementC(item)}
                        className="bg-blue-300 rounded-[4px] w-[30px] text-white"
                      >{`-`}</button>
                      <span className="px-6 w-[15px]">{item.quantity}</span>
                      <button
                        onClick={() => IncrementC(item)}
                        className="bg-blue-300 rounded-[4px] w-[30px] text-white"
                      >{`+`}</button>
                    </td>
                    <td className="font-bold">
                      {" "}
                      <NumberFormat
                        value={item?.price * item?.quantity}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={""}
                      />{" "}
                      VNĐ
                    </td>
                    <td>
                      <button>
                        <i className="fa-sharp fa-solid fa-circle-xmark text-slate-300 bg-black rounded-full shadow-md shadow-black text-3xl"></i>
                      </button>
                    </td>
                    <td className="text-slate-400 text-base">
                      <FontAwesomeIcon icon={faTrash} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="border-t-2 flex justify-between">
            <button className="border-2  font-semibold p-3 px-5 mt-10">
              <Link to='/'>  Tiếp tục mua sắm</Link>
            
            </button>{" "}
          </div>
        </section>
        <section className="basis-2/6 w-full">
          <p className="font-semibold">Mã giảm giá</p>
          <div className=" w-full">
            <input
              className="border w-8/12 py-3 px-2  mt-10"
              type="text"
              placeholder="Mã giảm giá"
            />
            <button className="border w-3/12 py-3 px-2 mt-10 bg-black text-white rounded-md">
              Áp dụng
            </button>
          </div>
          <section className="bg-zinc-100 mt-12">
            <div className="p-10">
              {" "}
              <div className=" pt-5 flex">
                {" "}
                <span className="grow">Tổng tiền</span>
                <span className="text-right font-bold">
                  {" "}
                  <NumberFormat
                    value={sum}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                  />{" "}
                  VNĐ
                </span>
              </div>
              {/* <div className="pt-5 flex ">
                {" "}
                <span className="grow">Subtotal</span>
                <span className="text-center">$ 169.50</span>
              </div> */}
              <button
                onClick={() => navigate("/checkout")}
                className="bg-black text-white font-semibold p-3 mt-10 w-full rounded-md"
              >
                Thanh toán
              </button>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default CartPage;
