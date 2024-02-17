import HeroBackground_Desktop from '../../assets/home/desktop/image-hero.jpg';
import HeroBackground_Tablet from '../../assets/home/tablet/image-header.jpg';
import HeroBackground_Mobile from '../../assets/home/mobile/image-header.jpg';
import { SCREEN_LIMITS, SCREEN_WIDTH, colors, textStyles } from '../../theme/Theme';


const PageAssets = {
    hero_image: SCREEN_WIDTH <= SCREEN_LIMITS.mobile
        ? HeroBackground_Mobile
        : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
        ? HeroBackground_Tablet 
        : HeroBackground_Desktop,
}

export const styles = {
    homePage: {
        width: '100%',
    },
    headerHeroSection: {
        width: '100%',
        height: SCREEN_WIDTH <= SCREEN_LIMITS.mobile? '75vh' : '90vh',
        backgroundImage: `url('${PageAssets.hero_image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '100% 100%',
        boxSizing: 'border-box',
        paddingLeft: SCREEN_WIDTH > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: SCREEN_WIDTH > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingBottom: SCREEN_WIDTH > SCREEN_LIMITS.tablet? '30px' : '15px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    }, 
    heroSection: {
        width: SCREEN_WIDTH <= SCREEN_LIMITS.mobile
                ? '100%'
                : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
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
        alignItems: SCREEN_WIDTH > SCREEN_LIMITS.tablet? 'flex-start':'center',
        textAlign: SCREEN_WIDTH > SCREEN_LIMITS.tablet? 'left':'center',
        alignSelf: SCREEN_WIDTH > SCREEN_LIMITS.tablet? 'flex-start': 'center',
    },
    newProduct: {
        fontSize: SCREEN_WIDTH <= SCREEN_LIMITS.mobile
                    ? '10px'
                    : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
                    ? '12px' : '14px',
        lineHeight: '19px',
        letterSpacing: '10px',
        textTransform: 'uppercase',
    }, 
    productName: SCREEN_WIDTH <= SCREEN_LIMITS.mobile
                    ? textStyles.h3
                    : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
                    ? textStyles.h2 
                    : textStyles.h1, 
    heroDescription: {
        fontSize: SCREEN_WIDTH <= SCREEN_LIMITS.mobile
                    ? '11px'
                    : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
                    ? '13px' : '15px',
        lineHeight: '25px',
        fontWeight: '700',
        textTransform: 'capitalise',
        width: '70%'
    },
    seeProductButton: {
        marginTop: '10%',
    }
};