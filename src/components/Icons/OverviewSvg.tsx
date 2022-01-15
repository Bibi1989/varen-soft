import * as React from "react";
import { SVGProps } from "react";

const OverviewSvg = (props: SVGProps<SVGSVGElement> & { active?: boolean }) => (
  <svg
    width={props.width ? props.width : "25px"}
    height={props.width ? props.width : "25px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={props.active ? 1 : 0.8}
      d="m5.245 13.781 2.993-3.89 3.414 2.682 2.93-3.78"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      opacity={props.active ? 1 : 0.8}
      cx={17.995}
      cy={3.2}
      r={1.922}
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={props.active ? 1 : 0.8}
      d="M12.925 2.12H5.657C2.645 2.12.778 4.253.778 7.264v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OverviewSvg;
