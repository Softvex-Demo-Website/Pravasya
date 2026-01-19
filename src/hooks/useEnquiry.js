import { useState } from 'react';

const useEnquiry = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    const submitEnquiry = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            // console.log("Enquiry submitted:", data);
            setSubmitStatus('success');
            return true;
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        submitStatus,
        submitEnquiry,
        resetStatus: () => setSubmitStatus(null)
    };
};

export default useEnquiry;
