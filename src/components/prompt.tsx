'use client';

import { Prompt as PromptType } from "@/types/survey";
import { Text } from "@/common/uikit/text";
import { useInterpolator } from "@/hooks/useInterpolator";

interface PromptProps {
    prompt: PromptType;
}

const Prompt = ({prompt}: PromptProps) => {
    const interpolatedPrompt = useInterpolator(prompt);

    return (
        <section>
            <Text value={interpolatedPrompt.text} />
        </section>
    );
}

export default Prompt;