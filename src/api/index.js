import client, { METHODS } from "./client";

export const api = {
  user: {
    login: (params) =>
      client({
        url: "/api/login",
        data: params,
        method: METHODS.POST,
      }),
  },
  product: {
    getProduct: () =>
      client({
        url: "/api/getProducts",
        method: METHODS.GET,
      }),
  },
};
