import usecase from "./usecase.js"

async function GetProduct(req, res) {
	const product = await usecase.GetByID(req.params.id)

	res.json(product)
}

async function GetProducts(req, res) {
	const products = await usecase.Find()

	res.json(products)
}

async function Create(req, res) {
	const product = await usecase.Create(req.body)

	res.json(product)
}

function Update(req, res) {

}

let Product = {
	GetProduct,
	GetProducts,
	Create,
	Update
}
export default Product