import { colors } from "../../theme/Theme";

export const styles = {
    radioButtonContainer:{
        width: '100%',
        borderRadius: '5px',
        height: '56px',
        boxSizing: 'border-box' as any,
        color: colors.black,
        display: 'flex',
        flexDirection: 'row' as any,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '20px',
        paddingLeft: '5%',
    },
    radioButtonLabel: {
        fontSize: '14px',
        letterSpacing: '-0.25px',
        fontWeight: 'bold',
        marginLeft: '3%',
    },
};