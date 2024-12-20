// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.719 9A8.719 8.719 0 11.28 9a8.719 8.719 0 0117.438 0zm-9.727 4.617l6.468-6.47a.563.563 0 000-.795l-.795-.795a.562.562 0 00-.796 0l-5.275 5.275L5.13 8.37a.563.563 0 00-.796 0l-.795.796a.563.563 0 000 .795l3.656 3.656c.22.22.576.22.796 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component1Icon;
/* prettier-ignore-end */
