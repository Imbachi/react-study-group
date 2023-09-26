import { useContext, useState, useReducer } from "react";
import Card from "./components/card/Card";
import storedProducts from "./mock-data/MockData";
import classes from "./App.module.css";
import { NextButton } from "./components/next-button/NextButton";
import { Options } from "./components/options/Options";
import { ThemeContext } from "./context/theme";

function registerSession() {
  console.log(`This user has entered the app at ${new Date()}`);
}

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const [isSessionRegistered, setIsSessionRegistered] = useState(false);
  const [areOptionsVisible, setAreOptionsVisible] = useState(false);

  const reducer = (products, action) => {
    switch (action.type) {
      case "DELETE_PRODUCT": {
        let newProducts = [
          ...products.slice(0, index),
          ...products.slice(index + 1, products.length)
        ];
        if (index > newProducts.length - 1) setIndex(0);
        return newProducts;
      }
      case "CHANGE_NAME": {
        const updatedProducts = structuredClone(products);
        updatedProducts[index] = {
          ...updatedProducts[index],
          title: action.value
        };
        console.log(updatedProducts);
        return updatedProducts;
      }
      case "NEXT_PRODUCT": {
        index < products.length - 1 ? setIndex(index + 1) : setIndex(0);
        return products;
      }
      case "PREV_PRODUCT": {
        index > 0 ? setIndex(index - 1) : setIndex(products.length - 1);
        return products;
      }
      default: {
        console.log(`I guess I have no more actions`);
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, storedProducts);
  const deleteProduct = () =>
    dispatch({
      type: "DELETE_PRODUCT"
    });
  const changeProductValue = (value) =>
    dispatch({
      type: "CHANGE_NAME",
      value
    });
  const onNextClick = () =>
    dispatch({
      type: "NEXT_PRODUCT"
    });
  const onPrevClick = () =>
    dispatch({
      type: "PREV_PRODUCT"
    });

  let product = state[index];

  if (!isSessionRegistered) {
    registerSession();
    setIsSessionRegistered(true);
  }

  const handleClick = () => {
    onNextClick();
  };

  function toggleOptionsVisibility() {
    setAreOptionsVisible(!areOptionsVisible);
  }

  return (
    <div className={theme === "darkMode" ? classes.darkMode : classes.root}>
      <h1>The best food shop in the whole market</h1>
      <div className={classes.cardPrevNext}>
        <NextButton
          styles={{ transform: "rotate(180deg)" }}
          onClick={onPrevClick}
        />
        <Card {...product} onClick={handleClick} index={index} />
        <NextButton onClick={onNextClick} />
        <button
          className={
            theme === "darkMode" ? classes.btnThemeDark : classes.btnTheme
          }
          onClick={() =>
            setTheme(theme === "darkMode" ? "lightMode" : "darkMode")
          }
        >
          Change Theme
        </button>
      </div>
      <button
        className={classes.optionsButton}
        onClick={toggleOptionsVisibility}
      >
        {areOptionsVisible ? "Hide Options" : "Show Options"}
      </button>
      {areOptionsVisible && (
        <Options
          onDelete={() => deleteProduct(objects, index)}
          onTitleChange={changeProductValue}
          products={objects}
        />
      )}
    </div>
  );
}

export default App;
