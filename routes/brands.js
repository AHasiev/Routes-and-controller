const { Router } = require ('express')
const router = Router();
const express = require("express");
const { brandsController } = require('../controller.router/brands.controller')


router.get("/brands", brandsController.getBrands);

router.post("/brands", brandsController.postBrands);

router.delete("/brands", brandsController.deleteBrands);

module.exports = router;