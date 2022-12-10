import Image from "next/image";
import { ProductDetail } from "../../interfaces";

export default function ProductDetailCardPrimary({
  product,
}: {
  product: ProductDetail;
}) {
  return (
    <div className="product-detail border-b border-[#ededed] md:py-[90px] py-[50px] flex justify-center">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-x-[25px] max-md:gap-y-[25px]">
          <div className="lg:col-span-6 col-span-12">
            <div className="product-detail-img relative">
              <Image
                className="w-full"
                src="/products/product1.jpg"
                alt="Product Image"
                width={585}
                height={585}
              />
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="product-detail-content">
              <h3 className="mb-[10px]">{product?.name}</h3>
              <span className="product-price text-[30px] leading-[42px] text-[#999999] mb-[25px]">
                {"$ " + product?.price}
              </span>
              <p className="text-[14px] leading-[24px] lg:max-w-[450px]">
                {product?.description}
              </p>
              <div className="group-btn flex py-[30px]">
                <div className="relative inline-flex border border-[#dddddd] mr-[15px]">
                  <div className="flex justify-center w-[120px]">
                    <button
                      type="button"
                      className="cursor-pointer text-center absolute w-[24px] leading-[23px] dec top-1/2 -translate-y-1/2 left-[4px]"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M400 256H112"
                        />
                      </svg>
                    </button>
                    <input
                      className="qty-input outline-none text-center w-[100px] px-[15px] h-[46px] leading-[40px]"
                      type="text"
                      name="qtybutton"
                      defaultValue={1}
                    />
                    <button
                      type="button"
                      className="cursor-pointer text-center absolute w-[24px] leading-[23px] inc top-1/2 -translate-y-1/2 right-[4px]"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M256 112v288m144-144H112"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-black text-white px-[42px] h-[46px] leading-[44px]  mr-[15px]"
                  >
                    Add to cart
                  </button>
                </div>
                <button
                  type="button"
                  className="border border-[#dddddd] text-[20px] w-[46px] h-[46px] leading-[46px] inline-flex justify-center items-center transition-all hover:text-primary"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                    />
                  </svg>
                </button>
              </div>
              <div className="other-info">
                <div className="sku-wrap font-medium">
                  <span>SKU:</span>
                  <span className="text-[#666666] ml-[5px]">
                    {product?.sku}
                  </span>
                </div>
                <div className="category-wrap font-medium">
                  <span>Categories:</span>
                  <span className="text-[#666666] ml-[5px]">
                    {product?.categories?.map((item) => {
                      return <span>{item.label}</span>;
                    })}
                  </span>
                </div>
                <div className="category-wrap font-medium">
                  <span>Tags:</span>
                  <span className="text-[#666666] ml-[5px]">
                    {product?.tags?.map((item) => {
                      return <span>{item.label}</span>;
                    })}
                  </span>
                </div>
                <div className="social-wrap flex pt-[65px]">
                  <span className="text-black font-medium">
                    Share this items :
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
