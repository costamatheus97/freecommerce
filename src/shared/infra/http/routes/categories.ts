import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/products/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/products/useCases/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const router = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

router.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  createCategoryController.handle
);

router.get("/", listCategoriesController.handle);

export default router;
