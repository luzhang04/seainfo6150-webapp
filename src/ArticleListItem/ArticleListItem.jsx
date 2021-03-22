import React, { useState  } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [showMore, setShowMore] = useState(false);

  function Click() {
    setShowMore(!showMore);
  }

  function Show() {
    if(showMore) {
      return (
        <>
          <time className={styles.time} dateTime={props.article.timeStamp}>
            {props.article.displayDate}
          </time>
          <p>{props.article.shortText}</p>
        </>
      )
    }else {
      return "";
    }
  }

  return (
    <li className={styles.box}>
      <article>
        <h2> <Link className={styles.title} to={"/articlelist/" + props.article.slug}>{props.article.title}</Link>
        </h2>
        <Show />
        <ArticleTextToggleButton buttonText={!showMore ? "Show more" : "Show less"} click={Click}/>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
