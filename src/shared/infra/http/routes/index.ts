import { Router } from "express";

import authenticate from "./authenticate";
import categories from "./categories";
import products from "./products";
import users from "./users";

const router = Router();

router.use("/categories", categories);
router.use("/products", products);
router.use("/users", users);
router.use(authenticate);

export default router;
