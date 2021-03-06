import * as React from "react";
import { SVGProps } from "react";

const BarChartSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="150px"
    height="70px"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={33} width={21} height={33} rx={4} fill="#A0D7E7" />
    <rect x={25} width={21} height={66} rx={4} fill="#0049C6" />
    <rect x={50} y={21} width={21} height={45} rx={4} fill="#A0D7E7" />
    <rect x={75} y={9} width={21} height={57} rx={4} fill="#A0D7E7" />
    <rect x={100} y={30} width={21} height={36} rx={4} fill="#A0D7E7" />
  </svg>
);

export default BarChartSvg;
