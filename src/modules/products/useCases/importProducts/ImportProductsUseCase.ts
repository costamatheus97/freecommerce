import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

interface IImportProduct {
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: string;
}

@injectable()
class ImportProductUseCase {
  constructor(
    @inject("productsRepository")
    private productsRepository: IProductsRepository
  ) {}

  private loadProducts(file: Express.Multer.File): Promise<IImportProduct[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const products: IImportProduct[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description, price, stock, category_id] = line;

          products.push({
            name,
            description,
            category_id,
            price,
            stock,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(products);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const products = await this.loadProducts(file);

    products.map(async (product) => {
      const { name, description, category_id, price, stock } = product;

      const existCategory = await this.productsRepository.findByName(name);

      if (!existCategory) {
        await this.productsRepository.create({
          name,
          description,
          category_id,
          price,
          stock,
        });
      }
    });
  }
}

export { ImportProductUseCase };
