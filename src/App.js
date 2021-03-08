import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList";

function App() {
  let { url } = useRouteMatch();
  //console.log("url", url);

  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route exact path="/articlelist"><ArticleList /></Route>
        <Route
          path="/articlelist/:slug"
          render={({match}) =>{
          //getting the parameters from the url and passing
          // down to the component as props
        //   console.log("this slug", match.params.slug);
        return (<DynamicArticle article={fetchedData[match.params.slug]}
                url={`${url}articlelist/`} />);
        }}
        />

      </Switch>
    </div>
  );
}

export default App;
