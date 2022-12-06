import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../ultis";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  getDistrict,
  getFee,
  getProvince,
  getWards,
} from "../../redux/slices/provinceSlice";
import { readUserLocal } from "../../redux/slices/userSlice";
import { addOrder, readCart, updateCartRd } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { checkVoucher } from "../../redux/slices/voucherSlice";
import moment from "moment";
type Props = {};


const CheckoutPage = (props: Props) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const carts = useSelector((state: any) => state.carts);
  const [code, setCode] = useState<String>();
  const province = useSelector((state: any) => state.province);
  const voucher = useSelector((state: any) => state.voucher.voucher);
  const [total, setTotal] = useState(0);
  const [fee, setFee] = useState<number>(0);
  const [Payment, setPayment] = useState<Number>(0);
 
  let sum = 0;
  let sumwidth = 0;
  let sumheight = 0;
  let sumweight = 0;
  let sumlength = 0;
  const [Receiver, setReceiver] = useState({
    to_ward_name: "",
    to_district_name: "",
    to_province_name: "",
  });
  const [provicei, setProvicei] = useState({
    to_district_id: 0,
    to_ward_code: 0,
  });

  // useEffect(() => {
  //   (async () => {
  //     const data = {
  //       update: false,
  //       _id: carts?.carts?.voucher,
  //       iduser: carts?.carts?.userID,
  //     };
  //     if (carts?.carts?.voucher) {
  //       await dispatch(checkVoucher(data)); 
  //       console.log("s", voucher);
  //     }
  //   })();
  // }, [carts?.carts?.voucher]);

  useEffect(() => {
    if (voucher) {
      if (voucher?.amount > 0) {
        sum = sum - voucher.amount
        setTotal(sum);
      } else {
        sum = sum - (sum * voucher.percent / 100)
        setTotal(sum);
      }
    }
  }, [voucher]);

  useEffect(() => {
    dispatch(getProvince());
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      const res = await dispatch(readUserLocal());
      const rescart = await dispatch(readCart(res?.payload?.users?.id));
      if (!rescart?.payload?.products) {
        navigate("/");
      }
    })();
  }, []);

  useEffect(() => {
          setTotal(sum)
  }, [carts?.carts?.products]);

  useEffect(() => {
    (async () => {
      const data = {
        ...provicei,
        service_type_id: 2,
        insurance_value: total,
        coupon: null,
        from_district_id: 3440,
        height: sumheight,
        length: sumlength,
        weight: sumweight,
        width: sumwidth,
      };

      const res = await dispatch(getFee(data));
      setFee(res?.payload?.total);
    })();
  }, [provicei]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onAdd: SubmitHandler<any> = async (data: any) => {
    if (provicei.to_district_id == 0) {
      return toast.info("Vui lòng chọn địa chỉ giao hàng");
    }
    const info = {
      ...Receiver,
      ...data,
    };
    let product = [];
    product = carts?.carts?.products;
    if (!carts?.carts?.products) {
      return toast.info("Không có sản phẩm");
    }
    let _id = "";
    let idv = ""  //id voucher
    if(voucher?._id) {
      idv = voucher?._id
    }
    _id = carts.carts._id;
    const products = {
      _id,
      product,
      infomation: info,
      fee: fee,
      productmonney: total,
      userID: carts?.carts?.userID,
      tm_codeorder: carts?.carts?.tm_codeorder,
      totalprice: total + fee,
      width: sumwidth,
      length: sumlength,
      height: sumheight,
      weight: sumweight,
      payment_methods: Payment,
      voucher: idv
    };

    const res = await dispatch(addOrder(products));
    if (res?.payload?.code == 200) {
      toast.success("Thêm đơn hàng thành công");
      var text =
        "Bạn có đơn hàng mới. Mã đơn hàng: " + carts?.carts?.tm_codeorder;
      axios.post(
        "http://api.vidieu.net/sendnoti.php?token=5911904199:AAFlYAd1od8pI0Qymj8vWUHpblFhrrfLdos&text=" +
          encodeURIComponent(text) +
          "&id=@TheManClothes"
      );
      navigate("/thankkiu");
    } else {
      navigate("/cart");
    }
  };

  const onVoucher = async () => {
    if(voucher?.amount > 0 || voucher?.percent > 0) {
            const confirm = window.confirm("Chỉ được phép sử dụng 1 mã giảm giá, bạn có muốn sử dụng mã mới không?")
            if(confirm) {

            }else {
              return
            }
    }
    const data = {
      code,
      iduser: carts?.carts?.userID,
      update: false,
    };
    const res = await dispatch(checkVoucher(data));
    
  };

  const onProvince = async (e: any) => {
    await dispatch(getDistrict(parseInt(e.target.value)));
    setReceiver((old) => ({
      ...old,
      to_province_name: e.target.options[e.target.selectedIndex].text,
    }));
  };
  const onDistrict = async (e: any) => {
    await dispatch(getWards(parseInt(e.target.value)));
    setProvicei((old) => ({
      ...old,
      to_district_id: parseInt(e.target.value),
    }));
    setReceiver((old) => ({
      ...old,
      to_district_name: e.target.options[e.target.selectedIndex].text,
    }));
  };
  const onWard = async (e: any) => {
    setProvicei((old) => ({ ...old, to_ward_code: parseInt(e.target.value) }));
    setReceiver((old) => ({
      ...old,
      to_ward_name: e.target.options[e.target.selectedIndex].text,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onAdd)}>
        <section className="flex gap-8 w-10/12 m-auto py-20">
          <section className="basis-4/6">
            <h4 className="text-2xl font-bold mb-10">THÔNG TIN GIAO HÀNG</h4>
            <table className="table-auto w-full ">
              <label htmlFor="" className="font-semibold">
                Họ và Tên <span className="text-red-700">*</span>
              </label>
              <br />
              <input
                className="border w-8/12 py-3 px-2  mt-5 mb-5"
                type="text"
                placeholder="Họ và Tên"
                {...register("fullname", { required: true })}
              />

              {errors?.fullname && <span>Không được để trống </span>}
            </table>
            <table className="table-auto w-full ">
              <label htmlFor="" className="font-semibold">
                Địa chỉ <span className="text-red-700">*</span>
              </label>
              <br />
              <input
                className="border w-8/12 py-3 px-2  mt-5 mb-5"
                type="text"
                placeholder="Địa chỉ cụ thể"
                {...register("address", { required: true })}
              />
              {errors?.address && <span>Không được để trống </span>}
            </table>
            <table className="table-auto w-full flex pb-[20px]">
              <select
                onChange={(e) => onProvince(e)}
                className="py-[12px] border-[1px]"
                name=""
                id=""
              >
                <option value="">Tỉnh</option>
                {province.province?.map((item: any, index: number) => {
                  return (
                    <option key={index++} value={item.ProvinceID}>
                      {item.ProvinceName}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={(e) => onDistrict(e)}
                className="py-[12px] mx-[10px] border-[1px]"
                name=""
                id=""
              >
                <option value="">Huyện </option>
                {province?.district?.map((item: any, index: number) => {
                  return (
                    <option key={index++} value={item.DistrictID}>
                      {item.DistrictName}{" "}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={(e) => onWard(e)}
                className="py-[12px]  border-[1px]"
                name=""
                id=""
              >
                <option value="">Xã</option>
                {province?.ward?.map((item: any, index: number) => {
                  return (
                    <option key={index++} value={item.WardCode}>
                      {item.WardName}{" "}
                    </option>
                  );
                })}
              </select>
            </table>

            <table className="table-auto w-full ">
              <label htmlFor="" className="font-semibold">
                Số Điện Thoại <span className="text-red-700">*</span>
              </label>
              <br />
              <input
                className="border w-8/12 py-3 px-2  mt-5 mb-5"
                type="text"
                placeholder="Số Điện Thoại"
                {...register("phonenumber", { required: true })}
              />
              {errors?.phonenumber && <span>Không được để trống </span>}
            </table>
            <table className="table-auto w-full ">
              <label htmlFor="" className="font-semibold">
                Email <span className="text-red-700">*</span>
              </label>
              <br />
              <input
                className="border w-8/12 py-3 px-2 mt-5 mb-5"
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors?.email && <span>Không được để trống </span>}
            </table>
            <table className="table-auto w-full ">
              <label htmlFor="" className="font-semibold">
                Ghi chú
              </label>
              <br />
              <input
                className="border w-8/12 py-3 px-2  mt-5 mb-5"
                type="text"
                placeholder="Ghi chú"
                {...register("note")}
              />
            </table>
          </section>
          <section className="basis-2/6 w-full">
            <section className="bg-zinc-100 mt-12">
              <div className="p-10">
                <p className="text-2xl font-bold mb-[25px]">ĐƠN HÀNG CỦA BẠN</p>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Mã giảm giá
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      placeholder="Nhập mã giảm giá"
                      onChange={(e) => setCode(e.target.value)}
                      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      id="inline-full-name"
                      type="text"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onVoucher()}
                  className="bg-black text-white font-semibold p-3 w-full"
                >
                  Áp dụng
                </button>

                <div className=" pt-5 flex border-dashed border-t-2 border-t-black">
                  <span className="grow font-semibold">Sản Phẩm</span>
                  <span className="text-right font-semibold">Giá</span>
                </div>
                {carts?.carts?.products?.map((item: any, index: number) => {    
                  if (item.length > sumlength) {
                    sumlength = item.length;
                  }
                  sumheight += item.height;
                  sum += item.quantity * item.price
                  sumweight += item.weight;
                  if (item.width > sumwidth) {
                    sumwidth = item.width;
                  }
                  return (
                    <div key={index++} className=" pt-5 flex mb-[20px]">
                      <span className="grow flex">
                        {(index = index + 1)}.{" "}
                        <span className="font-bold">{item.name}</span> -{" "}
                        <div
                          style={{ backgroundColor: `${item.color}` }}
                          className="w-[20px] h-[20px] rounded-[50%]"
                        ></div>{" "}
                        - {item.size}
                      </span>
                      <span className="text-right ">
                        {formatCurrency(item.price * item.quantity)}
                      </span>
                    </div>
                  );
                })}

                 

    <div className="flex border-dashed border-t-2 border-t-black pt-[20px]">
                <h1 >{voucher.amount > 0 ? <span className="font-bold">Mã giảm giá: {voucher.amount} VNĐ </span> :  "" } </h1>  
                <h1>{voucher.percent > 0 ? <span className="font-bold">Mã giảm giá: {voucher.percent} % </span> :  "" } </h1>  
                  </div>
                <div className=" pt-5 flex ">
                  <span className="grow font-semibold">Tạm Tính </span>
                  <span className="text-right ">{formatCurrency(total)}</span>
                </div>
                <div className=" pt-5 flex">
                  <span className="grow font-semibold">Chi phí vận chuyển</span>
                  <span className="text-right ">
                    {fee ? formatCurrency(fee) : 0}
                  </span>
                </div>
                <div className=" pt-5 flex">
                  <span className="grow font-semibold">Tổng tiền</span>
                  <span className="text-right ">
                    {fee ? formatCurrency(total + fee) : formatCurrency(total)}
                  </span>
                </div>

                <div className="flex flex-col  my-[10px]">
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-radio"
                      type="radio"
                      onClick={() => setPayment(0)}
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="inline-radio"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Thanh toán khi giao hàng (COD)
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      onClick={() => setPayment(1)}
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="inline-2-radio"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Chuyển khoản qua ngân hàng
                    </label>
                  </div>
                  {Payment == 1 ? (
                    <div className="max-w-sm p-6 my-[15px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <img
                        width="100px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Logo_MB_new.png/1200px-Logo_MB_new.png"
                        alt=""
                      />
                      <h5 className="mb-2 text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
                        Số tài khoản: 2730101186666
                      </h5>
                      <h5 className="mb-2 text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
                        Chủ tài khoản: Nguyễn Văn Hải
                      </h5>
                      <h5 className="mb-2 text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
                        Nội dung : {carts?.carts?.tm_codeorder}
                      </h5>
                      <div className="selection:bg-fuchsia-300 font-semibold selection:text-fuchsia-900">
                        <p>
                          Lưu ý: Vui lòng chuyển khoản đúng nội dung, nếu chuyển
                          sai vui lòng{" "}
                          <a
                            href="https://chat.zalo.me/?phone=0982641483"
                            className="text-blue-600"
                          >
                            bấm vào đây
                          </a>{" "}
                          để liện hệ với người bán hàng
                        </p>
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                </div>

                <button className="bg-black text-white font-semibold p-3 mt-10 w-full">
                  Hoàn tất Đơn hàng
                </button>
              </div>
            </section>
          </section>
        </section>
      </form>
    </div>
  );
};

export default CheckoutPage;
