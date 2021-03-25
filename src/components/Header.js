import Proptype from "prop-types";
import Button from "./Button";

const Header = ({ title, showAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        className="btn"
        text={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onClick={showAdd}
      />
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
