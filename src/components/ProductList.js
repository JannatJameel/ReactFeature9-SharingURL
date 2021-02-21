import { useSelector } from "react-redux";
import { useState } from "react";
import { Helmet } from "react-helmet";
// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import AddButton from "./AddButton";
import Loading from "./Loading";


const ProductList = ({products, shopId}) => {
  const loading = useSelector(state => state.product.loading);

  const [query, setQuery] = useState("");

  if(loading) return <Loading />;

  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem product={product} key={product.id}/>
    ));

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
      <AddButton shopId={shopId}/>
    </div>
  );
};

export default ProductList;