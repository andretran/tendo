import styled from 'styled-components';
import { useCallback } from 'react';

const StyledTextArea = styled.p`
    position: relative;
    width: 100%;
    height: 150px;

    & label {
        display: none;
    }

    & textarea {
        background-color: #fff;
        border: #a9adb2 solid 1px;
        border-radius: 5px;
        color: #52555a;
        height: 100%;
        width: 100%;
        resize: none;
        padding: 5px;
    }
`

interface TextAreaProps {
    htmlFor: string;
    label: string;
    name: string;
    value: string;
    onChange?: (name: string, value: any) => void;
}

const TextArea = ({htmlFor, label, name, value, onChange}: TextAreaProps) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>): void => {
       onChange?.(name, e.target.value);
    }, [name, onChange]);

    return (
        <StyledTextArea>
            <label htmlFor={htmlFor}>{label}</label>
            <textarea id={htmlFor} value={value} onChange={handleChange}/>
        </StyledTextArea>
    );
}

export default TextArea;