import { ProductDetailCardPrimary } from "../../components";
import { ProductDetail } from "../../interfaces";

export default function MainAdminPage(product: ProductDetail) {
  return <ProductDetailCardPrimary product={product} />;
}
