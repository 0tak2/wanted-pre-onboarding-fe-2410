import { ProductData } from "../api/products";
import ProductCard from "./ProductCard";

function ProductList(props: {productData: ProductData[] }) {
  return <>
    {props.productData.map((product, index) => <ProductCard productInfo={product} key={index} />)}
  </>
}

export default ProductList;
