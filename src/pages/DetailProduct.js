import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import productApi from "../api/productApi";
import Button from "../components/button/Button";
import { addToCart } from "../store/slices/cart";
const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [qty, setQty] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      const res = await productApi.getProduct(id);
      setProduct(res?.data);
      setLoading(false);
    };
    fetchProduct();
  }, [id, dispatch]);

  console.log(isLoading);

  const handleRate = (rate) => {
    console.log(rate);
    if (isLoggedIn) {
      alert("You rated");
    } else {
      alert("Sign in to rate");
    }
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        desc: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
        quantity: Number(qty),
      })
    );
    toast.success("Add to cart success");
  };

  return (
    <div className="w-full px-5 py-10 bg-white">
      {isLoading ? (
        <>
          <div className="hidden mx-auto md:flex gap-x-10">
            <Skeleton variant="rectangular" width={669} height={600} />
            <div className="flex flex-col gap-y-3">
              <Skeleton variant="rectangular" width={669} height={70} />
              <Skeleton variant="rectangular" width={669} height={70} />
              <Skeleton variant="rectangular" width={669} height={400} />
            </div>
            <Skeleton variant="rectangular" width={400} height={300} />
          </div>
          <div className="flex gap-2 md:hidden">
            <Skeleton variant="rectangular" width={350} height={400} />
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
        </>
      ) : (
        <div className="flex">
          <div className="flex flex-col items-center w-1/2 px-10 py-5 quanque">
            {/* <ReactImageMagnify
   {...{
     smallImage: {
       alt: "Wristwatch by Ted Baker London",
       isFluidWidth: true,
       src: product?.image || "",
     },
     largeImage: {
       src: product?.image || "",
       width: 1200,
       height: 1800,
     },
     enlargedImageContainerStyle: {
       zIndex: "1500",
     },
     enlargedImageContainerDimensions: {
       width: "150%",
       height: "100%",
     },
   }}
 /> */}
            <img
              src={product.image}
              alt=""
              className="w-full h-[450px] md:h-[600px] object-contain"
            />

            <p className="w-full mt-10 text-center text-gray-400 ">
              Roll over image to zoom in
            </p>
          </div>
          <div className="flex flex-col w-1/2 md:flex-row gap-x-4">
            <div className="w-full md:w-3/4 ">
              <h1 className="text-lg font-semibold md:text-2xl">
                {product.title}{" "}
              </h1>
              <div className="mb-6 border-b">
                <div className="flex flex-col text-sm font-semibold text-green-600 md:items-center md:flex-row gap-x-5">
                  {
                    <Rating
                      initialRating={Number(Math.floor(product?.rating?.rate))}
                      emptySymbol={
                        <span className="text-xs text-yellow-500">
                          <StarBorderIcon />
                        </span>
                      }
                      fullSymbol={
                        <span className="text-xs text-yellow-400">
                          <StarIcon color="yellow" />
                        </span>
                      }
                      onClick={handleRate}
                    />
                  }
                  <span className="text-xs md:text-sm">{`${product?.rating?.count} ratings`}</span>
                  <div className="h-4 hidden md:block border-[1px] border-amazon_blue mt-1 "></div>
                  <span className="text-xs md:text-sm">{`${product?.category} ratings`}</span>
                </div>
              </div>
              <p className="mb-4 text-xl font-bold md:text-4xl">
                <span className="text-lg text-red-600">-32%</span> $
                {product.price}{" "}
              </p>
              <p className="text-xs font-normal md:text-lg">
                {product.description}
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:w-1/2">
              <div className="w-full p-3 border rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="text-lg mt-[-12px]">$</span>
                  <span className="font-semibold mtext-sm md:text-3xl">
                    {product.price}
                  </span>
                  <span className="text-xs md:text-base">{`$(${product.price}/ count)`}</span>
                </div>
                <p className="mb-3 text-xs md:text-lg">
                  $63.88 Shipping & Import Fees Deposit to Vietnam Details
                  Delivery <strong>Monday, March 6</strong>
                </p>
                <p className="mb-4 text-sm text-amazon_blue hover:text-orange-500">
                  Delivery to Vietnam
                </p>
                <select
                  onChange={(e) => setQty(e.target.value)}
                  className="px-1 py-[1px] bg-gray-100 shadow-xl rounded-xl mb-5"
                >
                  <option>Qty: 1</option>
                  {Array(30)
                    .fill(30)
                    .map((item, idx) => (
                      <option key={idx} value={idx + 1}>
                        {idx + 1}
                      </option>
                    ))}
                </select>
                <Button
                  onClick={handleAddToCart}
                  className="w-full border-none rounded-full outline-none hover:bg-yellow-500"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
