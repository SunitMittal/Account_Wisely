import React from "react";

const Button = ({
  children,
  variant = "primary" | "secondary" | "outline",
  size = "sm" | "md" | "lg",
  className = "",
  onClick,
  type = "button" | "submit" | "reset",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    secondary: "bg-navy-800 text-white hover:bg-navy-900 focus:ring-navy-500",
    outline:
      "border border-navy-300 text-navy-700 hover:bg-navy-50 focus:ring-navy-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
