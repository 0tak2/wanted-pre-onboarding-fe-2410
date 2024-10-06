import { ProductData } from "../api/products";

function ProductCard({productInfo}: {productInfo: ProductData}) {
    return <div>
      <ul>
        <li>productId: {productInfo.productId}</li>
        <li>productName: {productInfo.productName}</li>
        <li>price: {productInfo.price}</li>
        <li>boughtDate: {productInfo.boughtDate}</li>
      </ul>
    </div>
}

export default ProductCard;
