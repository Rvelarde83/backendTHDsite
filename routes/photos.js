const express = require("express");
const router = express.Router();
const photosController = require("../controllers/photos");

// InDUCES

router.get("/", photosController.indexPhotos);

router.delete("/:id", photosController.delPhotos);

router.put("/:id", photosController.updatePhotos);

router.post("/", photosController.createPhotos);

router.get("/:id", photosController.showPhotos);


module.exports = router;
