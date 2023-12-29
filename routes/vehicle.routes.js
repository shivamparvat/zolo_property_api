const express = require("express");
const router = express.Router();
const {
  list,
  add,
  update,
  delete: deleteController,
} = require("../controllers/vehicleController");
const { middleware } = require("../helper/middleware/authentication");

router.post("/list", list);
router.post("/add", add);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteController);

module.exports = router;
