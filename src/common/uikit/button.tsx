import * as React from 'react';

enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

interface ButtonProps {
    text: string;
    type?: ButtonType;
    value?: string;
    onClick?: () => void; 
}

const Button = ({type = ButtonType.BUTTON, value, text, onClick}:ButtonProps) => <button onClick={onClick} type={type} value={value}>{text}</button>;

export default Button;