import Order from "../models/order";
import api from "./api";
import User from "../models/user";

//TODO Add cacheing
export function getOrderById(id: number) {
	return api.get<Order>(`/orders/${id}`);
}

export function getUsersOrders(currUser: User) {
	//TODO
	return api.post<Order>("/orders/");
}
