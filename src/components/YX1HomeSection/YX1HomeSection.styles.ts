import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors, textStyles } from "../../theme/Theme";

const productNameStyle = (screenDimensions: ScreenDimensionsProps) => screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? textStyles.h5
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? textStyles.h4
                    : textStyles.h3;

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    yx1Section: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '90%' 
                : '80%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile
                ? '60vh'
                : screenDimensions.width <= SCREEN_LIMITS.tablet
                ? '35vh' 
                : '45vh',
        marginBottom: '5vh',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row',
        justifyContent: 'space-between',
        // boxSizing: 'border-box',
    },
    productImage: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : '47.5%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '47.5%' : 'auto',
        borderRadius: '5px',
    },
    rightContainer: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : '47.5%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '47.5%' : '100%',
        backgroundColor: colors.midGray,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'flex-start',
        paddingLeft: '5%',
        paddingRight: '5%',
        // boxSizing: 'border-box',
    },
    yx1Title: {
        ...productNameStyle(screenDimensions),
    },
    seeProductButton: {
        width: '45%',
        marginTop: '5%',
    }
}}