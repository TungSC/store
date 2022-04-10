import repository from "./repository.js"

// GET
async function GetByID(req, res, next) {
	let id = req.params.id
	if (isNaN(Number(id))) {
		return res.end("sai cde roi anh")
	}

	const product = await repository.Get(id)

	res.json(product);
}

// GET
async function Find(req, res) {
	const products = await repository.Find()

	res.json(products)
}

//POST
async function Create(req, res) {
	const product = repository.Create({title: "tung"})

	res.json(product)
}

//POST
async function Update(req, res) {

}

let Product = {
	GetByID,
	Find,
	Create,
	Update
};
export default Product