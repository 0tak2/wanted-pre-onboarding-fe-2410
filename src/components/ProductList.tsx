import { ProductData } from "../api/products";
import ProductCard from "./ProductCard";
import ProductTotalPriceIndicator from "./ProductTotalPriceIndicator";

function ProductList({productData}: {productData: ProductData[] }) {
  return <>
    <ProductTotalPriceIndicator productData={productData} />
    <div>
      {productData.map((product, index) => <ProductCard productInfo={product} key={index} />)}
    </div>
  </>
}

export default ProductList;
