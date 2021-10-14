import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableProductsUseCase } from "./ListAvailableProductsUseCase";

class ListAvailableProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListAvailableProductsUseCase);

    const products = await listProductsUseCase.execute();

    return res.json(products);
  }
}

export { ListAvailableProductsController };
