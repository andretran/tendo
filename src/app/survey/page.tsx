'use client';

import {useState, useCallback} from 'react';
import {Header} from '@/common/uikit/text';
import { useSurvey } from '@/hooks/useSurvey';
import Prompt from '@/components/prompt';
import Button from '@/common/uikit/button';
import i18n from '@/common/utils/i18n';

const SurveyPage = () => {
    const [currentPage, setPage] = useState <number>(0);
    const [survey] = useSurvey();

    const navigateBack = useCallback(() => setPage(currentPage -1), [currentPage]);
    const navigateFoward = useCallback(() => setPage(currentPage + 1), [currentPage]);

    return (
        <>
            <Header title={survey.header}/>
            <Prompt prompt={survey.prompts[currentPage]}/>
            <div>
                { currentPage > 0 ? <Button onClick={() => navigateBack()} text={i18n.BACK}/> : null } 
                { currentPage < survey.prompts.length - 1 ? <Button onClick={() => navigateFoward()} text={i18n.CONTINUE}/> : null }
            </div>
        </>
    );
}

export default SurveyPage;