import * as React from "react";
import { SVGProps } from "react";

const ProductSvg = (props: SVGProps<SVGSVGElement> & { active?: boolean }) => (
  <svg
    width={props.width ? props.width : "25px"}
    height={props.width ? props.width : "25px"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M14.014 20H5.666C2.6 20 .247 18.892.916 14.435l.777-6.041c.412-2.225 1.831-3.076 3.076-3.076h10.178c1.264 0 2.6.915 3.076 3.076l.778 6.04C19.368 18.39 17.08 20 14.014 20Z"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.151 5.098a4.32 4.32 0 0 0-4.32-4.32v0a4.32 4.32 0 0 0-4.34 4.32h0M12.796 9.602h-.045M6.966 9.602H6.92"
      stroke={props.active ? "white" : "#11142D"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ProductSvg;
