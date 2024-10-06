import { ProductData } from "../api/products";
import ProductCard from "./ProductCard";
import ProductTotalPriceIndicator from "./ProductTotalPriceIndicator";

function ProductList(props: {productData: ProductData[] }) {
  return <>
    <ProductTotalPriceIndicator productData={props.productData} />
    <div>
      {props.productData.map((product, index) => <ProductCard productInfo={product} key={index} />)}
    </div>
  </>
}

export default ProductList;
