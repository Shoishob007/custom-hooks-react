export default function validate(values) {
    let errors = {};

    const namePattern = /^[A-Za-z\s]{4,30}$/;
    const surNamePattern = /^[A-Za-z\s]{3,20}$/;

    if (!values.name) {
        errors.name = 'Name is required';
    } else if (!namePattern.test(values.name)) {
        errors.name = 'Name must be at least 4 and at max 30 characters long and contains letters and spaces';
    }

    if (!values.surname) {
        errors.surname = 'Surname is required';
    } else if (!surNamePattern.test(values.surname)) {
        errors.surname = 'Name must be at least 4 and at max 30 characters long and contains letters and spaces';
    }

    if (!values.age) {
        errors.age = 'Age is required';
    } else if (!/^\d+$/.test(values.age)) {
        errors.age = 'Age must be a number';
    }

    if (!values.expertise) {
        errors.expertise = 'Expertise is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    return errors;
}
