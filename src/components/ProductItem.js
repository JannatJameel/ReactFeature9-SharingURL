import { Link } from "react-router-dom";
// Components
import Buttons from "./Buttons";
// Styling
import { ProductWrapper } from "../styles";

const ProductItem = ({product}) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image}/>
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <Buttons productId={product.id} productSlug={product.slug}/>
    </ProductWrapper>
  );
};

export default ProductItem;
