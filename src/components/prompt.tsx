'use client';

import { IPrompt } from "@/common/models/survey";
import { Text, Header } from "@/common/uikit/text";
import { useInterpolator } from "@/hooks/useInterpolator";
import styled from 'styled-components';

const StyledPrompt = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

interface PromptProps {
    prompt: IPrompt;
}

const Prompt = ({prompt}: PromptProps) => {
    const interpolatedPrompt = useInterpolator(prompt);

    return (
        <StyledPrompt>
            <Header title={interpolatedPrompt.header}/>
            <Text value={interpolatedPrompt.text} />
        </StyledPrompt>
    );
}

export default Prompt;