import React from 'react';
const PlotIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M31.875 4.063l-10.938 10.938-7-6.938-9.938 9.938v6l9.938-10 7 7 10.938-11zM4 27.938v-27.875h-4v31.875h32v-4z" />
    </svg>
  );
};
export default PlotIcon;
