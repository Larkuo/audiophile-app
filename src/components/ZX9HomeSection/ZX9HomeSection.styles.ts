import { 
    SCREEN_LIMITS, 
    colors,
    textStyles 
} from '../../theme/Theme';
import PatternCircles from '../../assets/home/desktop/pattern-circles.svg';
import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';


const PageAssets = {
    patternCircles: PatternCircles,
}

const productNameStyle = (screenDimensions: ScreenDimensionsProps) => screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? textStyles.h3
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? textStyles.h2 
                    : textStyles.h1;

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    zx9SpeakerSection: {
        width: screenDimensions.width > SCREEN_LIMITS.tablet? '80%' : '90%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '65vh'
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '75vh'
                : '90vh',
        backgroundColor: colors.primary,
        boxSizing: 'border-box',
        borderRadius: '5px',
        backgroundImage: `url('${PageAssets.patternCircles}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'left',
        backgroundSize: screenDimensions.width <= SCREEN_LIMITS.tablet? '100% auto' : '70% auto',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '85%' : '5%',
        marginBottom: '5vh',
        paddingLeft: '7.5%',
        paddingRight: '7.5%',
        display: 'flex',
        flexDirection: screenDimensions.width <= SCREEN_LIMITS.tablet? 'column' : 'row',
        justifyContent: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'space-between',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'flex-end',
        overflow: 'hidden',
        textAlign: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'left',
    },
    zx9Image: {
        width: 'auto',
        height: screenDimensions.width <= SCREEN_LIMITS.tablet? '30%' : '75%',
        marginBottom: screenDimensions.width <= SCREEN_LIMITS.tablet? '0px' : '-1%',
    },
    zx9Right: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile? '75%'
                : screenDimensions.width <= SCREEN_LIMITS.tablet? '50%'
                : '40%',
        height: screenDimensions.width <= SCREEN_LIMITS.tablet? '60%' : '70%',
        paddingRight: screenDimensions.width <= SCREEN_LIMITS.tablet? '0%' : '10%',
        paddingTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '0px' : '10%',
        boxSizing: 'border-box',
        color: colors.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: screenDimensions.width <= SCREEN_LIMITS.tablet? 'center' : 'flex-start',
        justifyContent: 'flex-start',
    },
    zx9Title: {
        ...productNameStyle(screenDimensions),
        marginBottom: '10%',
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '80%' : '100%',
        marginTop: screenDimensions.width >= SCREEN_LIMITS.desktop? '-10%' : '10%',
    },
    zx9Description: {
        ...textStyles.body,
    },
    seeProductButton: {
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '80%' : '60%', 
        marginTop: screenDimensions.width <= SCREEN_LIMITS.tablet? '20%' : '15%',
    }
}}