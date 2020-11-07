import React from "react";

import "./menu-item.styles.scss";

// title, imageUrl, size are passed as deconstructured props from directory.component.jsx
const MenuItem = ({ title, imageUrl, size }) => (
  // We have the background image in a separate div because when we zoom/increase the image, we dont want to increase the content div
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
