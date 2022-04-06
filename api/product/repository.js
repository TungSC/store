import { Product } from "../../sequelize/sequelize.js"

// GET
async function GetProduct(req, res, next) {
	const product = await Product.findOne({where: {id: req.params.id}})
	res.json(product);
}

// GET
async function FindProducts(req, res) {
	const products = await Product.findAll()
}

//POST
async function CreateProduct(req, res) {
	const tung = await Product.create({title: "product"})
	console.log(tung)
}

//POST
async function UpdateProduct(req, res) {

}

export {
	GetProduct,
	FindProducts,
	CreateProduct
}