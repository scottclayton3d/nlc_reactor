// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16.667 10a6.67 6.67 0 01-5 6.457v1.71a8.336 8.336 0 000-16.334v1.71c2.875.74 5 3.35 5 6.457zM15 10a5.002 5.002 0 00-3.333-4.716v1.829a3.332 3.332 0 010 5.774v1.829A5.002 5.002 0 0015 10zM5.488 6.67H3.333c-.92 0-1.666.746-1.666 1.667v3.333c0 .92.746 1.667 1.666 1.667h2.155l3.09 3.922A.833.833 0 0010 16.67V3.337a.833.833 0 00-1.423-.59L5.488 6.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component3Icon;
/* prettier-ignore-end */
