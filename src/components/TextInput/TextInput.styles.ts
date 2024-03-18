import { colors } from "../../theme/Theme";

export const styles = {    
    textInputContainer: {
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: '20px',
    },
    inputLabelContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'  as any,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '5px',
    },
    inputLabel: {
        fontSize: '12px',
        letterSpacing: '-0.21px',
        fontWeight: 'bold',
    },
    errorText: {},
    textInput: {
        width: '100%',
        paddingLeft: '2%',
        borderRadius: '5px',
        height: '56px',
        fontSize: '14px',
        letterSpacing: '-0.25px',
        boxSizing: 'border-box' as any,
        color: colors.black,
    },
};