import repository from "./repository.js"

// GET
function GetByID(productID) {
	if (isNaN(Number(productID))) {
		return null
	}

	return repository.Get(productID)
}

// GET
function Find(req, res) {
	return repository.Find()
}

//POST
function Create(body) {
	let data = {
		title: body?.title,
		description: body?.description,
		is_published: body?.is_published,
		sku: body?.sku,
		handle: body?.handle
	}
	return repository.Create(data)
}

//POST
function Update(req, res) {

}

let Usecase = {
	GetByID,
	Find,
	Create,
	Update
};
export default Usecase