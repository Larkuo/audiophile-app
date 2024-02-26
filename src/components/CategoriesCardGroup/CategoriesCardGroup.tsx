import React from 'react';
import { styles } from './CategoriesCardGroup.styles';
import { CATEGORIES_CARD_DATA, CategoriesCardProps } from './CategoriesData';
import { AppButton } from '..';
import { useNavigate } from 'react-router-dom';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

export function CategoriesCardGroup() {
    const navigate = useNavigate();
    const {screenDimensions} = useScreenDimensions();

    function gotoCategoryPage(category: string){
        navigate(`/categories/${category}`);
    }
    
    return (
        <div className='categories-card-group' style={styles(screenDimensions).categoriesCardGroup}>
            {CATEGORIES_CARD_DATA.map((card: CategoriesCardProps, i: number) => 
                <div 
                    key={card.key} 
                    className='category-card' 
                    style={styles(screenDimensions).categoryCard}
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
                            onClick={() => gotoCategoryPage(card.label)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
