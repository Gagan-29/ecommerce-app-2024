import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All rights reserved &copy; karnam_gagan</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact me</Link>|
        <Link to="/policy">Privacy and policy</Link>
      </p>
    </div>
  );
};

export default footer;
