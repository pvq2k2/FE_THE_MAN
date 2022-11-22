import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import {
  changeQuantity,
  Decrement,
  Increment,
} from "../../redux/slices/cartSlice";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

interface CartItemProps {
  item: any;
  id: any;
}

export default function CartItem(props: CartItemProps) {
  const { item, id } = props;
  const dispatch = useDispatch<any>();
  const [inputValue, setInputValue] = useState('');

//   console.log({ "item.quantitychange": item.quantity });
//const [isDisabled, setDisabled] = useState(false);
  useEffect(() => {
    // setTimeout(() => {

    // }, 1000)
    if (item.quantity != inputValue) {
      setInputValue(item.quantity);
    }
  }, [item.quantity]);

  const IncrementC = (data: any) => {
    //setDisabled(true)
    const product = {
      ...data,
      userID: id,
    };
    dispatch(Increment(product));
    //setDisabled(false)
  };

  const DecrementC = (data: any) => {
  //  setDisabled(true)
    const product = {
      ...data,
      userID: id,
    };
    dispatch(Decrement(product));
    //setDisabled(false)
  };

  const onBlurQuantity = (data: any, e: any) => {
   // setDisabled(true)
    setInputValue(e.target.value);
    const product = {
      ...data,
      userID: id,
      quantitychange: e.target.value,
    };
    dispatch(changeQuantity(product));
  //  setDisabled(false)
  };

  return (
    <tr className="border-t-2">
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
      <td className="mr-[300px]">
       <div className="inline-block h-[32px]">
         <button
          onClick={() => DecrementC(item)}
          className="bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black"
        >{`-`}</button>

        <input
          onBlur={(e) => onBlurQuantity(item, e)}
          type="number"
          defaultValue={item.quantity}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        //   onChange={(e) => onChangeQuantity(item, e)}
          className="w-[50px] h-[32px] border-[rgba(0,0,0,.09)]  border-2 text-center"
        />

        <button
          onClick={() => IncrementC(item)}
          className="bg-white-300 border-[rgba(0,0,0,.09)] border-2 h-[32px] w-[30px] text-black"
        >{`+`}</button></div>
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
}
