import React from "react";
import "./search-box.styles.css";

// Functional Component - Takes a prop and renders some html.
// Doesn't deal with state
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
