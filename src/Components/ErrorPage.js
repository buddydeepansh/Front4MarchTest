import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <p>
        Uh Ohh! We Could not find your Entered Place. Kindly Re-Enter different
        Place.
      </p>
      <Link to="/">GO TO: Home Page</Link>
    </div>
  );
};

export default ErrorPage;
