import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/theme";
import classes from "./Discount.module.css";

export function Discount() {
  const { theme } = useContext(ThemeContext);
  const mayorDiscount = useRef("50%");
  return (
    <div
      className={
        theme === "darkMode" ? classes.discountDarkMode : classes.discount
      }
    >
      <h3>{mayorDiscount.current}</h3>
    </div>
  );
}
