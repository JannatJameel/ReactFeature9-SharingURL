import { FormStyled, ThemeButton } from "../styles";

import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { createProduct, updateProduct } from "../store/actions/productActions";


const ProductForm = () => {
    const products = useSelector(state => state.product.products);
    // const shops = useSelector(state => state.shop.shops);

    const {productSlug, shopId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const foundProduct = products.find((product) => product.slug === productSlug);
    // const foundShop = shops.find((shop) => shop.id === shopId);


    const [product, setProduct] = useState(
        (foundProduct)?? {
            shopId: shopId,
            name: "",
            price: "",
            description: "",
            image: "",
        }
    );

   let form = "";
    productSlug? form ="Edit" : form = "Create";
    
    const handleChange = (event) => setProduct({...product, [event.target.name]: event.target.value});
    const handleImage = (event) => setProduct({...product, image: event.target.files[0]});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        (form === "Edit")? dispatch(updateProduct(product)) : dispatch(createProduct(product));
        history.push(`/products`);
    };

    return (
        <FormStyled>
            <h2>{form} Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Product Name:</label>
                    <input type="text" value = {product.name} name="name" className="form-control" 
                    onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Price:</label>
                    <input type="number" value = {product.price} name="price" className="form-control"
                    onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input type="text" value = {product.description} name="description" className="form-control" 
                    onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image:</label>
                    <input type="file" name="image" className="form-control" 
                    onChange={handleImage}/>
                </div>
                <ThemeButton type="submit" style={{marginTop: "2em", marginLeft: "35em"}}>{form}</ThemeButton>
            </form>
        </FormStyled>
    );
};

export default ProductForm;