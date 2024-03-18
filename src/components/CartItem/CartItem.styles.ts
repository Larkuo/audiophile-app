import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors } from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps, isCheckout: boolean) => {return{
    cartItemCard: isCheckout? {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '90%',
        marginBottom: '20px',
    } : {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
    },
    cartItemInfo: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '70%',
    },
    cartItemImage: {
        width: '65px',
        height: '65px',
        borderRadius: '5px',
        marginRight: '10px',
    },
    cartItemTextContainer: {
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cartItemName: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.black,
    },
    cartItemPrice: {
        fontSize: '14px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
    cartItemQuantityInput: {
        width: '23%',
        height: '30px',
        margin: '0px',
    },
}}