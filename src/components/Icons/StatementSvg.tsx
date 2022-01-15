import * as React from "react";
import { SVGProps } from "react";

const StatementSvg = (
  props: SVGProps<SVGSVGElement> & { active?: boolean }
) => (
  <svg
    width={props.width ? props.width : "25px"}
    height={props.width ? props.width : "25px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={props.active ? 1 : 0.8}
      d="M12.716 14.223h-7.22M12.716 10.037h-7.22M8.251 5.86H5.496"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={props.active ? 1 : 0.8}
      clipRule="evenodd"
      d="m12.909.75-7.69.004C2.46.77.752 2.587.752 5.357v9.196c0 2.784 1.722 4.607 4.506 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V5.357c0-2.784-1.723-4.607-4.507-4.607Z"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StatementSvg;
