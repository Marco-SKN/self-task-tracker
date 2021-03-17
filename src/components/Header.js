import Proptype from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="btn" text="Add" />
    </header>
  );
};

Header.prototype = {
  title: Proptype.string.isRequired,
};

Header.defaultProps = {
  title: "SKN Task Tracker",
};

export default Header;
