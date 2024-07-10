enum PromptType {
    RATING = 'rating',
    CHOICE = 'choice',
    TEXT = 'text',
    SUMMARY  = 'summary',
}

export interface Prompt {
    id: string,
    text: string,
    type: PromptType,
}

export interface Survey {
    header: string,
    prompts: any[],
}

