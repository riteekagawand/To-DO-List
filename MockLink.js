// MockLink.js
import React from "react";

const MockLink = ({ href, children, ...props }) => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default MockLink;
