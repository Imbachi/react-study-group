import classes from "./NextButton.module.css";

export function NextButton({ styles, onClick }) {
  return (
    <img
      style={styles}
      onClick={onClick}
      src="https://img.icons8.com/?size=512&id=5NBZCc6ZPxah&format=png"
      className={classes.image}
      alt={"img"}
    />
  );
}
