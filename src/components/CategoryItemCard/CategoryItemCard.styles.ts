import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors, textStyles } from "../../theme/Theme";

const productNameStyle = (screenDimensions: ScreenDimensionsProps) => screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? textStyles.h5
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? textStyles.h4
                    : textStyles.h3;

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    categoryItemCard: {
        width: '80%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '85vh' 
                    : screenDimensions.width <= SCREEN_LIMITS.tablet? '75vh' 
                    : '65vh',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet? 'column' : 'row'  as any,
        paddingTop: '3.5%',
        paddingBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '10%' : '3.5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    altCategoryItemCard: {
        width: '80%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '85vh' 
                    : screenDimensions.width <= SCREEN_LIMITS.tablet? '75vh' 
                    : '65vh',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet? 'column' : 'row-reverse'  as any,
        paddingTop: '3.5%',
        paddingBottom: '3.5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemImage: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : 'auto',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '45%'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? 'auto' : '100%',
        borderRadius: '5px',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '0%'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '5%' : '0%',
    },
    itemInfo: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '47.5%',
        height: screenDimensions.width <= SCREEN_LIMITS.tablet? '45%' : 'auto',
        textAlign: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'left'  as any,
        display: 'flex',
        flexDirection: 'column'  as any,
        alignItems: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'flex-start',
    },
    newProduct: {
        fontSize: screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? '10px'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '12px' : '14px',
        lineHeight: '19px',
        letterSpacing: '10px',
        textTransform: 'uppercase'  as any,
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
    }
}}