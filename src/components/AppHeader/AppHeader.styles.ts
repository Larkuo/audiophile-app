import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';
import { SCREEN_LIMITS, colors } from '../../theme/Theme';

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    appHeader: {
        width: '100%',
        height: '10vh',
        position: 'relative',
        color: colors.white,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuLogoGroup: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '70%':'45%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuIcon: {
        height: '100%',
        width: 'auto',
    },
    appLogo: {
        height: '100%',
        width: 'auto',
    },
    logoLink: {
        textDecoration: 'none',
        color: 'white',
        fontWeight: '900',
        fontSize: '30px',
    },
    navBar: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
        boxSizing: 'border-box',
    },
    cartIcon: {
        height: '100%',
        width: 'auto',
    },
}};