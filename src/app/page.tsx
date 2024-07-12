'use client';

import {useState, useCallback, useMemo} from 'react';
import { useSurvey } from '@/hooks/useSurvey';
import Prompt from '@/components/prompt';
import Button, { ButtonStyle } from '@/common/uikit/button';
import i18n from '@/common/utils/i18n';
import styled from 'styled-components';
import {useRouter} from 'next/navigation';
import { useStorage } from '@/hooks/useSurvey';

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 30px;
    position: relative;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: auto;
    justify-content: right;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 0 40px;
`

const SurveyPage = () => {
    const router = useRouter();
    const [currentPage, setPage] = useState <number>(0);
    const [survey, form, setForm] = useSurvey();
    const [_, setStorage] = useStorage();

    const navigateBack = useCallback(() => setPage(currentPage -1), [currentPage]);
    const navigateFoward = useCallback(() => {
        if (currentPage == survey.prompts.length - 1) {
            setStorage(form);
            router.push('/summary');
        } else {
            setPage(currentPage + 1);
        }
    }, [currentPage, router, survey, form, setStorage]);

    const promptValue = useMemo(() => {
        const name = survey.prompts[currentPage].name;

        return form[name]?.value;
    }, [survey, form, currentPage]);

    const continueText = currentPage === survey.prompts.length - 1 ? i18n.DONE : i18n.CONTINUE;

    return (
        <SurveyContainer>
            <FormContainer>
                <Prompt prompt={survey.prompts[currentPage]} onChange={setForm} value={promptValue}/>
                <ButtonContainer>
                    { currentPage > 0 ? <Button style={ButtonStyle.DEFAULT} onClick={() => navigateBack()} text={i18n.BACK}/> : null } 
                    <Button disabled={!promptValue} style={ButtonStyle.PRIMARY} onClick={() => navigateFoward()} text={continueText}/>
                </ButtonContainer>
            </FormContainer>
        </SurveyContainer>
    );
}

export default SurveyPage;