import * as React from "react";
import { SVGProps } from "react";

const PayoutSvg = (props: SVGProps<SVGSVGElement> & { active?: boolean }) => (
  <svg
    width={props.width ? props.width : "25px"}
    height={props.width ? props.width : "25px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={props.active ? 1 : 0.8}
      d="M20.639 12.396H16.59a2.693 2.693 0 0 1-2.693-2.692 2.693 2.693 0 0 1 2.693-2.69h4.048M17.049 9.643h-.312"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={props.active ? 1 : 0.8}
      clipRule="evenodd"
      d="M6.748 1h8.643a5.248 5.248 0 0 1 5.248 5.248v7.177a5.248 5.248 0 0 1-5.248 5.247H6.748A5.248 5.248 0 0 1 1.5 13.425V6.248A5.248 5.248 0 0 1 6.748 1Z"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      opacity={props.active ? 1 : 0.8}
      d="M6.036 5.538h5.399"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PayoutSvg;
