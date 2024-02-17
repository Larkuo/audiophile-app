import { SCREEN_LIMITS, SCREEN_WIDTH, colors } from "../../theme/Theme";

export const styles = {
    categoriesCardGroup: {
        width: '100%',
        height: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '60vh' : '40vh',
        display: 'flex',
        flexDirection: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? 'column' : 'row',
        paddingLeft: SCREEN_WIDTH <= SCREEN_LIMITS.tablet? '5%' : '10%',
        paddingRight: SCREEN_WIDTH <= SCREEN_LIMITS.tablet? '5%' : '10%',
        paddingTop: '30px',
        paddingBottom: '30px',
        marginTop: '5%',
        boxSizing: 'border-box',
        justifyContent: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? 'flex-start' : 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    categoryCard: {
        width: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '90%' : '30%',
        height: '100%',
        dispay: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '15vh' : 'none',
    },
    categoryImage: {
        width: '50%',
        height: 'auto',
        marginBottom: SCREEN_WIDTH <= SCREEN_LIMITS.mobile
                        ? '-25%'
                        : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
                        ? '-35%' 
                        : '-25%',
    },
    categoryUnderCard: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: colors.midGray,
        width: '100%',
        height: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '90%' : '65%',
        borderRadius: '5px',
        boxSizing: 'border-box',
        alignSelf: 'center',
        paddingBottom: '5%',
    },
    categoryLabel: {
        fontSize: SCREEN_WIDTH <= SCREEN_LIMITS.tablet? '15px' : '18px',
        letterSpacing: SCREEN_WIDTH <= SCREEN_LIMITS.tablet? '1.07px' : '1.29px',
        fontWeight: '900',
        color: colors.black,
        textTransform: 'uppercase',
    },
}