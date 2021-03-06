
const productModel = require('../models/productModel');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		productModel.findById(req.params.productId, function(err, productInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "product found!!!", data:{products: productInfo}});
			}
		});
	},

	getAll: function(req, res, next) {
		let productsList = [];

		productModel.find({}, function(err, products){
			if (err){
				next(err);
			} else{
				for (let product of products) {
					productsList.push({id: product._id, name: product.name, quantity: product.quantity});
				}
				res.json({status:"success", message: "products list found!!!", data:{products: productsList}});
							
			}

		});
    },

    getStock: function(req, res, next) {
		let productsList = [];

		productModel.find({ quantity: { $gte: 1}}, function(err, products){
			if (err){
				next(err);
			} else{
				for (let product of products) {
					productsList.push({id: product._id, name: product.name, quantity: product.quantity});
				}
				res.json({status:"success", message: "stock list found!!!", data:{products: productsList}});
							
			}

		});
    },

	updateById: function(req, res, next) {
		productModel.findByIdAndUpdate(req.params.productId,{name:req.body.name, quantity:req.body.quantity}, function(err, productInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "product updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		productModel.findByIdAndRemove(req.params.productId, function(err, productInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "product deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		productModel.create({ name: req.body.name, quantity: req.body.quantity }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "product added successfully!!!", data: null});
				  
				});
	},

}					