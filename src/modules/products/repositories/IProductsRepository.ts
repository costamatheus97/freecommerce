import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  findAvailable(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Product[]>;
  findByName(name: string): Promise<Product>;
  findById(id: string): Promise<Product>;
  create(data: ICreateProductDTO): Promise<Product>;
}

export { IProductsRepository };
