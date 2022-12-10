import { ProductDetailCardPrimary } from "../../../components";
import { ProductDetail } from "../../../interfaces";

export default function AdminProductsPage(product: ProductDetail) {
  return <ProductDetailCardPrimary product={product} />;
}
