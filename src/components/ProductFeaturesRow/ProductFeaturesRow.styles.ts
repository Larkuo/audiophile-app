import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    page: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : '20%',
    }
}}