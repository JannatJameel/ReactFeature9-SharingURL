import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {Helmet} from "react-helmet";

// Components
import Buttons from "./Buttons";
// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const products = useSelector(state => state.products);
  const {productSlug} = useParams();
  const product = products.find((product) => product.slug === productSlug);

  if(!product) return <Redirect to = "/products"/>;
  return (
    <DetailWrapper>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <p onClick={props.selectProduct}>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <Buttons productId={product.id} productSlug={product.slug}/>
    </DetailWrapper>
  );
};

export default ProductDetail;
