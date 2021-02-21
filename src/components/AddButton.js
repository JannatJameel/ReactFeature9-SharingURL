import { ThemeButton, FormButtons } from "../styles";
import { VscAdd } from 'react-icons/vsc';
import { Link } from "react-router-dom";

const AddButton = ({addForm, shopId}) => {
    let route = "";
    (addForm === "shop")? route = "/shops/new" : route = `/shops/${shopId}/products/new`;
    return(
        <FormButtons>
            <Link to={route}>
                <ThemeButton style={{margin: "10px"}}> <VscAdd/> </ThemeButton>
            </Link>
        </FormButtons>
    );
};

export default AddButton;