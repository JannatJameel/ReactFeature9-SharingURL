import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions";
import { Link } from "react-router-dom";
// Styling
import { DeleteButtonStyled } from "../styles";

const Buttons = ({productId, productSlug}) => {
  const dispatch = useDispatch();

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{marginRight: "30px"}}>
        <DeleteButtonStyled onClick={() => dispatch(deleteProduct(productId))}>
          Delete
        </DeleteButtonStyled>
      </div>
      <Link to={`products/${productSlug}/edit`}>
        <DeleteButtonStyled>Edit</DeleteButtonStyled>
      </Link>
    </div>
  );
};

export default Buttons;
