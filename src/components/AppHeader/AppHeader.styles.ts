import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';
import { SCREEN_LIMITS, colors } from '../../theme/Theme';

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    appHeader: {
        width: '100%',
        height: '10vh',
        position: 'relative'  as any,
        color: colors.white,
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
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
        border: 'none',
        backgroundColor: 'transparent',
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
        borderRadius: '20px',
        position: 'absolute'  as any,
        zIndex: 4,
        fontSize: '12px',
        fontWeight: '900',
        padding: '2px',
        alignSelf: 'flex-end',
        marginTop: '-10px',
        marginRight: '-10px',
        width: '20px',
        height: '20px',
        textAlign: 'center' as any,
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'center',
        alignItems: 'center',
    }
}};