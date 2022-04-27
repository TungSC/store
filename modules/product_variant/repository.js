import { ProductVariant } from "../../sequelize/sequelize.js"

// GET
async function Get(id) {
	return ProductVariant.findOne({where: {id: id}})
}

// GET
async function Find(productID) {
	return ProductVariant.findAll({where: { product_id: productID }})
}

//POST
async function Create(data) {
	return ProductVariant.create(data)
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