import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors } from "../../theme/Theme";

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
        paddingTop: '2.5%',
        paddingRight: screenDimensions.width <= SCREEN_LIMITS.mobile? '0%' 
                        :screenDimensions.width <= SCREEN_LIMITS.tablet? '5%' : '10%',
    },
    cartModalBody: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '90%'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet? '60%'
                    : '30%',
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
    },
}}