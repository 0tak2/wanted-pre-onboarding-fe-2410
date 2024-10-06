import { ProductData } from "../api/products";

function ProductTotalPriceIndicator({productData}: {productData: ProductData[] }) {
  return <div>
    Price Total: {
      productData.reduce((prev, nextProduct) => prev + nextProduct.price, 0)
    }
  </div>
}

export default ProductTotalPriceIndicator;
