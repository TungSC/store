import Product from "./product/usecase.js"

class OnlineStoreAPI {
	routes = [{
		path: "/products",
		children: [
			{
				method: 'get',
				path: '/',
				auth: true,
				module: Product.Find,
			}, {
				method: 'get',
				path: '/:id',
				auth: true,
				module: Product.GetByID,
			}, {
				method: 'post',
				path: '/',
				auth: true,
				module: Product.Create
			}, {
				method: 'put',
				path: '/:id',
				auth: true,
				module: Product.Update
			}
		]
	}]

	RegisterAPI(app) {
		this.routes.forEach((value) => {
			// this is to group child router
			if (value?.children) {
				value.children.forEach((child) => {
					app[child.method](process.env.API_ENDPOINT + value.path + child.path, child.module)
				})
			}

			// if parent having module, we still set module for parent
			value.module && app[value.method](process.env.API_ENDPOINT + value.path, value.module)
		})
	}
}

export default OnlineStoreAPI
