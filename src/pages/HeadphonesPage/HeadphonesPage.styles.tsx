import { 
    SCREEN_LIMITS, 
    SCREEN_WIDTH, 
    colors, 
    textStyles 
} from '../../theme/Theme';

const titleStyles = SCREEN_WIDTH <= SCREEN_LIMITS.mobile
                        ? textStyles.h3
                        : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
                        ? textStyles.h2 
                        : textStyles.h1;

export const styles = {
    headphonesPage: {
        width: '100%',
        boxSizing: 'border-box',
    },
    pageHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.black,
        paddingLeft: SCREEN_WIDTH > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: SCREEN_WIDTH > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingBottom: '2.5%',
        color: colors.white,
        boxSizing: 'border-box',
    },
    pageTitle: {
        ...titleStyles,
        textAlign: 'center',
        paddingTop: '2.5%',
    }
};