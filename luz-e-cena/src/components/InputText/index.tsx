import React from 'react'
import style from "./InputText.module.css"

const InputText = ({
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => { 
    return <input className = {style.input} {...props} />;
};

export default InputText
