import { Link } from "react-router-dom";
// Styling
import { ProductWrapper } from "../styles";

const ShopItem = ({shop}) => {

  return (
    <ProductWrapper>
      <Link to={`/shops/${shop.slug}`}>
        <img alt={shop.name} src={shop.image}/>
      </Link>
      <p>{shop.name}</p>
    </ProductWrapper>
  );
};

export default ShopItem;
