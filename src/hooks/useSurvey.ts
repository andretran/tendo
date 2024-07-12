import { IPrompt, ISurvey, PromptType } from '@/common/models/survey';
import { useState, useCallback } from 'react';

import SurveyData from '@/data/survey.json';

const TYPED_SURVEY_DATA = SurveyData as ISurvey;

interface PromptForm {
    [key: string]: any;
}

const intializeFormState = (prompts: IPrompt[]): PromptForm => {
    const state: PromptForm = {}

    prompts.forEach(({name, type}: IPrompt) => {
        switch (type) {
            case PromptType.TEXT:
                state[name] = '';
                break;
            case PromptType.CHOICE:
                state[name] = null;
                break;
        }
    });

    return state;
};

export const useSurvey = (): [ISurvey, PromptForm, (name: string, value: any) => void] => {
    const [survey] = useState <ISurvey>(TYPED_SURVEY_DATA);
    const [form, setForm] = useState<PromptForm>(intializeFormState(survey.prompts));

    const handleFormChange = useCallback((name: string, value: any) => {
        const newState = {...form};
        newState[name] = value;

        setForm(newState);
    }, [form, setForm]);

    return [survey, form, handleFormChange];
};

