import React from 'react';
import { Button } from 'antd';

function CustomButton(props) {
  return (
    <Button
      style={{
        fontSize:"1.3rem",
        background: "#6EBB2D",
        borderRadius: "30px",
        color: "#ffffff",
        width: "230px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden",
        borderColor: "#6EBB2D", 
      }}
      {...props}
    >
      {props.name}
    </Button>
  );
}

export default CustomButton;
