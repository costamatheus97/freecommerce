import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, image_url, category_id, price, stock, id } =
      req.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    const createdProduct = await createProductUseCase.execute({
      name,
      description,
      image_url,
      category_id,
      price,
      stock,
      id,
    });

    return res.status(201).json(createdProduct);
  }
}

export { CreateProductController };
