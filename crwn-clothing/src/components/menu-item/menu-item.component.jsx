import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// title, imageUrl, size are passed as deconstructured props from directory.component.jsx
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  // We have the background image in a separate div because when we zoom/increase the image, we dont want to increase the content div
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
