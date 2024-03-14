import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, textStyles } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    otherProductsGroup: {
        width: '80%',
        marginTop: '5%',
    },
    otherProductsTitle: {
        ...textStyles.h3,
        textAlign: 'center' as any,
    },
    otherProductsCardGroup: {
        width: '100%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.mobile? 'column' : 'row' as any,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    otherProductCard: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '100%' 
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '32%' 
                : '25%',
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.mobile? '20%' : '0%',
    },
    otherProductImage: {
        width: '95%',
        height: 'auto',
        borderRadius: '5px',
    },
    otherProductName: {
        ...textStyles.h5,
        marginTop: '5%',
        marginBottom: '5%',
    },
}}