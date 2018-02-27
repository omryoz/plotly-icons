import React from 'react';
const PlotCone3dIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M16 3.875c-5.813 0-11.75 1.688-11.75 4.813 0 0.75 0.313 1.438 0.875 1.938l8.188 15.813c0.5 1 1.563 1.625 2.688 1.625s2.188-0.625 2.688-1.625l8.188-15.813c0.563-0.5 0.875-1.188 0.875-1.938 0-3.125-5.938-4.813-11.75-4.813zM16 6.125c5.813 0 9 1.563 9.438 2.438l-0.438 0.813c-1.063 0.813-4.125 1.938-9 1.938s-7.938-1.125-9-1.938l-0.438-0.813c0.438-0.875 3.625-2.438 9.438-2.438zM16.688 25.438c-0.125 0.25-0.375 0.438-0.688 0.438s-0.563-0.188-0.688-0.438l-6.688-12.938c2.375 0.688 4.875 1.063 7.375 1.063s5-0.375 7.375-1.063z" />
    </svg>
  );
};
export default PlotCone3dIcon;
