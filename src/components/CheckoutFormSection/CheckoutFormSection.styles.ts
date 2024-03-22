import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    checkoutFormSection: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%',
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: '15px',
    },
    sectionTitle: {
        ...textStyles.subTitle,
        color: colors.primary,
        padding: '0',
        margin: '0',
    },
    sectionInputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '20px',
    },
    sectionInputRow: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px',
    },
    paymentDetailsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'  as any,
    },
    eMoneyRow: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cashRow: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row'  as any,
        justifyContent: 'flex-start',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'flex-start' : 'center',
    },
    cashIcon: {
        marginRight: screenDimensions.width <= SCREEN_LIMITS.tablet? '5%' : '10%',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '10px' : '0px',
    },
    cashText: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.borderGray,
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' : 
                screenDimensions.width <= SCREEN_LIMITS.tablet? '85%' : '70%',
    },
}}