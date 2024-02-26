import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    categoriesCardGroup: {
        width: '100%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '60vh' : '40vh',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row',
        paddingLeft: screenDimensions.width <= SCREEN_LIMITS.tablet? '5%' : '10%',
        paddingRight: screenDimensions.width <= SCREEN_LIMITS.tablet? '5%' : '10%',
        paddingTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '30px'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet? '80px' 
                    : '50px',
        paddingBottom: '30px',
        marginTop: '5%',
        boxSizing: 'border-box',
        justifyContent: screenDimensions.width <= SCREEN_LIMITS.mobile? 'flex-start' : 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    categoryCard: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '90%' : '30%',
        height: '100%',
        dispay: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '15vh' : 'none',
        position: 'relative',
    },
    categoryImage: {
        width: '50%',
        height: 'auto',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile
                        ? '-25%'
                        : screenDimensions.width <= SCREEN_LIMITS.tablet
                        ? '-25%' 
                        : '-25%',
    },
    categoryUnderCard: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: colors.midGray,
        width: '100%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '90%'
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '60%' 
                : '65%',
        borderRadius: '5px',
        boxSizing: 'border-box',
        alignSelf: 'center',
        paddingBottom: '5%',
    },
    categoryLabel: {
        fontSize: screenDimensions.width <= SCREEN_LIMITS.tablet? '15px' : '18px',
        letterSpacing: screenDimensions.width <= SCREEN_LIMITS.tablet? '1.07px' : '1.29px',
        fontWeight: '900',
        color: colors.black,
        textTransform: 'uppercase',
    },
}};