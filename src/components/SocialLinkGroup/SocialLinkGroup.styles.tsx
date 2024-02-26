import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    socialGroup: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '45%' : '30%',
        display: 'flex',
        flexDirection: 'row',
        alginItems: 'center',
        justifyContent: 'space-between',
        alignSelf: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'flex-end',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '5%' : '0%',
    },
    socialLink: {
        width: '15%',
    },
    socialIcon: {
        width: '100%',
        height: 'auto',
    }
}};