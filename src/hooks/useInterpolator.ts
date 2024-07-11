import { IPrompt } from "@/common/models/survey";
import { useSession } from "./useSession"
import { interpolate } from "@/utils/interpolator";

export const useInterpolator = (prompt: IPrompt): IPrompt => {
    const sessionState = useSession();
    const interpolatedPrompt = interpolate(prompt, sessionState);

    return interpolatedPrompt;
}