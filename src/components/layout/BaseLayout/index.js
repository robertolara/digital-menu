import React from "react";

import Header from "../Header";

function BaseLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default BaseLayout;