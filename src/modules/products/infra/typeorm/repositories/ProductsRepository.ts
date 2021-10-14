import { getRepository, Repository } from "typeorm";

import { ICreateProductDTO } from "@modules/products/dtos/ICreateProductDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;
  constructor() {
    this.repository = getRepository(Product);
  }

  async findAvailable(category_id?: string): Promise<Product[]> {
    const product = await this.repository.find({ where: { category_id } });

    return product;
  }

  async findByName(name: string): Promise<Product> {
    const product = await this.repository.findOne({ where: { name } });

    return product;
  }

  async findById(id: string): Promise<Product> {
    const product = await this.repository.findOne({ where: { id } });

    return product;
  }

  async create({
    name,
    description,
    image_url,
    category_id,
    price,
    stock,
    id,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      description,
      image_url,
      category_id,
      price,
      stock,
      id,
    });

    await this.repository.save(product);

    return product;
  }
}

export { ProductsRepository };
