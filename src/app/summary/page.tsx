'use client';

import { Header, Text } from "@/common/uikit/text";
import i18n from "@/common/utils/i18n";
import { useStorage } from "@/hooks/useSurvey";
import styled from "styled-components";

const SummaryContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`;

const SummaryPromptContainer = styled.li`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 10px;
`

interface SummaryPromptProps {
    question: string,
    value: string,
}


const SummaryPrompt = ({question, value}: SummaryPromptProps) => {
    return (
        <SummaryPromptContainer>
            <Text value={question} weight={600}/>
            <Text value={value}/>
        </SummaryPromptContainer>
    );
}



const SummaryPage = () => {
    const [storage] = useStorage();

    return (
        <SummaryContainer>
            <Header title={i18n.SUMMARY_TITLE}/>
            <ul>
                {
                    Object.entries(storage).map(([key, {question, value}]) => <SummaryPrompt key={key} question={question} value={value}/>)
                }
            </ul>
        </SummaryContainer>
    );
}

export default SummaryPage;