import { ProductData } from "../api/products";

function ProductCard(props: {productInfo: ProductData}) {
    return <div>
      <ul>
        <li>productId: {props.productInfo.productId}</li>
        <li>productName: {props.productInfo.productName}</li>
        <li>price: {props.productInfo.price}</li>
        <li>boughtDate: {props.productInfo.boughtDate}</li>
      </ul>
    </div>
}

export default ProductCard;
