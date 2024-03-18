import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions"
import { SCREEN_LIMITS, colors, textStyles } from "../../theme/Theme"

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    productPage: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column' as any,
        alignItems: 'center',
        position: 'relative' as any,
    },
    pageHeader: {
        backgroundColor: colors.black,
        width: '100%',
        paddingLeft: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
    },
    goBackRow: {
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop:  screenDimensions.width <= SCREEN_LIMITS.mobile? '5%' : '1.5%',
        paddingBottom:  screenDimensions.width <= SCREEN_LIMITS.mobile? '2%' : '0.5%',
    },
    goBackText: {
        ...textStyles.body,
    }, 
}}