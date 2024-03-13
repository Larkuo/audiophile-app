import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors, textStyles } from "../../theme/Theme";

const titleStyle = (screenDimensions: ScreenDimensionsProps) => 
    screenDimensions.width <= SCREEN_LIMITS.mobile? textStyles.h4 : textStyles.h2;

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    BGSection: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '90%' 
                : '80%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile
                ? '75vh'
                : screenDimensions.width <= SCREEN_LIMITS.tablet
                ? '65vh' 
                : 'auto',
        marginBottom: '10vh',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet? 'column' : 'row-reverse',
        alignItems: 'center',
        // boxSizing: 'border-box',
    },
    BGImage: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '47.5%',
        height: screenDimensions.width <= SCREEN_LIMITS.tablet? 'auto' : 'auto',
        borderRadius: '5px',
    },
    BGLeft: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '47.5%',
        height: screenDimensions.width <= SCREEN_LIMITS.tablet? '47.5%' : '100%',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        // boxSizing: 'border-box',
    },
    BGTitle: {
        ...titleStyle(screenDimensions),
        marginBottom: '5%',
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : '80%',
        alignSelf: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : '',
        textAlign: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'left',
    },
    BGPrimaryText: {
        color: colors.primary,
    },
    BGBody: {
        ...textStyles.body,
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '80%',
        textAlign: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'left',
    }
}}