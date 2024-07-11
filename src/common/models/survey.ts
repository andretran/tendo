enum PromptType {
    RATING = 'rating',
    CHOICE = 'choice',
    TEXT = 'text',
    SUMMARY  = 'summary',
}

export interface IPrompt {
    id: string,
    header: string,
    text: string,
    type: PromptType,
}

export interface ISurvey {
    prompts: any[],
}

