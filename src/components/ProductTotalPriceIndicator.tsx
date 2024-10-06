import { ProductData } from "../api/products";

function ProductTotalPriceIndicator(props: {productData: ProductData[] }) {
  return <div>
    Price Total: {
      props.productData.reduce((prev, nextProduct) => prev + nextProduct.price, 0)
    }
  </div>
}

export default ProductTotalPriceIndicator;
