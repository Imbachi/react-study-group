import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { Discount } from "../discount/Discount";
import classes from "./Card.module.css";

function Card({
  index,
  image,
  title,
  price,
  description,
  onClick,
  bgImage,
  bgContent
}) {
  return (
    <div className={classes.card} style={{ backgroundColor: bgContent }}>
      {price > 3000 && <Discount />}
      <img src={image} alt={title} style={{ backgroundColor: bgImage }} />
      <div className={classes["card-content"]}>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>{description}</p>

        <button
          id="button"
          className={classes["card-button"]}
          onClick={onClick}
          style={{ backgroundColor: bgImage }}
        >
          Next item ({index + 1})
        </button>
      </div>
    </div>
  );
}

export default Card;
