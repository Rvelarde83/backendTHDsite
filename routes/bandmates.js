const express = require("express");
const router = express.Router();
const bandmatesController = require("../controllers/bandmates");

// InDUCES

router.get("/", bandmatesController.indexBandmates);

router.delete("/:id", bandmatesController.delBandmates);

router.put("/:id", bandmatesController.updateBandmates);

router.post("/", bandmatesController.createBandmates);

router.get("/:id", bandmatesController.showBandmates);


module.exports = router;
