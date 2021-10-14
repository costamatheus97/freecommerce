import { ICreateProductDTO } from "@modules/products/dtos/ICreateProductDTO";
import { Product } from "@modules/products/infra/typeorm/entities/Product";

import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async findByName(name: string): Promise<Product> {
    const productByName = this.products.find(
      (product) => product.name === name
    );

    return productByName;
  }

  async findById(id: string): Promise<Product> {
    const product = this.products.find((product) => product.id === id);

    return product;
  }

  async findAvailable(category_id?: string): Promise<Product[]> {
    const availableProducts = this.products.filter((product) => {
      if (
        !!product.stock === true ||
        (category_id && product.category_id === category_id)
      ) {
        return product;
      }

      return null;
    });

    return availableProducts;
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
    const product = new Product();

    Object.assign(product, {
      name,
      description,
      image_url,
      category_id,
      price,
      stock,
      id,
    });

    this.products.push(product);

    return product;
  }
}

export { ProductsRepositoryInMemory };
