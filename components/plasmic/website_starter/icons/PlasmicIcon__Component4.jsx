// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component4Icon(props) {
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
          "M13.333 4.167h1.322L11.91 6.91a.833.833 0 101.178 1.178l2.744-2.744v1.322a.833.833 0 001.667 0V3.333a.833.833 0 00-.833-.833h-3.334a.833.833 0 000 1.667zm-9.166 2.5V5.345L6.91 8.09a.833.833 0 001.178-1.178L5.345 4.167h1.322a.833.833 0 000-1.667H3.333a.833.833 0 00-.833.833v3.334a.833.833 0 001.667 0zm2.5 9.166H5.345L8.09 13.09a.833.833 0 10-1.178-1.178l-2.744 2.744v-1.322a.833.833 0 00-1.667 0v3.334a.833.833 0 00.833.833h3.334a.833.833 0 100-1.667zm9.166-1.178v-1.322a.833.833 0 011.667 0v3.334a.833.833 0 01-.833.833h-3.334a.833.833 0 010-1.667h1.322L11.91 13.09a.833.833 0 111.178-1.178l2.744 2.744z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component4Icon;
/* prettier-ignore-end */
