import { SCREEN_LIMITS, SCREEN_WIDTH, colors } from '../../theme/Theme';

SCREEN_WIDTH <= SCREEN_LIMITS.mobile
        ? {width: '80%'}
        : {width: '45%'}

export const styles = {
    appHeader: {
        width: '100%',
        height: '10vh',
        position: 'relative',
        color: 'white',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${colors.borderGray}`,
    },
    menuLogoGroup: {
        width: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '70%':'45%',
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
};