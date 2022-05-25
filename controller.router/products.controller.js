module.exports.productsController = {
  getProducts: (req, res) => {
    res.json(" Get product");
  },

  getProductsId: (req, res) => {
    res.json("Get product id");
  },

  postProducts: (req, res) => {
    res.json("Post product");
  },

  deleteProducts: (req, res) => {},
};
