import React from "react";
import PropTypes from "prop-types";
import styles from "./HTMLText.module.css";

const HTMLText = (props) => {
  return <div className={styles.container} dangerouslySetInnerHTML={{ __html: props.text }} />;
};

HTMLText.propTypes = {
    text: PropTypes.string.isRequired
}
export default HTMLText;
