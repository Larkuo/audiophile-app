import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions"
import { SCREEN_LIMITS, colors, textStyles } from "../../theme/Theme"

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    appFooter: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.black,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '5vh',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'flex-start',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '10vh' : '0vh',
    },
    footerDash: {
        hegiht: '0px',
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '30%' : '10%',
        backgroundColor: colors.black,
        borderTop: `5px solid ${colors.primary}`,
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '2vh' : '5vh',
    },
    footerContent: {
        width: '100%', 
        height: '30vh',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLeft: {
        width: '47.5%',
        height: '100%',
        display: 'flex', 
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' 
                        : screenDimensions.width <= SCREEN_LIMITS.tablet? 'row' : 'column',
        justifyContent: 'space-between',
        color: colors.borderGray,
    },
    footerRight: {
        width: '47.5%',
        height: '80%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    logoNavRow: {
        width: '100%',
        display: 'flex', 
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet? 'column' : 'row',
        justifyContent: screenDimensions.width <= SCREEN_LIMITS.tablet? 'flex-start' : 'space-between',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'flex-start',
    },
    logoLink: {
        textDecoration: 'none',
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '35%' : '15%',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '2vh' : '5vh',
    },
    appLogo: {
        height: 'auto',
        width: '100%',
    },
    navBar: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' 
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '60%' : '47.5%',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '3%' : '0%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    navLink:{
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '3%' : '0%',
    },
    footerBodyRow: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '85%'
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '100%': '40%',
        color: colors.borderGray,
        marginTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '10%' : '0%',
        textAlign: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'left',
    },
    footerBodyText: {
        ...textStyles.body,
    },
    copyrightSocialGroup: {
        color: colors.borderGray,
        width: '100%',
        display: 'flex',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '10%' : '0%',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' 
                        : screenDimensions.width <= SCREEN_LIMITS.tablet? 'row' : 'column-reverse',
        justifyContent: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' 
                        : 'space-between',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' 
                        : 'space-between',
    },
    copyRightRow: {},
}}