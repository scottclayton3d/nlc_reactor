// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component29Icon(props) {
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
          "M15 6.56a6.565 6.565 0 01-3.837-1.227v5.585a5.079 5.079 0 11-4.382-5.033v2.809a2.332 2.332 0 101.632 2.224V0h2.75a3.75 3.75 0 00.059.693A3.817 3.817 0 0012.906 3.2c.621.41 1.35.63 2.094.63v2.73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component29Icon;
/* prettier-ignore-end */
