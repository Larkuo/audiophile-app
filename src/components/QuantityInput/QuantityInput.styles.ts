import { colors } from "../../theme/Theme";

export const styles= {
    inputContainer: {
        width: '40%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row' as any,
        alignItems: 'center',
        justifyContent: 'space-between',
        // boxSizing: 'border-box',
        backgroundColor: colors.midGray,
        paddingTop: '7.5px',
        paddingBottom: '7.5px',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginRight: '5%',
        fontSize: '12px',
        fontWeight: 'bold',
        color: colors.black,
    },
    iconSection: {
        width: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid black',
        MozUserSelect: 'none' as any,
        WebkitUserSelect: 'none' as any,
        msUserSelect: 'none' as any,
    },
    icon: {

    },
    input: {
        outline: 'none',
        border: 'none',
        backgroundColor: colors.midGray,
        width: '70%',
        textAlign: 'center' as any,
    },
};