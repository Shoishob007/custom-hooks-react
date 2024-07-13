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

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            setIsSubmitting(false);
            setValues({});
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        getFieldProps: (name) => ({
            name,
            value: values[name] || '',
            onChange: handleChange,
            className: `form-control ${errors[name] ? 'is-invalid' : values[name] ? 'is-valid' : ''}`,
        }),
    };
}
