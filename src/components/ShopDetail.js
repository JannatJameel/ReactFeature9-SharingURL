import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {Helmet} from "react-helmet";

// Components
import ProductList from "./ProductList";
// Styling
import { DetailWrapper } from "../styles";

const ShopDetail = () => {
  const shops = useSelector(state => {
    console.log(state);
    return state.shop.shops
  });
  const allProducts = useSelector((state) => state.product.products);
  const {shopSlug} = useParams();
  const shop = shops.find((shop) => shop.slug === shopSlug);
  console.log("shop", shop);

  const products = shop.products.map((product) =>
  allProducts.find((_product) => _product.id === product.id)
  );
  console.log("Details", products);

  if(!shop) return <Redirect to = "/shops"/>;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{shop.name}</title>
      </Helmet>
      <h1>{shop.name}</h1>
      <img src={shop.image} alt={shop.name} />
      <br/>
      <h3>Products</h3>
      <ProductList products={products} shopId={shop.id}/>
    </DetailWrapper>
  );
};

export default ShopDetail;
