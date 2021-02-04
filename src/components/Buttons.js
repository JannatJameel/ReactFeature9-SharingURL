import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/actions";
import { Link } from "react-router-dom";
// Styling
import { Button } from "../styles";

const Buttons = ({productId, productSlug}) => {
  const dispatch = useDispatch();

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div style={{marginRight: "30px"}}>
        <Button onClick={() => dispatch(deleteProduct(productId))}>
          Delete
        </Button>
      </div>
      <Link to={`/products/${productSlug}/edit`}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
};

export default Buttons;
