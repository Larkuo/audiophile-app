import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    radioGroupContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row'  as any,
        justifyContent: screenDimensions.width <= SCREEN_LIMITS.mobile? 'flex-start' : 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
    },
    groupLabel: {
        fontSize: '12px',
        letterSpacing: '-0.21px',
        fontWeight: 'bold',
    },
    radioButtonGroup: {
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
}};