import repository from "./repository.js";

function GetByID(req, res) {
	let id = req.params.id
	if (isNaN(Number(id))) {
		return res.end("sai cde roi anh")
	}

	return repository.Get(id)
}

// GET
function Find(req, res) {
	return repository.Find()
}

//POST
function Create(body) {
	let data = {
		title: body.title,
		description: body.description,
		is_published: body.is_published,
		sku: body.sku,
		handle: body.handle
	}

	return repository.Create(data)
}

//POST
async function Update(req, res) {

}

let ProductVariant = {
	GetByID,
	Find,
	Create,
	Update
};
export default ProductVariant