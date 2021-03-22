import React from "react";
import PropTypes from "prop-types";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
  return (
    <button className={styles.button} onClick={props.click}>{props.buttonText}</button>
  );
};

export default ArticleTextToggleButton;
