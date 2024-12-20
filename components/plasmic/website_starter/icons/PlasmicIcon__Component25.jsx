// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component25Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.87 19.23L.23 17.593 7.824 10 .231 2.408 1.869.769 11.1 10l-9.23 9.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component25Icon;
/* prettier-ignore-end */
