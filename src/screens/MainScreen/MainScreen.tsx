/** @jsxImportSource @emotion/react */
import React from "react";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/react";

const textStyle = css`
  font-size: 14px;
  color: red;
`;

const MainScreen = () => {
  return <Typography css={textStyle}>This is main screen :)</Typography>;
};

export default MainScreen;
