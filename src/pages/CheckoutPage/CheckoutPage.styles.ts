import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    checkoutPage: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'  as any,
        alignItems: 'center',
        backgroundColor: screenDimensions.width <= SCREEN_LIMITS.tablet? colors.white 
                : colors.midGray,
    },
    pageHeader: {
        backgroundColor: colors.black,
        width: '100%',
        paddingLeft: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
    },
    goBackRow: {
        width: '100%',
        paddingLeft: screenDimensions.width <= SCREEN_LIMITS.tablet? '10%' : '5%',
        paddingRight: screenDimensions.width <= SCREEN_LIMITS.tablet? '10%' : '5%',
        paddingTop:  screenDimensions.width <= SCREEN_LIMITS.mobile? '5%' : '1.5%',
        paddingBottom:  screenDimensions.width <= SCREEN_LIMITS.mobile? '2%' : '0.5%',
    },
    goBackText: {
        ...textStyles.body,
    },
    checkoutPageContent: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet? 'column' : 'row'  as any,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '5%':'1.5%',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '5%':'1.5%',
        paddingLeft: screenDimensions.width <= SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: screenDimensions.width <= SCREEN_LIMITS.tablet? '10%':'5%',
    },
    checkoutForm: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '68%',
        backgroundColor: colors.white,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '1.5%' : '30px',
        paddingBottom: screenDimensions.width <= SCREEN_LIMITS.tablet? '0px' : '20px',
    },
    formHeader: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%',
        marginBottom: '20px',
    },
    formTitle: {
        ...textStyles.h3,
        padding: '0',
        margin: '0',
    },
    checkoutCart: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '27%',
        backgroundColor: colors.white,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: screenDimensions.width <= SCREEN_LIMITS.tablet? '0px' : '20px',
    },
    cartHeader: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%',
        marginBottom: '10px',
    },
    cartTitle: {
        fontSize: '18px',
        letterSpacing: '1.3px',
        padding: '0',
        margin: '0',
    },
    cartFooterRow: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%',
        marginTop: '10px',
    },
    checkoutCartLabel: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
    checkoutCartValue: {
        fontSize: '18px',
        color: colors.black,
    },
    grandTotalRow: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%',
        marginTop: '30px',
    },
    grandTotalValue: {
        fontSize: '18px',
        color: colors.primary,
    },
    payButton: {
        height: '40px', 
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%', 
        marginTop: '20px',
    },
}}