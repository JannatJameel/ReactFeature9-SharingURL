import { useSelector } from "react-redux";
import { useState } from "react";
import { Helmet } from "react-helmet";
// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

const ProductList = (props) => {
  const products = useSelector(state => state.products);

  const [query, setQuery] = useState("");

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
    </div>
  );
};

export default ProductList;
