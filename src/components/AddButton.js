import { ThemeButton, FormButtons } from "../styles";
import { VscAdd } from 'react-icons/vsc';
import { Link } from "react-router-dom";

const AddButton = () => {
    return(
        <FormButtons>
            <Link to="/products/new">
                <ThemeButton style={{margin: "10px"}}> <VscAdd/> </ThemeButton>
            </Link>
        </FormButtons>
    );
};

export default AddButton;