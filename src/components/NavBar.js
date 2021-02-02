// Styling
import { ThemeButton, Logo, NavProduct } from "../styles";
import lightlogo from "./light-logo.png";
import darklogo from "./dark-logo.png";

const NavBar = (props) => {
  let logo = lightlogo;
  (props.currentTheme === "light")? logo = lightlogo : logo = darklogo;

  return (
    <nav className="navbar navbar-expand">
      <Logo exact to="/">
        <img alt={"logo"} src={logo}/>
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavProduct to="/products">Products</NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
