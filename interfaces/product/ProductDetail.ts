import Category from "./Category";
import Gallery from "./Gallery";
import Price from "./Price";
import Tag from "./Tag";

export default interface ProductDetail {
  sku: string;
  slug: string;

  name: string;
  description: string;
  content: string;

  image: string;
  price: Price;
  categories: Category[];
  tags: Tag[];
  gallery?: Gallery[];

  created: string;
  updated: string;

  type: string;
  status: string;
  stock_quantity: Number;
  inStock: boolean;
  // related_ids: [],
  // upsell_ids: [],
  // variations: [],

  avgRating?: Number;
  ratingCount?: Number;
  featured?: boolean;
}
