import { colors } from "../../theme/Theme";

export const styles = {
    invoiceItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row' as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px',
    },
    itemLeftContainer: {
        display: 'flex',
        flexDirection: 'row' as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemImage: {
        width: '50px',
        height: '50px',
        marginRight: '10px',
    },
    itemTextContainer: {
        display: 'flex',
        flexDirection: 'column' as any,
    },
    itemName: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.black,
    },
    itemPrice: {
        fontSize: '14px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
    itemQuantity: {
        fontSize: '15px',
        lineHeight: '25px',
        color: colors.borderGray,
    },
}