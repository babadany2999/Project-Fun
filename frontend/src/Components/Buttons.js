import { Link } from "react-router-dom";
import "../Styles/Buttons.css";

const Buttons = ({
  link,
  name,
  rounded,
  disabled,
  selected,
  onClick,
  bg_image,
}) => {
  return (
    <Link
      style={{ backgroundImage: bg_image ? `url(${bg_image})` : "" }}
      onClick={onClick}
      to={link ? "/" + link : "#"}
      className={`Buttons ${rounded ? "RoundedButtons" : ""} ${
        disabled ? "ButtonsDisabled" : ""
      } ${selected ? "ButtonsSelected" : ""} ${
        bg_image ? "ButtonsWithBg" : ""
      }`}
    >
      {rounded ? (
        ""
      ) : (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </>
      )}
      <p>{name}</p>
    </Link>
  );
};

export default Buttons;
