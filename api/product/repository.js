import {Product} from "../../sequelize/sequelize.js"

// GET
async function GetProduct(id) {
	return Product.findOne({where: {id: id}})
}

// GET
async function FindProducts() {
	return Product.findAll()
}

//POST
async function CreateProduct(data) {
	return Product.create(data)
}

//POST
async function UpdateProduct(req, res) {

}

const repository =  {
	GetProduct,
	FindProducts,
	CreateProduct
};
export default repository