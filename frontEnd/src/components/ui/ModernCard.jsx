import React from "react";

const ModernCard = ({ 
  children, 
  className = "", 
  hover = true,
  padding = "default",
  ...props 
}) => {
  const baseClasses = "card-modern";
  const hoverClasses = hover ? "hover:transform hover:-translate-y-1" : "";
  
  const paddingClasses = {
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
    xl: "p-10"
  };
  
  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default ModernCard;
