// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29 12a1 1 0 01-.496.864l-12 7A1 1 0 0115 19V5a1 1 0 011.504-.864l12 7A1 1 0 0129 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component2Icon;
/* prettier-ignore-end */
