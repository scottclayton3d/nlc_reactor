// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 101 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.294 21.892V12.78c0-2.22-.77-3.254-2.573-3.254-1.982 0-2.811 1.094-2.811 3.313v9.052H0V5.473h4.585v1.745h.06C5.679 5.533 7.129 4.912 9.11 4.912c2.958 0 6.095 1.655 6.095 6.508v10.472h-4.912zm16.478.502c-4.999 0-8.844-3.697-8.844-8.727s3.934-8.728 8.844-8.728c4.91 0 8.844 3.698 8.844 8.669 0 4.97-3.904 8.784-8.844 8.784v.002zm3.934-8.727c0-2.19-1.655-4.142-3.964-4.142-2.16 0-3.905 1.893-3.905 4.142 0 2.249 1.716 4.142 3.935 4.142 2.22 0 3.934-1.952 3.934-4.142zm7.394 8.225V0h4.91v21.89H38.1v.002zm8.461-18.163V0h4.91v3.727h-4.91v.002zm0 18.163V5.473h4.91v16.419h-4.91zm28.754 0v-8.844c0-2.574-.828-3.521-2.514-3.521-1.863 0-2.722 1.123-2.722 3.283v9.082h-4.91V12.84c0-2.13-.769-3.313-2.454-3.313-1.923 0-2.782 1.242-2.782 3.52v8.845h-4.91V5.473h4.586v1.745h.06c.858-1.539 2.425-2.306 4.525-2.306 2.101 0 3.697 1.064 4.732 2.927 1.183-1.863 2.957-2.927 5.206-2.927 3.668 0 6.095 2.249 6.095 6.832V21.89h-4.91l-.002.002zm8.372-18.163V0h4.91v3.727h-4.91v.002zm0 18.163V5.473h4.91v16.419h-4.91zm9.584 0V9.2h-2.425V5.473h2.425V0h4.91v5.473h2.366V9.2h-2.366v12.692h-4.91z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
