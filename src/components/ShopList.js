import { useSelector } from "react-redux";
import { useState } from "react";
import { Helmet } from "react-helmet";
// Styling
import { ListWrapper } from "../styles";
// Components
import ShopItem from "./ShopItem";
import SearchBar from "./SearchBar";
import AddButton from "./AddButton";
import Loading from "./Loading";


const ShopList = () => {
  const shops = useSelector(state => state.shop.shops);
  const loading = useSelector(state => state.shop.loading);
  console.log("shops", shops);
  const [query, setQuery] = useState("");

  if(loading) return <Loading />;

  const shopList = shops
    .filter((shop) =>
      shop.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((shop) => (
      <ShopItem shop={shop} key={shop.id}/>
    ));

  return (
    <div>
      <Helmet>
        <title>Shops</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{shopList}</ListWrapper>
      <AddButton addForm={"shop"}/>
    </div>
  );
};

export default ShopList;