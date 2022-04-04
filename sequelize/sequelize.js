import {Sequelize} from "sequelize";
import ProductModel from "./schema/product.js"
import ProductOptionModel from "./schema/product_option.js"

const dbClient = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const Product = ProductModel(dbClient)
const ProductOption = ProductOptionModel(dbClient)

dbClient.sync().then(() => {
	console.log(`Database & tables created!`)
})

export default {
	Product,
	ProductOption
}
