// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component26Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.723 9l.444-2.896H9.39V4.225c0-.792.388-1.564 1.633-1.564h1.263V.196S11.138 0 10.043 0C7.754 0 6.259 1.387 6.259 3.897v2.207H3.715V9H6.26v7h3.13V9h2.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component26Icon;
/* prettier-ignore-end */
