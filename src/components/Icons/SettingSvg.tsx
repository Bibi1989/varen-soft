import * as React from "react";
import { SVGProps } from "react";

const SettingSvg = (props: SVGProps<SVGSVGElement> & { active?: boolean }) => (
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
      d="m18.807 6.624-.623-1.08a1.913 1.913 0 0 0-2.609-.705v0a1.904 1.904 0 0 1-2.608-.678 1.832 1.832 0 0 1-.257-.915v0a1.913 1.913 0 0 0-1.913-1.968H9.543A1.904 1.904 0 0 0 7.64 3.191v0a1.913 1.913 0 0 1-1.913 1.886 1.83 1.83 0 0 1-.916-.257v0a1.913 1.913 0 0 0-2.608.705l-.669 1.099a1.913 1.913 0 0 0 .696 2.608v0a1.913 1.913 0 0 1 0 3.314v0a1.904 1.904 0 0 0-.696 2.6v0l.632 1.089a1.913 1.913 0 0 0 2.609.741v0a1.895 1.895 0 0 1 2.6.696c.164.277.252.593.255.915v0c0 1.056.857 1.913 1.913 1.913h1.255c1.053 0 1.908-.85 1.912-1.904v0a1.904 1.904 0 0 1 1.914-1.913c.321.009.636.097.915.256v0a1.913 1.913 0 0 0 2.609-.695v0l.659-1.099a1.904 1.904 0 0 0-.696-2.608v0a1.904 1.904 0 0 1-.696-2.609c.166-.29.406-.53.696-.696v0a1.913 1.913 0 0 0 .696-2.6v0-.008Z"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      opacity={props.active ? 1 : 0.8}
      cx={10.175}
      cy={10.889}
      r={2.636}
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SettingSvg;
