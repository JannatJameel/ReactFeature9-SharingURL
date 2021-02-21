import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
// Components
import ProductDetail from "./ProductDetail";
import ShopDetail from "./ShopDetail";
import ProductList from "./ProductList";
import ShopList from "./ShopList";
import Home from "./Home";
import ProductForm from "./ProductForm";
import ShopForm from "./ShopForm";
import Signin from "./Signin";
import Signup from "./Signup";


const Routes = () => {
    const products = useSelector(state => state.product.products);

    return (
        <Switch>
            <Route path={["/shops/:shopId/products/new", "/products/:productSlug/edit"]}>
                <ProductForm />
            </Route>
            <Route path={"/shops/new"}>
                <ShopForm />
            </Route>
            <Route path = "/products/:productSlug">
                <ProductDetail />
            </Route>
            <Route path = "/shops/:shopSlug">
                <ShopDetail />
            </Route>
            <Route path = "/products">
                <ProductList products={products}/>
            </Route>
            <Route path = "/shops">
                <ShopList />
            </Route>
            <Route path = "/signup">
                <Signin/>
            </Route>
            <Route path = "/signin">
                <Signup/>
            </Route>
            <Route exact path= "/">
                <Home />
            </Route>
        </Switch>
    );
};

export default Routes;