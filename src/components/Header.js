import Proptype from "prop-types";
import Button from "./Button";

const Header = ({ title, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button className="btn" text="Add" onClick={showAdd} />
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
