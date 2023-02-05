import storage from "redux-persist/lib/storage";
import cartReducer from "./slices/cart";
import productReducer from "./slices/product";
import authReducer from "./slices/auth";

import { persistReducer } from "redux-persist";

const persistConfig = {
  storage,
  version: 1,
};

const cartConfig = {
  ...persistConfig,
  key: "cartItems",
  // blacklist: ["totalItem"],
};
const authConfig = {
  ...persistConfig,
  key: "auth",
  blacklist: ["isLoggedIn, userInfo"],
};
const persistedReducer = persistReducer(cartConfig, cartReducer);
const persistedReducerAuth = persistReducer(authConfig, authReducer);

const rootReducer = {
  cart: persistedReducer,
  product: productReducer,
  auth: persistedReducerAuth,
};

export default rootReducer;
