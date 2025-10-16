import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      404 Not Found
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFound;
