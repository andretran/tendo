import { Survey } from '@/types/survey';
import { useState } from 'react';

import SurveyData from '@/data/survey.json';

const TYPED_SURVEY_DATA = SurveyData as Survey;

export const useSurvey = (): [Survey] => {
    const [survey] = useState <Survey>(TYPED_SURVEY_DATA);

    return [survey];
};

