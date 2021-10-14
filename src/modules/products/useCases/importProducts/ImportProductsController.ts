import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportProductUseCase } from "./ImportProductsUseCase";

class ImportProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importProductsUseCase = container.resolve(ImportProductUseCase);

    await importProductsUseCase.execute(file);

    return res.status(201).send();
  }
}

export { ImportProductsController };
