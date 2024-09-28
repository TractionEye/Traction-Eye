import React from 'react';

interface FaRegCopyProps extends React.SVGProps<SVGSVGElement> {
  size?: number; // Optional size prop
  color?: string; // Optional color prop
}

export const FaRegCopy: React.FC<FaRegCopyProps> = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    fill={color}
    strokeWidth="0"
    viewBox="0 0 448 512"
    height={size}
    width={size}
    {...props}
  >
    <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
  </svg>
);

export default FaRegCopy;
