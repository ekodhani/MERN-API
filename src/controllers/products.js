exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: "Create Success",
            data: {
                id: 1,
                name: "Teh Pucuk",
                price: 3500
            }
        }
    )
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get All Products Succes",
            data: {
                id: 1,
                name: "Teh Pucuk",
                price: 3500
            }
        }
    );
    next();
}