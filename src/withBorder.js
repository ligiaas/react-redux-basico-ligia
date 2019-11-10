import React from "react";

const withBorder = WrappedComponent => props => {
  const computedProps = {
    ...props,
    style: {
      border: "10px solid red",
      borderRadius: "10px",
      background: "pink"
    },
    onClick: (...rest) => {
      console.log("Agora envia um log pro server");
      props.onClick(rest);
    }
  };
  return <WrappedComponent {...computedProps} />;
};

export default withBorder;
