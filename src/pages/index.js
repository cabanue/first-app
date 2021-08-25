//imports react from react and link from gatsby
import React from "react";
import { Link } from "gatsby";

const HomePage = () => {
  function onButtonClick() {
    console.log("Hi");
  }

  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>Hello</p>
      <button onClick={onButtonClick}>Click me!</button>
      <Link to="/about">Link to about page</Link>
    </React.Fragment>
  );
};

export default HomePage;
