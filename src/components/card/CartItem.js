import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  deleteItem,
} from "../../store/slices/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="w-full lg:w-1/5">
        <img src={item?.image} alt="" className="object-contain w-full h-44" />
      </div>
      <div className="w-full lg:w-4/5 ">
        <h2 className="text-lg font-semibold"> {item?.title} </h2>
        <p className="text-sm lg:pr-10"> {item?.desc} </p>
        <p className="text-base">
          Unit Price <span className="font-semibold">{item?.price}</span>
        </p>
        <div className="flex py-2 shadow-lg w-[210px] gap-x-6 px-2 rounded-lg bg-gray-100 my-3">
          <p className="">Qty: </p>
          <p
            onClick={() => dispatch(decrementItem(item.id))}
            className="px-3 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-400"
          >
            -
          </p>
          {item?.quantity}
          <p
            onClick={() => dispatch(incrementItem(item.id))}
            className="px-3 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-400"
          >
            +
          </p>
        </div>
        <div className="block mb-2 text-xl font-bold lg:hidden">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          onClick={() => dispatch(deleteItem(item.id))}
          className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-700"
        >
          Delete item
        </button>
      </div>
      <div className="hidden text-xl font-bold lg:block">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
