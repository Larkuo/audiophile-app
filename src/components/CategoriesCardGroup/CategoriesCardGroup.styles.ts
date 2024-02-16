import { SCREEN_LIMITS, SCREEN_WIDTH } from "../../theme/Theme";

export const styles = {
    categoriesCardGroup: {
        width: '100%',
        display: 'flex',
        flexDirection: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? 'column' : 'row',
        paddingLeft: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '5%' : '10%',
        paddingRight: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '5%' : '10%',
        paddingTop: '30px',
        paddingBottom: '30px',
        boxSizing: 'border-box',
        justifyContent: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? 'flex-start' : 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    categoryCard: {
        width: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '90%' : '30%',
        dispay: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // backgroundColor: 'yellow',
    },
    categoryImage: {
        width: '50%',
        height: 'auto',
        marginBottom: '-100px'
    },
}