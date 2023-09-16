import React from "react";
import styled from "styled-components";

export const Spinner = () => (
  <div style={loaderStyle}>
    <Loader />
  </div>
);

const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const Loader = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid var(--theme-color);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
