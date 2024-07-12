import { SessionState } from "@/hooks/useSession";
import { IPrompt } from "@/common/models/survey";

const INTERPOLATION_PATTERN = /\[([^\]]+)\]/g;

const getProperty = (property: string, data: {[key: string]: any}): string => {
    const properties = property.split('.');

    if (properties.length === 1) {
        return data != null ? data[property] : '';
    } else {
        const key = properties[0];
        return getProperty(properties.slice(1).join('.'), data[key]);
    }
}

const replaceProperties = (text: string, property: string, session: SessionState): string => {
    const pattern = new RegExp(`\\[${property}\\]`, 'g');
    const value = getProperty(property, session);

    return text.replace(pattern, value);
}

const extractAndReplace = (text: string, session: SessionState): string => {
    let interpolatedText = text;
    let matches = text.match(INTERPOLATION_PATTERN);

    if (matches) {
        const sanitizedProps = matches.map(match => match.slice(1, -1));
        interpolatedText = sanitizedProps.reduce((acc: string, current: string) => 
            replaceProperties(acc, current, session), interpolatedText);
    }

    return interpolatedText;
}

export const interpolate = (prompt: IPrompt, session: SessionState): IPrompt => {
    return {...prompt, text: extractAndReplace(prompt.text, session), header: extractAndReplace(prompt.header, session)};
}