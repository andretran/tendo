export enum PromptType {
    CHOICE = 'choice',
    TEXT = 'text',
    SUMMARY  = 'summary',
}

export interface IPromptBase {
    id: string,
    header: string,
    text: string,
    type: PromptType,
    name: string,
    label: string,
}

export interface IPromptChoice extends IPromptBase {
    type: PromptType.CHOICE,
    options: string[],
}

export interface IPromptTextArea extends IPromptBase {
    type: PromptType.TEXT,
}

export type IPrompt = IPromptChoice | IPromptTextArea;

export interface ISurvey {
    prompts: any[],
}