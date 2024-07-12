import { IPrompt, ISurvey, PromptType } from '@/common/models/survey';
import { useState, useCallback } from 'react';

import SurveyData from '@/data/survey.json';

const FORM_DATA_KEY = 'survey_form';
const TYPED_SURVEY_DATA = SurveyData as ISurvey;

interface PromptForm {
    [key: string]: { question: string, value: string };
}

const intializeFormState = (prompts: IPrompt[]): PromptForm => {
    const state: PromptForm = {}

    prompts.forEach(({name, type}: IPrompt) => {
        switch (type) {
            case PromptType.TEXT:
                state[name] = { question: '', value: '' };
                break;
            case PromptType.CHOICE:
                state[name] = { question: '', value: '' };
                break;
        } 
    });

    return state;
};

const intializeFormData = (): PromptForm => {
    return JSON.parse(localStorage.getItem(FORM_DATA_KEY) || '{}') as PromptForm;
}

export const useSurvey = (): [ISurvey, PromptForm, (name: string, question: string, value: any) => void] => {
    const [survey] = useState <ISurvey>(TYPED_SURVEY_DATA);
    const [form, setForm] = useState<PromptForm>(intializeFormState(survey.prompts));

    const handleFormChange = useCallback((name: string, question: string, value: any) => {
        const newState = {...form};
        newState[name] = {question, value};

        setForm(newState);
    }, [form, setForm]);

    return [survey, form, handleFormChange];
};

export const useStorage = (): [PromptForm, (form:PromptForm) => void] => {
    const [storage, setStorage] = useState<PromptForm>(intializeFormData);
    const setStorageWrapper = useCallback((form: { [key: string]: any}) => {
        const newStorage = {...form};
        setStorage(newStorage);
        localStorage.setItem(FORM_DATA_KEY, JSON.stringify(newStorage));
    }, []);

    return [storage, setStorageWrapper];
}

