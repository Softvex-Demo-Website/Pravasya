export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
    // Indian phone number validation
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
};

export const isRequired = (value) => {
    return value !== null && value !== undefined && value.trim() !== '';
};

export const maxLength = (value, max) => {
    return value.length <= max;
};

export const minLength = (value, min) => {
    return value.length >= min;
};
