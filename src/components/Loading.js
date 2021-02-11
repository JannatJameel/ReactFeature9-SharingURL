// Styling
import { ListWrapper } from "../styles";
import PropagateLoader from "react-spinners/PropagateLoader";

const Loading = () => {
    return (
        <ListWrapper style={{marginTop: "10em"}}>
            <PropagateLoader color="black" size={10}/>
        </ListWrapper>
    );
};

export default Loading;