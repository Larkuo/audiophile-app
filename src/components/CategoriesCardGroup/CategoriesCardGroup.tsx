import { styles } from './CategoriesCardGroup.styles';
import { CATEGORIES_CARD_DATA, CategoriesCardProps } from './CategoriesData';
import { AppButton } from '..';
import { useNavigate } from 'react-router-dom';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useAppNavigation } from '../../hooks/useAppNavigation';


interface CategoriesCardGroupProps{
    isNav?: boolean;
    closeNav?: () => void;
    groupStylesOverride?: object;
    cardStylesOverride?: object;
}

export function CategoriesCardGroup({
    isNav = false,
    closeNav,
    groupStylesOverride,
    cardStylesOverride,
}:CategoriesCardGroupProps) {
    const navigate = useNavigate();
    const {screenDimensions} = useScreenDimensions();
    const { gotoCategory } = useAppNavigation(navigate);

    function onClickShop(category: string){
        isNav && closeNav && closeNav();
        gotoCategory(category);
    }

    const groupStyles = {
        ...styles(screenDimensions).categoriesCardGroup,
        ...groupStylesOverride,
    }

    const cardStyles = {
        ...styles(screenDimensions).categoryCard,
        ...cardStylesOverride,
    }
    
    return (
        <div className='categories-card-group' style={groupStyles}>
            {CATEGORIES_CARD_DATA.map((card: CategoriesCardProps) => 
                <div 
                    key={card.key} 
                    className='category-card' 
                    style={cardStyles}
                >
                    <img 
                        src={card.image} 
                        className='category-card'
                        alt={`${card.label} category image`}
                        style={card.label === 'earphones'
                                ? styles(screenDimensions).categoryImage 
                                : {...styles(screenDimensions).categoryImage, width: '46.5%'}
                            }  
                    />
                    <div style={styles(screenDimensions).categoryUnderCard} className='category-under-card'>
                        <span className='category-card-name' style={styles(screenDimensions).categoryLabel}>{card.label}</span>
                        <AppButton 
                            label='shop' 
                            mode='arrow' 
                            onClick={() => onClickShop(card.label)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
