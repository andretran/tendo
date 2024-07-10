import { Prompt } from "@/types/survey";
import { useSession } from "./useSession"
import { interpolate } from "@/utils/interpolator";

export const useInterpolator = (prompt: Prompt): Prompt => {
    const sessionState = useSession();
    const interpolatedPrompt = interpolate(prompt, sessionState);

    return interpolatedPrompt;
}