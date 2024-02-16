import React from 'react';
import { styles } from './CategoriesCardGroup.styles';
import { CATEGORIES_CARD_DATA, CategoriesCardProps } from './CategoriesData';
import { AppButton } from '..';
import { colors, textStyles } from '../../theme/Theme';

export function CategoriesCardGroup() {
    
    return (
        <div className='categories-card-group' style={styles.categoriesCardGroup}>
            {CATEGORIES_CARD_DATA.map((card: CategoriesCardProps, i: number) => 
                <div key={card.key} className='category-card' style={styles.categoryCard}>
                    <img src={card.image} style={styles.categoryImage}/>
                    <div style={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-end', 
                        alignItems: 'center', 
                        backgroundColor: colors.midGray,
                        width: '100%',
                        paddingBottom: '10px',
                        height: '150px',
                        borderRadius: '5px',
                        boxSizing: 'border-box',
                        alignSelf: 'center',
                    }}>
                        <span className='category-card-name' style={textStyles.h6}>{card.label}</span>
                        <AppButton label='shop' mode='arrow' />
                    </div>
                </div>
            )}
        </div>
    );
}
