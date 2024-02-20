import HeroBackground_Desktop from '../../assets/home/desktop/image-hero.jpg';
import HeroBackground_Tablet from '../../assets/home/tablet/image-header.jpg';
import HeroBackground_Mobile from '../../assets/home/mobile/image-header.jpg';
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles
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
    headerHeroSection: {
        width: '100%',
        height: screenDimensions.width <= SCREEN_LIMITS.mobile? '75vh' : '90vh',
        backgroundImage: `url('${PageAssets(screenDimensions).heroImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '100% 100%',
        boxSizing: 'border-box',
        paddingLeft: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingBottom: screenDimensions.width > SCREEN_LIMITS.tablet? '30px' : '15px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    }, 
    heroSection: {
        width: screenDimensions.width <= SCREEN_LIMITS.mobile
                ? '100%'
                : screenDimensions.width <= SCREEN_LIMITS.tablet
                ? '70%' : '35%',
        height: '90%',
        backgroundColor: colors.transparent,
        boxSizing: 'border-box',
        paddingTop: '10%',
        paddingBottom: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        color: colors.white,
        alignItems: screenDimensions.width > SCREEN_LIMITS.tablet? 'flex-start':'center',
        textAlign: screenDimensions.width > SCREEN_LIMITS.tablet? 'left':'center',
        alignSelf: screenDimensions.width > SCREEN_LIMITS.tablet? 'flex-start': 'center',
    },
    newProduct: {
        fontSize: screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? '10px'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '12px' : '14px',
        lineHeight: '19px',
        letterSpacing: '10px',
        textTransform: 'uppercase',
    }, 
    productName: screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? textStyles.h3
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? textStyles.h2 
                    : textStyles.h1, 
    heroDescription: {
        fontSize: screenDimensions.width <= SCREEN_LIMITS.mobile
                    ? '11px'
                    : screenDimensions.width <= SCREEN_LIMITS.tablet
                    ? '13px' : '15px',
        lineHeight: '25px',
        fontWeight: '700',
        textTransform: 'capitalise',
        width: '70%'
    },
    heroSeeProductButton: {
        marginTop: '10%',
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