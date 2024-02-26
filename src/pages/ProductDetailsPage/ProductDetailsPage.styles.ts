import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions"
import { SCREEN_LIMITS, colors } from "../../theme/Theme"

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    productPage: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageHeader: {
        backgroundColor: colors.black,
        width: '100%',
        paddingLeft: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingBottom: '2.5%',
        boxSizing: 'border-box',
    }
}}