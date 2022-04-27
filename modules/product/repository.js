import {Product, ProductVariant} from "../../sequelize/sequelize.js"

// GET
async function Get(id) {
	return Product.findOne({
		where: {id: id},
		include: ProductVariant
	})
}

// GET
async function Find() {
	return Product.findAll()
}

//POST
async function Create(data) {
	return Product.create(data)
}

//POST
async function Update(req, res) {

}

const repository =  {
	Get,
	Find,
	Create
};
export default repository