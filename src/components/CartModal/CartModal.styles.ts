import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    cartModal: {
        width: '100%',
        height: '90vh',
        backgroundColor: colors.transparentBlack,
        position: 'absolute' as any,
        zIndex: '5',
        top: '10vh',
        left: '0px',
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'flex-start',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.mobile? 'center' : 'flex-end',
    },
    cartModalBody: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '90%'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet? '65%'
                    : '32%',
        maxHeight: '80vh',
        overflowY: 'scroll' as any,
        backgroundColor: colors.white,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '2.5%',
        paddingRight: '2.5%',
        marginTop: '2.5%',
        marginRight: screenDimensions.width <= SCREEN_LIMITS.mobile? '0%' 
                        :screenDimensions.width <= SCREEN_LIMITS.tablet? '5%' : '10%',

    },
    cartHeader: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '10px',
    },
    cartTitle: {
        ...textStyles.h6,
    },
    removeAllButton: {
        fontSize: '15px',
        lineHeight: '25px',
        textDecoration: 'underline',
        textTransform: 'capitalize' as any,
        backgroundColor: 'transparent',
        color: colors.borderGray,
        outline: 'none',
        border: 'none',
    },
    cartItemCard: {
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
    cartFooter: {
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '10px',
    },
    cartTotalLabel: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
    cartTotalValue: {
        fontSize: '18px',
        color: colors.black,
    },
    checkoutButton: {
        height: '40px', 
        width: '100%', 
        marginTop: '20px',
    },
}}