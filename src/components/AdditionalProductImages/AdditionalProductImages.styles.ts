import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions"
import { SCREEN_LIMITS } from "../../theme/Theme"

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    additionalProductImages: {
        width: '80%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' 
                            : 'row' as any,
        justifyContent: 'space-between',
        marginTop: '5%',
    },
    leftContainer: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : '40%',
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    leftImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '5%' : '0px',
    },
    rightContainer: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : '55%',
    },
    rightImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
    },
}}