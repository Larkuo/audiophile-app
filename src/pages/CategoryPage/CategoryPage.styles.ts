import { ScreenDimensionsProps } from '../../hooks/useScreenDimensions';
import { 
    SCREEN_LIMITS, 
    colors, 
    textStyles 
} from '../../theme/Theme';

const titleStyles = (screenDimensions: ScreenDimensionsProps) => {return( 
    screenDimensions.width <= SCREEN_LIMITS.mobile
                        ? textStyles.h3
                        : screenDimensions.width <= SCREEN_LIMITS.tablet
                        ? textStyles.h2 
                        : textStyles.h1
)};

export const styles = (screenDimensions: ScreenDimensionsProps) => {return{
    categoryPage: {
        width: '100%',
        boxSizing: 'border-box',
    },
    pageHeader: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.black,
        paddingLeft: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingRight: screenDimensions.width > SCREEN_LIMITS.tablet? '10%':'5%',
        paddingBottom: '2.5%',
        color: colors.white,
        boxSizing: 'border-box',
    },
    pageTitle: {
        ...titleStyles(screenDimensions),
        textAlign: 'center',
        paddingTop: '2.5%',
    }
}};