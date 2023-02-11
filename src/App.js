import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import Products from "./components/home/Products";
import { useDispatch } from "react-redux";
import productApi from "./api/productApi";
import { DefaultLayout } from "./layouts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DetailProduct from "./pages/DetailProduct";
import { getProducts, getProductStart } from "./store/slices/product";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataProducts = async () => {
      dispatch(getProductStart());
      const res = await productApi.getProducts();
      dispatch(getProducts(res.data));
    };
    fetchDataProducts();
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail/:id" element={<DetailProduct />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/check-out" element={<Checkout />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
