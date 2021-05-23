/** @jsxImportSource @emotion/react */
import React from "react";
import { Typography } from "@material-ui/core";
import { css } from "@emotion/react";

import dynamic from "next/dynamic";
const NaverMap = dynamic(() => import("./NaverMap"), { ssr: false });

const rootStyle = css`
  height: 100vh;
`;

const textStyle = css`
  font-size: 14px;
  color: red;
`;

const MainScreen = () => {
  return (
    <div css={rootStyle}>
      <NaverMap />
    </div>
  );
};

export default MainScreen;
