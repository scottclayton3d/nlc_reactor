// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group5Icon(props) {
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
        d={
          "M7 12h10l-3.45-4.5-2.3 3-1.55-2L7 12zm-1 4c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 014 14V2c0-.55.196-1.02.588-1.413A1.926 1.926 0 016 0h12c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2v12c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0118 16H6zm0-2h12V2H6v12zm-4 6c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 010 18V4h2v14h14v2H2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
