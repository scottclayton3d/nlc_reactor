// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Component32Icon(props) {
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
          "M8 .25A7.753 7.753 0 00.25 8 7.753 7.753 0 008 15.75 7.753 7.753 0 0015.75 8 7.753 7.753 0 008 .25zm3.147 11.403c-.131 0-.213-.04-.335-.112-1.95-1.175-4.218-1.225-6.459-.766-.122.031-.281.081-.372.081a.487.487 0 01-.494-.493c0-.322.191-.476.425-.525 2.56-.566 5.176-.516 7.407.818.19.122.303.231.303.516a.472.472 0 01-.475.481zm.84-2.05c-.162 0-.271-.072-.384-.131C9.65 8.316 6.738 7.85 4.147 8.553c-.15.04-.231.081-.372.081a.607.607 0 01-.606-.606c0-.334.162-.556.484-.647a10.511 10.511 0 013.056-.425c2.029 0 3.988.503 5.532 1.422.253.15.353.344.353.616a.606.606 0 01-.606.61zm.97-2.381a.72.72 0 01-.404-.122c-2.225-1.328-6.203-1.647-8.778-.928-.112.031-.253.081-.403.081a.721.721 0 01-.728-.737c0-.425.262-.666.543-.747 1.1-.322 2.332-.475 3.672-.475 2.282 0 4.672.475 6.42 1.494.243.14.402.334.402.706a.724.724 0 01-.725.728z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Component32Icon;
/* prettier-ignore-end */
