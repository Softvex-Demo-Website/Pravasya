import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
    return (
        <motion.div
            className={`bg-white rounded-2xl overflow-hidden border border-gray-100 ${hover ? 'hover-lift' : ''} shadow-card ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
