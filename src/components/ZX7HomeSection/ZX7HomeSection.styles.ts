import { ScreenDimensionsProps } from "../../hooks/useScreenDimensions";
import { SCREEN_LIMITS, colors, textStyles } from "../../theme/Theme";

import zx7_desktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import zx7_tablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import zx7_mobile from '../../assets/home/mobile/image-speaker-zx7.jpg';

const sectionAssets = (screenDimensions: ScreenDimensionsProps) => {return{
    zx7Background: screenDimensions.width <= SCREEN_LIMITS.mobile
        ? zx7_mobile
        : screenDimensions.width <= SCREEN_LIMITS.tablet
        ? zx7_tablet 
        : zx7_desktop,
}}

const productNameStyle = (screenDimensions: ScreenDimensionsProps) => screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? textStyles.h5
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? textStyles.h4
                    : textStyles.h3;

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    zx7SpeakerSection: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '90%' : '80%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? '35vh'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '35vh' 
                    : '42vh',
        borderRadius: '5px',
        backgroundImage: `url('${sectionAssets(screenDimensions).zx7Background}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundSize: '100% auto',
        backgroundColor: colors.hoverBlack,
        marginBottom: '5vh',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column'  as any,
        justifyContent: 'center',
        alignItems: 'right',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    zx7Title: {
        ...productNameStyle(screenDimensions),
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '80%' : '100%',
    },
    seeProductButton: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile
        ? '50%'
        : screenDimensions.width <= SCREEN_LIMITS.tablet
        ? '30%' : '20%', 
    }
}}