import React, { useEffect, useState } from "react";
import { CheckoutLayout } from "../layouts";
import { FormGroup, Label } from "../components/commom";
import Input from "../components/input/Input";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { v4 } from "uuid";
import { clearCart, sumTotal } from "../store/slices/cart";
const Checkout = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { items, totalItem, subTotal } = useSelector((state) => state.cart);

  // const subTotal = items?.reduce((prevVal, currentVal) => {
  //   return (prevVal += currentVal.price * currentVal.quantity);
  // }, 0);
  useEffect(() => {
    dispatch(sumTotal());
  }, [items, dispatch]);

  const [payload, setPayload] = useState({
    country: "Viet Nam",
    name: userInfo.clientName,
    city: "",
    zipCode: "",
    phoneNumber: "",
    paymentMethod: "COD",
    subTotal: subTotal,
    totalItem: totalItem,
  });

  console.log(payload);
  const handleCheckout = async () => {
    await setDoc(doc(db, "orders", v4()), payload);
    dispatch(clearCart());
  };
  return (
    <CheckoutLayout>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col w-full gap-5 md:w-3/4">
          <div className="pb-10 border-b">
            <div className="flex mb-3 text-lg font-bold text-red-500 md:text-2xl">
              <div className="w-10 ">1</div>
              <div className="w-full ">Enter a new shipping address</div>
            </div>
            <div className="block p-4 ml-10 border rounded-lg">
              <div className="w-full md:w-[65%]">
                <h2 className="text-lg font-bold md:text-2xl">
                  Add a new address
                </h2>
                <FormGroup>
                  <Label htmlFor={"country"} className="mt-3">
                    Country/Region
                  </Label>
                  <Input
                    setPayload={setPayload}
                    id={"country"}
                    name="country"
                    payload={payload}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor={"name"} className="mt-3">
                    Full Name
                  </Label>
                  <Input
                    setPayload={setPayload}
                    id={"name"}
                    name="name"
                    payload={payload}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor={"city"} className="mt-3">
                    State / Province / Region
                  </Label>
                  <Input
                    setPayload={setPayload}
                    id={"city"}
                    name="city"
                    payload={payload}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor={"address"} className="mt-3">
                    Address
                  </Label>
                  <Input
                    setPayload={setPayload}
                    id={"address"}
                    name="zipCode"
                    payload={payload}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor={"phone-checkout"} className="mt-3">
                    Phone Number
                  </Label>
                  <Input
                    setPayload={setPayload}
                    id={"phone-checkout"}
                    name="phone"
                    payload={payload}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
          <div className="pb-10 border-b">
            <div className="flex mb-3 text-2xl font-bold text-red-500 ">
              <div className="w-10 ">2</div>
              <div className="w-full ">Payment method</div>
            </div>
            <form className="block p-4 ml-10 border rounded-lg">
              <div className="w-[65%] ">
                <div className="flex gap-x-4">
                  <input
                    id="cod"
                    name="payment"
                    onChange={(e) =>
                      setPayload((prev) => ({
                        ...prev,
                        paymentMethod: e.target.value,
                      }))
                    }
                    value="COD"
                    type={"radio"}
                  />
                  <Label htmlFor={"cod"} className="text-gray-500">
                    COD
                  </Label>
                </div>
                <div className="flex gap-x-4">
                  <input
                    onChange={(e) =>
                      setPayload((prev) => ({
                        ...prev,
                        paymentMethod: e.target.value,
                      }))
                    }
                    id="vnpay"
                    name="payment"
                    value="VNPAY"
                    type={"radio"}
                    disabled
                  />
                  <Label htmlFor={"vnpay"} className="text-gray-500">
                    VNPAY
                  </Label>
                </div>
                <div className="flex gap-x-4">
                  <input
                    onChange={(e) =>
                      setPayload((prev) => ({
                        ...prev,
                        paymentMethod: e.target.value,
                      }))
                    }
                    id="paypal"
                    name="payment"
                    value="PAYPAL"
                    disabled
                    type={"radio"}
                  />
                  <Label htmlFor={"paypal"} className="text-gray-500">
                    PAYPAL
                  </Label>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  Payment systems via VNPAY and Paypal are under maintenance
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="p-5 h-[40%] border rounded-lg grow">
          <div className="flex flex-col gap-5 text-sm font-semibold grow-0">
            <h1 className="text-2xl font-bold"> Order Summary</h1>
            <div className="flex justify-center w-full ">
              <div className="w-3/5 font-bold md:text-base">Items: </div>
              <div className="text-right grow">{totalItem}</div>
            </div>
            <div className="flex justify-center w-full ">
              <div className="w-3/5 font-bold md:text-base">Shiping</div>
              <div className="text-right grow">
                $ {(subTotal * 1.1 - subTotal).toFixed(2)}
              </div>
            </div>
            <div className="flex justify-center w-full ">
              <div className="w-3/5 font-bold md:text-base">Total</div>
              <div className="text-right grow">${subTotal.toFixed(2)}</div>
            </div>
            <Button onClick={handleCheckout}>Check Out</Button>
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Checkout;
