import React from 'react';
import { styles } from './CategoriesCardGroup.styles';
import { CATEGORIES_CARD_DATA, CategoriesCardProps } from './CategoriesData';
import { AppButton } from '..';

export function CategoriesCardGroup() {
    
    return (
        <div className='categories-card-group' style={styles.categoriesCardGroup}>
            {CATEGORIES_CARD_DATA.map((card: CategoriesCardProps, i: number) => 
                <div 
                    key={card.key} 
                    className='category-card' 
                    style={styles.categoryCard}
                >
                    <img 
                        src={card.image} 
                        alt={`${card.label} category image`}
                        style={card.label === 'earphones'
                                ? styles.categoryImage 
                                : {...styles.categoryImage, width: '46.5%'}
                            }  
                    />
                    <div style={styles.categoryUnderCard}>
                        <span className='category-card-name' style={styles.categoryLabel}>{card.label}</span>
                        <AppButton label='shop' mode='arrow' />
                    </div>
                </div>
            )}
        </div>
    );
}
