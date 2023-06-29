import { useState, useCallback } from "react";

export function Validation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);

    function handleChange(evt) {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        });

        setErrors({
            ...errors,
            [evt.target.name]: evt.target.validationMessage
        });

        setValid(evt.target.closest('.form').checkValidity());
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setValid(newIsValid);
        }, [setValues, setErrors, setValid]
    )

    return {
        values,
        errors,
        valid,
        handleChange,
        resetForm
    };
};