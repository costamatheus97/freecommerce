interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  image_url?: string;
  stock: number;
  category_id: string;
  id?: string;
}

export { ICreateProductDTO };
