import React from "react";

/**
 * Types
 */
export interface SvgIconProps {
  children: JSX.Element | JSX.Element[];
}

const SvgIcon: React.FC<SvgIconProps> = ({ children, ...props }: SvgIconProps) => {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      {children}
    </svg>
  );
};

export default SvgIcon;
