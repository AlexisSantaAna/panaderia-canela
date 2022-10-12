import { ordersTypes } from "../types";
import { URL_API } from "../../constants/firebase";

const { GET_ORDERS, DELETE_ORDERS } = ordersTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
        },
      });

      const data = await response.json();
      const orders = Object.keys(data).map((key) => {
        return {
          ...data[key],
          id: key,
        };
      });

      dispatch({
        type: GET_ORDERS,
        orders
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders/${id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      dispatch({
        type: DELETE_ORDERS,
        id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};