import * as React from "react";
import { SVGProps } from "react";

const LineSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="78px"
    height="24px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 25s5.204-8.794 12-8.794 6.054 5.315 12.994 5.315C32.934 21.521 35.941 1 45.824 1c9.882 0 12.004 18.955 20.294 18.955C72.575 19.955 74.227 13 79 13"
      stroke="#6C5DD3"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default LineSvg;
