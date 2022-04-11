import { config } from "dotenv"
import {Sequelize} from "sequelize";
import ProductModel from "./schema/product.js"
import ProductVariantModel from "./schema/product_variant.js"
import ProductOptionModel from "./schema/product_option.js"
import ProductOptionValueModel from "./schema/product_option_value.js"
import VariantProductOptionModel from "./schema/variant_product_option.js"
import MediaModel from "./schema/media.js"

//import ProductOptionModel from "./schema/product_option.js"

config()
const env = process.env
const dbClient = new Sequelize(`postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`)

// call model
const Product = ProductModel(dbClient)
const ProductVariant = ProductVariantModel(dbClient)
const ProductOption = ProductOptionModel(dbClient)
const ProductOptionValue = ProductOptionValueModel(dbClient)
const VariantProductOption = VariantProductOptionModel(dbClient)
const Media = MediaModel(dbClient)

// make relationship
Product.hasMany(ProductVariant, {
	foreignKey: "product_id"
});
Product.hasMany(ProductOption, {
	foreignKey: "product_id"
});
ProductOption.hasOne(ProductOptionValue, {
	foreignKey: "option_id"
})
ProductOption.hasOne(VariantProductOption, {
	foreignKey: "option_id"
})
ProductVariant.hasOne(VariantProductOption, {
	foreignKey: "variant_id"
})
ProductOptionValue.hasOne(VariantProductOption, {
	foreignKey: "option_value_id"
})
Media.hasOne(Product, {
	foreignKey: "feature_image_id"
});
Media.hasOne(ProductVariant, {
	foreignKey: "media_id"
});


dbClient.sync({force: false, alter: true}).then(() => {
	console.log(`Database & tables created!`)
})

export {
	Product,
	ProductVariant,
	ProductOption,
	ProductOptionValue,
	VariantProductOption,
	Media
}
