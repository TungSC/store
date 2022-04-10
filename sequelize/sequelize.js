import { config } from "dotenv"
import {Sequelize} from "sequelize";
import ProductModel from "./schema/product.js"
import MediaModel from "./schema/media.js"

//import ProductOptionModel from "./schema/product_option.js"

config()
const env = process.env
const dbClient = new Sequelize(`postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`)

// call model
const Product = ProductModel(dbClient)
const Media = MediaModel(dbClient)

// make relationship
Media.hasOne(Product, {
	foreignKey: "feature_image_id"
})

dbClient.sync({force: false, alter: true}).then(() => {
	console.log(`Database & tables created!`)
})

export {
	Product
}
