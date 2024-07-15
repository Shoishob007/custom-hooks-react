import { useState, useEffect } from 'react';

export function useForm(callback, validate) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const resetForm = () => {
        setValues({});
        setErrors({});
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            resetForm();
            setIsSubmitting(false);
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        addFormData: (name) => ({
            name,
            value: values[name] || '',
            onChange: handleChange,
            className: `form-control ${errors[name] ? 'is-invalid' : values[name] ? 'is-valid' : ''}`,
        }),
    };
}
