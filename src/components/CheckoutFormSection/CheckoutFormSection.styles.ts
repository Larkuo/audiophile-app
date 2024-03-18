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
    },
    sectionInputRow: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px',
    },
}}