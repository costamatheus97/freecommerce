import { Router } from "express";
import multer from "multer";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { ImportProductsController } from "@modules/products/useCases/importProducts/ImportProductsController";
import { ListAvailableProductsController } from "@modules/products/useCases/listAvailableProducts/ListAvailableProductsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const router = Router();

const createProductController = new CreateProductController();
const importProductsController = new ImportProductsController();
const listAvailableProductsController = new ListAvailableProductsController();

const upload = multer({
  dest: "./tmp",
});

router.get("/available", listAvailableProductsController.handle);

router.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  createProductController.handle
);

router.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  ensureIsAdmin,
  importProductsController.handle
);

export default router;
