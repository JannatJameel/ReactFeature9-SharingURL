import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
// Styling
import { ThemeButton, UserButton, Logo, NavProduct } from "../styles";
import lightlogo from "./light-logo.png";
import darklogo from "./dark-logo.png";

const NavBar = (props) => {
  let logo = lightlogo;
  (props.currentTheme === "light")? logo = lightlogo : logo = darklogo;

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user.user);

  const handleSignout = () => {
    dispatch(signout());
    history.push("/");
  };


  return (
    <nav className="navbar navbar-expand">
      <Logo exact to="/">
        <img alt={"logo"} src={logo}/>
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavProduct to="/shops">Shops</NavProduct>
        {user && <NavProduct to="/products">Products</NavProduct>}
        {!user && 
          <>
          <Link to="/signin">
            <UserButton>Sign up</UserButton>
          </Link>
          <Link to="/signup">
            <UserButton>Sign in</UserButton>
          </Link>
          </>
        }
        {user && <UserButton onClick={handleSignout}>Sign out</UserButton>}
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
