// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component30Icon(props) {
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
          "M12.162 1.5h2.207L9.55 7.006l5.669 7.494H10.78L7.303 9.956 3.328 14.5h-2.21l5.154-5.89L.838 1.5h4.55l3.14 4.153L12.162 1.5zm-.775 11.681h1.222L4.722 2.75H3.409l7.978 10.431z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component30Icon;
/* prettier-ignore-end */
