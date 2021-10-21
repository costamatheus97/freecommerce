import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@modules/products/infra/typeorm/repositories/CategoriesRepository";
import { ProductsRepository } from "@modules/products/infra/typeorm/repositories/ProductsRepository";
import { ICategoriesRepository } from "@modules/products/repositories/ICategoriesRepository";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
