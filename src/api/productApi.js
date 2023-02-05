import axiosInstance from "../config/axios";

const productApi = {
  // [GET] /products/:_id
  getProducts: () => {
    const url = `/products`;
    return axiosInstance.get(url);
  },
  getProduct: (id) => {
    const url = `/products/${id}`;
    return axiosInstance.get(url);
  },
};

export default productApi;
