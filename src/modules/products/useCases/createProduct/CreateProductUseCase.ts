import { injectable, inject } from "tsyringe";

import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
  price: number;
  image_url?: string;
  stock: number;
  category_id: string;
  id?: string;
}

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    name,
    description,
    image_url,
    category_id,
    price,
    stock,
    id,
  }: IRequest): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Car already exists");
    }

    const product = await this.productsRepository.create({
      name,
      description,
      image_url,
      category_id,
      price,
      stock,
      id,
    });

    return product;
  }
}

export { CreateProductUseCase };
