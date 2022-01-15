import * as React from "react";
import { SVGProps } from "react";

const CampaignSvg = (props: SVGProps<SVGSVGElement> & { active?: boolean }) => (
  <svg
    width={props.width ? props.width : "25px"}
    height={props.width ? props.width : "25px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.371 9.202v6.86M11.038 5.92v10.142M15.629 12.827v3.235"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M15.686 1H6.314C3.048 1 1 3.312 1 6.585v8.83C1 18.688 3.038 21 6.314 21h9.372C18.962 21 21 18.688 21 15.415v-8.83C21 3.312 18.962 1 15.686 1Z"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CampaignSvg;
