'use client';

import { IPrompt, PromptType } from "@/common/models/survey";
import { Text, Header } from "@/common/uikit/text";
import { useInterpolator } from "@/hooks/useInterpolator";
import styled from 'styled-components';
import TextArea from "@/common/uikit/textarea";
import Choice from "./choice";


const StyledPrompt = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 600px;
`

interface PromptProps {
    prompt: IPrompt;
    value: any;
    onChange: (key: string, value: any) => void;
}

const renderField = (
    prompt: IPrompt,
    value: any,
    handleChange: (name: string, value: any) => void
) => {
    switch (prompt.type) {
        case PromptType.CHOICE:
            return <Choice options={prompt.options} name={prompt.name} label={prompt.label} value={value} onChange={handleChange} />
        case PromptType.TEXT:
            return <TextArea value={value} name={prompt.name} htmlFor={prompt.name} label={prompt.label} onChange={handleChange}/>
        default: 
            return null
    }
}

const Prompt = ({prompt, value, onChange}: PromptProps) => {
    const interpolatedPrompt = useInterpolator(prompt);

    return (
        <StyledPrompt>
            <Header title={interpolatedPrompt.header}/>
            <Text value={interpolatedPrompt.text} />
            {renderField(prompt, value, onChange)}
        </StyledPrompt>
    );
}

export default Prompt;