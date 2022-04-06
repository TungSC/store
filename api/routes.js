import { GetProduct, FindProducts } from "./product/usecase.js"

const onlineStoreApi = [{
	path: "/products",
	children: [{
		method: 'get',
		path: "/",
		auth: true,
		module: FindProducts,
	},{
		method: 'get',
		path: "/:id",
		auth: true,
		module: GetProduct,
	}]
}]

export default onlineStoreApi
