import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { 
    SCREEN_LIMITS, 
    colors,
    textStyles, 
    // textStyles 
} from "../../theme/Theme";

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    checkoutModal: {
        width: '100%',
        height: '90vh',
        backgroundColor: colors.transparentBlack,
        position: 'absolute' as any,
        zIndex: '5',
        top: '10vh',
        left: '0px',
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutModalBody: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '90%'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet? '75%'
                    : '45%',
        maxHeight: '80vh',
        overflowY: 'scroll' as any,
        backgroundColor: colors.white,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column' as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '3%',
        paddingRight: '3%',
    },
    checkoutModalHeader: {
        width: '100%',
        marginTop: '10px',
    },
    headerIcon: {},
    headerTitle: {
        ...textStyles.h3,
        padding: 0,
        marginTop: '20px',
        marginBottom: '15px',
    },
    headerSubTitle: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
    checkoutInvoice: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as any,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: '30px',
    },
    invoiceList: {
        width: '55%',
        backgroundColor: colors.midGray,
        height: '100%',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
        padding: '5%',
    },
    invoiceListFooter: {
        width: '100%',
        borderTop: `1px solid ${colors.borderGray}`,
        color: colors.borderGray,
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        paddingTop: '10px',
        marginTop: '10px',
    },
    grandTotalContainer: {
        width: '45%',
        backgroundColor: colors.black,
        height: '100%',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        display: 'flex',
        flexDirection: 'column' as any,
        padding: '5%',
    },
    grandTotalLabel: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
    grandTotal: {
        fontSize: '18px',
        color: colors.white,
        fontWeight: '700',
    },
    homeLink: {
        width: '100%',
        outline: 'none',
        border: 'none',
        textDecoration: 'none',
    },
}}