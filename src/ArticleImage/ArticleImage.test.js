import React from "react";
import ArticleImage from "./ArticleImage";


describe("ArticleImage tests", () => {
  it("renders correctly", () => {
    const article1 = {

            title : "title",
            url: "www.google.com"

    }
    const { container } = render(<ArticleImage title={article1.title} url={article1.url}/>);
    expect(container).toMatchSnapshot();
  });
});
