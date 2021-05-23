// @ts-nocheck
/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import gilbertMarkerIconUrl from "icons/gilbert/gilbert-marker.webp";
import userMarkerIconUrl from "icons/user/user-marker.webp";
import useInterval from "react-useinterval";

const rootStyle = css`
  width: 100%;
  height: 100%;
`;

const NaverMap = () => {
  var position;
  var marker;

  useEffect(() => {
    if (window?.naver) {
      function initMap() {
        const HOME_PATH = window.HOME_PATH || ".";
        const mapDiv = document.getElementById("map");
        // TODO: get lat, lng
        position = new naver.maps.LatLng(37.3849483, 127.1229117);

        var map = new naver.maps.Map(mapDiv, {
          center: position,
          zoom: 19,
        });

        const gilbertCoord = [90, 15];
        const markerOptions = {
          position: position.destinationPoint(90, 15),
          map,
          icon: {
            url: gilbertMarkerIconUrl,
            size: new naver.maps.Size(70, 72),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26),
          },
        };
        const markerOptions2 = {
          position: position.destinationPoint(100, 10),
          map,
          icon: {
            url: userMarkerIconUrl,
            size: new naver.maps.Size(50, 52),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(25, 26),
          },
        };
        var marker = new naver.maps.Marker(markerOptions);
        var marker2 = new naver.maps.Marker(markerOptions2);

        naver.maps.Event.addListener(map, "click", function (e) {
          const gilbertPosition = position.destinationPoint(
            gilbertCoord[0] + 1,
            gilbertCoord[1]
          );
          marker.setPosition(gilbertPosition);
        });
      }
      initMap();
    }
  }, [!!window?.naver]);

  return <div id="map" css={rootStyle}></div>;
};

export default NaverMap;
