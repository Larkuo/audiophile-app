import HeroBackground_Desktop from '../../assets/home/desktop/image-hero.jpg';
import HeroBackground_Tablet from '../../assets/home/tablet/image-header.jpg';
import HeroBackground_Mobile from '../../assets/home/mobile/image-header.jpg';
import { 
    SCREEN_LIMITS, 
    colors 
} from '../../theme/Theme';
import PatternCircles from '../../assets/home/desktop/pattern-circles.svg';
import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';


const PageAssets = (screenDimensions: ScreenDimensionsProps) => {return{
    heroImage: screenDimensions.width <= SCREEN_LIMITS.mobile
        ? HeroBackground_Mobile
        : screenDimensions.width <= SCREEN_LIMITS.tablet
        ? HeroBackground_Tablet 
        : HeroBackground_Desktop,
    patternCircles: PatternCircles,
}}

export const styles = (screenDimensions: ScreenDimensionsProps) => {return {
    homePage: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    zx9SpeakerSection: {
        width: screenDimensions.width > SCREEN_LIMITS.tablet? '80%' : '90%',
        height: screenDimensions.width > SCREEN_LIMITS.tablet? '80vh' : '70vh',
        backgroundColor: colors.primary,
        boxSizing: 'border-box',
        borderRadius: '5px',
        backgroundImage: `url('${PageAssets(screenDimensions).patternCircles}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: '70% auto',
        marginTop: screenDimensions.width <= SCREEN_LIMITS.mobile? '95%' : '5%',
        marginBottom: '5%',
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
        width: screenDimensions.width <= SCREEN_LIMITS.tablet? '100%' : '40%',
        height: screenDimensions.width <= SCREEN_LIMITS.tablet? '60%' : '70%',
        paddingRight: '10%',
        boxSizing: 'border-box',
        color: colors.white,
    }
}}