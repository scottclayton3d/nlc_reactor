// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.35 18l-3.525-3.55 1.4-1.4 2.125 2.125 4.25-4.25L21 12.35 15.35 18zM0 20V2C0 1.45.196.98.588.587A1.926 1.926 0 012 0h16c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2v7h-2V2H2v13.125L3.15 14H10v2H4l-4 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
