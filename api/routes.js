const onlineStoreApi = [{
  method: 'POST',
  path: "/product",
  auth: true,
  module: productsResolver,
}, {
  method: 'POST',
  path: "/product/:id",
  auth: true,
  module: productResolver,
}, {

}]

export default onlineStoreApi
