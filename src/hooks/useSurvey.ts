import { ISurvey } from '@/common/models/survey';
import { useState } from 'react';

import SurveyData from '@/data/survey.json';

const TYPED_SURVEY_DATA = SurveyData as ISurvey;

export const useSurvey = (): [ISurvey] => {
    const [survey] = useState <ISurvey>(TYPED_SURVEY_DATA);

    return [survey];
};

