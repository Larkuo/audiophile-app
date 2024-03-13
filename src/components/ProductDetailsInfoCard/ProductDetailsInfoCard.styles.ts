import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from "../../theme/Theme";

const productNameStyle = (screenDimensions: ScreenDimensionsProps) => screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? textStyles.h5
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? textStyles.h4
                    : textStyles.h3;

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    productDetailsInfoCard: {
        width: '80%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '85vh' 
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '65vh' : '75vh',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '3%' : '1%',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '3%' : '1%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row' as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: colors.hoverPrimary,
    },
    productImage: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' 
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '45%' : 'auto',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? 'auto'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? 'auto' : '100%',
        borderRadius: '5px',
        backgroundColor: colors.lightGray,
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '0%'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '5%' : '0%',
    },
    productInfo: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' 
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '45%' : '47.5%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '52%' : 'auto',
        textAlign: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'left' as any,
        display: 'flex',
        flexDirection: 'column' as any,
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'flex-start',
    },
    newProduct: {
        fontSize: screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? '10px'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '12px' : '14px',
        lineHeight: '19px',
        letterSpacing: '10px',
        textTransform: 'uppercase' as any,
        color: colors.primary,
        marginBottom: '5%',
    },
    productName: {
        ...productNameStyle(screenDimensions),
    },
    productDescription: {
        ...textStyles.body,
        marginTop: '5%',
        marginBottom: '5%',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '60%',
    },
    addToCartRow: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '60%',
        display: 'flex',
        flexDirection: 'row' as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5%',
    },
}};