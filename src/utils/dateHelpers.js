export const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};

export const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export const getDurationText = (days, nights) => {
    if (nights === 0) return `${days} Days`;
    return `${days} Days / ${nights} Nights`;
};

export const isDateAvailable = (date, blackoutDates = []) => {
    // Simple check for now, can be expanded
    const day = date.getDay();
    // Example: No tours on Sundays (just as example logic)
    // return day !== 0; 
    return true;
};
