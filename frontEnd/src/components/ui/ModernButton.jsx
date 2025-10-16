import React from "react";

const ModernButton = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    disabled = false,
    type = "button",
    ...props
}) => {
    const baseClasses = "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "btn-primary focus:ring-secondary",
        secondary: "btn-secondary focus:ring-primary",
        accent: "btn-accent focus:ring-accent",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
        ghost: "text-primary hover:bg-primary hover:text-white focus:ring-primary"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default ModernButton;
