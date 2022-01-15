import * as React from "react";
import { SVGProps } from "react";

const ScheduleSvg = (props: SVGProps<SVGSVGElement> & { active?: boolean }) => (
  <svg
    width={props.width ? props.width : "25px"}
    height={props.width ? props.width : "25px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={props.active ? 1 : 0.8}
      clipRule="evenodd"
      d="m7.27 13.952 1.593-5.09 5.089-1.592-1.593 5.09-5.089 1.592Z"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      opacity={props.active ? 1 : 0.8}
      cx={10.611}
      cy={10.611}
      r={9.611}
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ScheduleSvg;
