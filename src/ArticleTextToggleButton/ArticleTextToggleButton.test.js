import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly after button is clicked", () => {
    const onClick = function(){console.log("onClick")};
    const {container} = render(<ArticleTextToggleButton buttonText= "Show more" onClick={onClick}/>);
    expect(container).toMatchSnapshot();
  });
});
