import { FormStyled, ThemeButton } from "../styles";

import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { createShop } from "../store/actions/shopActions";


const ShopForm = () => {
    const shops = useSelector(state => state.shop.shops);
    const {shopSlug} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const foundShop = shops.find((shop) => shop.slug === shopSlug);

    const [shop, setShop] = useState(
        (foundShop)?? {
            name: "",
            image: "",
            products: ""
        }
    );

   let form = "";
    shopSlug? form ="Edit" : form = "Create";
    
    const handleChange = (event) => setShop({...shop, [event.target.name]: event.target.value});
    const handleImage = (event) => setShop({...shop, image: event.target.files[0]});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createShop(shop));
        history.push("/shops");
    };

    return (
        <FormStyled>
            <h2>Add Shop</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Shop Name:</label>
                    <input type="text" value = {shop.name} name="name" className="form-control" 
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

export default ShopForm;