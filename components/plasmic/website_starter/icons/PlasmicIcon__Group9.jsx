// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group9Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.375 15.55l2.925-1.775 2.925 1.775-.775-3.325 2.6-2.25-3.425-.275L11.3 6.55 9.975 9.7l-3.425.275 2.6 2.25-.775 3.325zM11.3 22.6l-3.35-3.3H3.3v-4.65L0 11.3l3.3-3.35V3.3h4.65L11.3 0l3.35 3.3h4.65v4.65l3.3 3.35-3.3 3.35v4.65h-4.65l-3.35 3.3zm0-2.8l2.5-2.5h3.5v-3.5l2.5-2.5-2.5-2.5V5.3h-3.5l-2.5-2.5-2.5 2.5H5.3v3.5l-2.5 2.5 2.5 2.5v3.5h3.5l2.5 2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */
