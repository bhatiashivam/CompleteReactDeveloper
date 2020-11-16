import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

// title and item come from shop.data.js which is mapped in shop.component.jsx
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {/* Display at max 4 items on the page */}
      {/* otherItemProps are the attribute of 'items' from the shop.data.js */}
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
