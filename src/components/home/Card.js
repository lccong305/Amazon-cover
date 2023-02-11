import ApiIcon from "@mui/icons-material/Api";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import React from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/slices/cart";
const Card = ({ item = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleRate = (e) => {
    if (isLoggedIn) {
      alert("Rating success");
    } else {
      alert("Sign in to rate");
    }

    if (e.stopPropagation) e.stopPropagation();
  };

  const handleAddToCart = (e) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        desc: item.description,
        price: item.price,
        category: item.category,
        image: item.image,
        quantity: 1,
      })
    );

    e.stopPropagation();
  };

  return (
    <div onClick={() => navigate(`/detail/${item.id}`)}>
      <div className="product-card bg-white  h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-100 relative flex flex-col gap-4">
        <span className="absolute text-xs italic text-gray-500 capitalize right-2 top-2">
          {item.category}
        </span>
        <div className="relative flex items-center justify-center w-full overflow-hidden group">
          <img src={item.image} className="object-contain h-64 w-52" alt="" />
          <ul
            className="absolute group-hover:bottom-0 transition-all duration-700   left-0 right-0 flex flex-col w-full px-2 text-base 
            font-semibold text-gray-700 bg-white h-36 
        bottom-[-170px] option-product-cart"
          >
            <li className="flex items-center justify-end py-1 border-b cursor-pointer gap-x-2">
              Compare
              <span>
                <ApiIcon />
              </span>
            </li>
            <li className="flex items-center justify-end py-1 border-b cursor-pointer gap-x-2">
              Add to cart
              <span>
                <ShoppingCartIcon />
              </span>
            </li>
            <li className="flex items-center justify-end py-1 border-b cursor-pointer gap-x-2">
              View Detail
              <span>
                <ArrowCircleRightIcon />
              </span>
            </li>
            <li className="flex items-center justify-end py-1 border-b gap-x-2">
              Add to WishList
              <span>
                <FavoriteIcon />
              </span>
            </li>
          </ul>
        </div>
        <div className="px-4">
          <div className="flex justify-between ">
            <h2 className="text-base font-bold ">
              {item.title.substring(0, 20)}
            </h2>
            <p className="tex-xs">${item.price}</p>
          </div>
          <div>
            <p>{item.description.substring(0, 100)}...</p>
            <div
              onClick={(e) => e.stopPropagation()}
              className="mb-2 text-yellow-500 "
            >
              <Rating
                initialRating={Number(Math.floor(item?.rating?.rate))}
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
            </div>
            <button
              className="w-full py-2 font-bold bg-yellow-300 rounded-lg font-titleFont "
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
