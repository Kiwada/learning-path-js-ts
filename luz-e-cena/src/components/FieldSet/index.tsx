import React from 'react'
import styles from './FieldSet.module.css'

type FieldsetProps = {
    variant?: 'primary' | 'secondary';
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;


const FieldSet = ({ children, variant = "primary" }: FieldsetProps) => {
    return (
        <fieldset
            className={`${styles.inputWrapper} ${variant === "primary" ? styles.primary : styles.secondary
                }`}
        >
            {children}
        </fieldset>
    );
};

export default FieldSet;