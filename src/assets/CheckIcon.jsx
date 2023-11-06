import React from "react";

const CheckIcon = ({ width = 16, height = 20 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
    >
      <path
        d="M14.6693 11.3853V11.9986C14.6685 13.4362 14.2029 14.8351 13.3422 15.9865C12.4814 17.1379 11.2715 17.9803 9.89284 18.3879C8.51422 18.7955 7.04078 18.7465 5.69225 18.2483C4.34372 17.7501 3.19237 16.8293 2.40991 15.6233C1.62745 14.4173 1.2558 12.9907 1.35039 11.5562C1.44498 10.1217 2.00074 8.75616 2.93479 7.66332C3.86884 6.57049 5.13113 5.80886 6.5334 5.49204C7.93567 5.17521 9.40278 5.32017 10.7159 5.90527"
        stroke="#3CAF28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 6.66406L8 13.3374L6 11.3374"
        stroke="#3CAF28"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
