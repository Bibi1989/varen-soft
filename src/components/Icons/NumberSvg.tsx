import * as React from "react";
import { SVGProps } from "react";

const NumberSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20px"
    height="100%"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#808191">
      <path d="M4.303 14.13c2.04.013 3.411-1.39 3.407-3.26.004-1.787-1.27-3.08-2.927-3.08-1.016 0-1.912.495-2.364 1.307h-.065C2.36 7.08 3.088 5.87 4.4 5.87c.813 0 1.362.476 1.538 1.224h1.685c-.203-1.551-1.436-2.706-3.223-2.706C2.13 4.388.692 6.281.692 9.54c0 3.468 1.796 4.58 3.61 4.59Zm-.01-1.386c-1.01 0-1.75-.835-1.754-1.823.01-.993.776-1.824 1.777-1.824 1.002 0 1.736.794 1.732 1.81.004 1.034-.753 1.837-1.755 1.837Zm8.472 1.436c2.28.005 3.642-1.796 3.642-4.898 0-3.084-1.371-4.866-3.642-4.866-2.272 0-3.638 1.778-3.643 4.866 0 3.098 1.362 4.898 3.643 4.898Zm0-1.445c-1.178 0-1.916-1.182-1.912-3.453.005-2.253.739-3.44 1.912-3.44 1.177 0 1.91 1.187 1.915 3.44 0 2.271-.734 3.453-1.915 3.453ZM.67 55.246h4.51V57h1.634v-1.754h1.21v-1.408h-1.21v-6.293H4.68L.67 53.884v1.362Zm4.528-1.408H2.424v-.074l2.7-4.28h.074v4.354Zm7.795 3.342c2.28.005 3.643-1.796 3.643-4.898 0-3.084-1.372-4.866-3.643-4.866s-3.638 1.778-3.642 4.866c0 3.098 1.361 4.898 3.642 4.898Zm0-1.445c-1.177 0-1.916-1.182-1.911-3.453.004-2.253.738-3.44 1.911-3.44 1.177 0 1.911 1.187 1.916 3.44 0 2.271-.734 3.453-1.916 3.453ZM.84 101h6.482v-1.431H3.204v-.065l1.63-1.657c1.837-1.763 2.345-2.622 2.345-3.689 0-1.583-1.288-2.742-3.19-2.742-1.875 0-3.204 1.163-3.204 2.96h1.63c0-.966.609-1.57 1.55-1.57.9 0 1.57.55 1.57 1.44 0 .79-.48 1.353-1.412 2.3L.84 99.762V101Zm11.57.18c2.28.005 3.642-1.796 3.642-4.898 0-3.084-1.372-4.866-3.643-4.866s-3.638 1.778-3.642 4.866c0 3.098 1.362 4.898 3.642 4.898Zm0-1.445c-1.178 0-1.917-1.182-1.912-3.453.005-2.253.739-3.44 1.911-3.44 1.177 0 1.911 1.187 1.916 3.44 0 2.271-.734 3.453-1.916 3.453ZM4.335 144.18c2.28.005 3.642-1.796 3.642-4.898 0-3.084-1.37-4.866-3.642-4.866-2.271 0-3.638 1.778-3.643 4.866 0 3.098 1.362 4.898 3.643 4.898Zm0-1.445c-1.177 0-1.916-1.182-1.911-3.453.004-2.253.738-3.439 1.91-3.439 1.178 0 1.912 1.186 1.917 3.439 0 2.271-.734 3.453-1.916 3.453Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h17v148H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default NumberSvg;
