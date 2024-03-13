import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from "../../theme/Theme";

const navStyle = (screenDimensions: ScreenDimensionsProps) => {
    return screenDimensions.width <= SCREEN_LIMITS.mobile? textStyles.h6 : textStyles.h5;
}

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    sideNav: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        left: '0',
        top: '0',
        zIndex: 5,
        position: 'absolute',
        backgroundColor: colors.transparentBlack,
    },
    navList: {
        width: '65%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: colors.white,
        backgroundColor: colors.black,
        // boxSizing: 'border-box',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '2.5%',
    },
    sidenavHeader: {
        width: '100%',
        paddingTop: '2%',
        paddingBottom: '3%',
        // boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${colors.borderGray}`,
        marginBottom: '10%',
    },
    appLogo: {
        height: 'auto',
        width: '30%',
    },
    closeButton: {
        ...navStyle(screenDimensions),
        textTransform: 'none',
    },
    navLink: {
        ...navStyle(screenDimensions),
        marginTop: '3%',
        marginBottom: '3%',
        paddingBottom: '3%',
    }
}}