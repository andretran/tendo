import { useCallback } from "react";
import styled from "styled-components";

interface ChoiceProps {
    options: string[],
    value: string,
    name: string,
    label: string,
    onChange: (name: string, value: string) => void,
}

interface OptionProps {
    selected: boolean,
    text: string,
    value: string,
    name: string,
    onClick: (name: string, value: string) => void,
}

const ChoiceContainer = styled.div`
   display: flex;
   width: 100%;
   gap: 5px;
`;

const OptionContainer = styled.button<{ $selected: boolean }>`
    align-items: center;
    border-radius: 50px;
    box-shadow: none;
    border: none;
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    min-width: 100px;
    font-weight: 600;

    ${(props) => {
        return props.$selected ?
            `
                background-color: #1dbd88;
            ` : 
            `
                background-color: #fff;
                border: solid 1px #a9adb2;
                color: #52555a;
            `;
    }}
`

const SpanContainer = styled.span`
    display: none;
`

const ChoiceOption = ({selected, text, name, value, onClick}: OptionProps) => {
    const handleClick = useCallback(() => {
        onClick(name, value);
    }, [name, value, onClick]);

    return (
        <OptionContainer type="button" $selected={selected} onClick={handleClick}>{text}</OptionContainer>
    );
}

const Choice = ({options, value, name, label, onChange}: ChoiceProps) => {
    return (
        <ChoiceContainer>
            <SpanContainer>{label}</SpanContainer>
            {options.map((text: string, i: number) => 
                <ChoiceOption key={i} text={text} selected={value === text} value={text} name={name} onClick={onChange}/>
            )}
        </ChoiceContainer>
    );
};

export default Choice;