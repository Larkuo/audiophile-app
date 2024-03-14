import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    productFeaturesRow: {
        width: '80%',
        marginTop: '3%',
        // backgroundColor: colors.hoverBlack,
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet
                        ? 'column' : 'row' as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    featuresSection: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '45%',
    },
    inBoxSection: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '45%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' 
                        : screenDimensions.width <= SCREEN_LIMITS.tablet? 'row'
                        : 'column' as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '7%' : '0px',
    },
    featureSectionTitle: {
        ...textStyles.h3,
        marginTop: '0px',
        padding: '0px',
    },
    productFeature: {
        ...textStyles.body,
        width: '100%',
        paddingBottom: '10px',
        paddingTop: '10px',
    },
    boxItemList: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' 
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '65%'
                : '100%',
        paddingTop: '10px',
    },
    boxItemRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '3%',
    },
    boxItemQuantity: {
        ...textStyles.body,
        color: colors.primary,
        marginRight: '5%',
    },
    boxItem: {
        ...textStyles.body,
        color: colors.borderGray,
        textTransform: 'capitalize' as any,
    },
}}