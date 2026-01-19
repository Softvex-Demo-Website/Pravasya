import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon: Icon,
    isLoading = false,
    ...props
}) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-saffron-500 hover:bg-saffron-600 text-white shadow-button hover:shadow-button-hover active:scale-95",
        secondary: "bg-deepGreen-500 hover:bg-deepGreen-600 text-white shadow-md hover:shadow-lg active:scale-95",
        outline: "border-2 border-saffron-500 text-saffron-500 hover:bg-saffron-50 active:scale-95",
        ghost: "text-earthBrown-600 hover:bg-gray-100 hover:text-earthBrown-800",
        white: "bg-white text-earthBrown-800 hover:bg-gray-50 shadow-md",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            ) : Icon ? (
                <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''}`} />
            ) : null}
            {children}
        </motion.button>
    );
};

export default Button;
