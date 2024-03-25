import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    sideNav: {
        width: '100vw',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '150vh' : '100vh',
        display: 'flex',
        flexDirection: 'column'  as any,
        left: '0',
        top: '0',
        zIndex: 5,
        position: 'absolute'  as any,
        backgroundColor: colors.transparentBlack,
    },
    sideNavBody: {
        width: '100%',
        backgroundColor: colors.white,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    categoryGroup: {
        paddingBottom: '0px',
        paddingTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '10px' : '0px',
        backgroundColor: colors.white,     
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '90vh' : '35vh', 
        marginTop: '0px',
        marginBottom: '0px',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    categoryCard: {
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '20vh' : '65%',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '9vh' : 'none',
    },
}}