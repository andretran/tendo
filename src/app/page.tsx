'use client';

import {useState, useCallback} from 'react';
import { useSurvey } from '@/hooks/useSurvey';
import Prompt from '@/components/prompt';
import Button, { ButtonStyle } from '@/common/uikit/button';
import i18n from '@/common/utils/i18n';
import styled from 'styled-components';

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 30px;
    position: relative;
`;

const SurveyPage = () => {
    const [currentPage, setPage] = useState <number>(0);
    const [survey] = useSurvey();

    const navigateBack = useCallback(() => setPage(currentPage -1), [currentPage]);
    const navigateFoward = useCallback(() => setPage(currentPage + 1), [currentPage]);

    return (
        <SurveyContainer>
            <Prompt prompt={survey.prompts[currentPage]}/>
            <div>
                { currentPage > 0 ? <Button style={ButtonStyle.PRIMARY} onClick={() => navigateBack()} text={i18n.BACK}/> : null } 
                { currentPage < survey.prompts.length - 1 ? <Button style={ButtonStyle.PRIMARY} onClick={() => navigateFoward()} text={i18n.CONTINUE}/> : null }
            </div>
        </SurveyContainer>
    );
}

export default SurveyPage;