const express = require("express");
const router = express.Router();
const showsController = require("../controllers/thd");

// InDUCES

router.get("/", showsController.index);

router.delete("/:id", showsController.del);

router.put("/:id", showsController.update);

router.post("/", showsController.create);

router.get("/:id", showsController.show);


module.exports = router;
