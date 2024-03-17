import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';
import { SCREEN_LIMITS, colors } from '../../theme/Theme';

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    appHeader: {
        width: '100%',
        height: '8vh',
        position: 'relative'  as any,
        color: colors.white,
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2.5%',
    },
    menuLogoGroup: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '70%':'45%',
        display: 'flex',
        flexDirection: 'row'  as any,
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
        display: 'flex',
        flexDirection: 'column'  as any,
    },
    navBar: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
    },
    cartIcon: {
        height: '100%',
        width: 'auto',
    },
    countBubble: {
        color: colors.white,
        backgroundColor: colors.primary,
        borderRadius: '30px',
        position: 'absolute'  as any,
        zIndex: 5,
        fontSize: '12px',
        fontWeight: '900',
        padding: '2px',
        alignSelf: 'flex-end',
        marginTop: '-10px',
        marginRight: '-8px',
    }
}};