import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CarsImagesRepository } from "@modules/products/infra/typeorm/repositories/CarsImagesRepository";
import { CarsRepository } from "@modules/products/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "@modules/products/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/products/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "@modules/products/repositories/IProductsRepository";
import { ICategoriesRepository } from "@modules/products/repositories/ICategoriesRepository";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);