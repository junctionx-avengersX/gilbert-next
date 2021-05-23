/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";

const rootStyle = css`
  width: 100%;
  height: 100%;
`;

const NaverMap = () => {
  useEffect(() => {
    // @ts-ignore
    if (window && window.naver) {
      function initMap() {
        const mapDiv = document.getElementById("map");
        // @ts-ignore
        var map = new window.naver.maps.Map(mapDiv);
      }
      initMap();
    }
    // @ts-ignore
  }, [window.naver.maps.Map]);

  return <div id="map" css={rootStyle}></div>;
};

export default NaverMap;

// <RenderAfterNavermapsLoaded
//   // Naver Cloud Platform 유저의 경우 props.clientId 대신 props.ncpClientId를 사용합니다.
//   ncpClientId={NAVERMAP_CLIENT_ID}
//   error={<p>Maps Load Error</p>}
//   loading={<p>Maps Loading...</p>}
// >
//   <ReactNaverMap
//     mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
//     style={{
//       width: "100%",
//       height: "400%",
//     }}
//     defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
//     defaultZoom={10}
//   />
// </RenderAfterNavermapsLoaded>
