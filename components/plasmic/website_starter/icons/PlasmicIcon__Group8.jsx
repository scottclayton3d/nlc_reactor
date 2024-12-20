// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13 9a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 0110 6c0-.833.292-1.542.875-2.125A2.893 2.893 0 0113 3c.833 0 1.542.292 2.125.875S16 5.167 16 6s-.292 1.542-.875 2.125A2.893 2.893 0 0113 9zm-7 3c-.55 0-1.02-.196-1.412-.588A1.926 1.926 0 014 10V2c0-.55.196-1.02.588-1.413A1.926 1.926 0 016 0h14c.55 0 1.02.196 1.413.588C21.803.979 22 1.45 22 2v8c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0120 12H6zm2-2h10c0-.55.196-1.02.587-1.412A1.926 1.926 0 0120 8V4c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0118 2H8c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 016 4v4c.55 0 1.02.196 1.412.588C7.804 8.979 8 9.45 8 10zm11 6H2c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 010 14V3h2v11h17v2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
