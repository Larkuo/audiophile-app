import React from 'react';
import { styles } from './CategoryItemCard.styles';
import { AppImageProps } from '../../hooks/useCategoryDetails';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { SCREEN_LIMITS } from '../../theme/Theme';
import { AppButton } from '..';
import { cardAssets } from '../CategoriesCardGroup/CategoriesCardAssests';

interface CategoryItemCardProps{
    id: number;
    name: string;
    slug: string;
    description: string;
    isNew: boolean;
    image: AppImageProps;
    imageLeft: boolean;
}

export function CategoryItemCard({
    id,
    name,
    slug,
    description,
    isNew,
    image,
    imageLeft,
}:CategoryItemCardProps) {
    const { screenDimensions } = useScreenDimensions();
    const imageSrc = slug.includes('mark')
        ? cardAssets(screenDimensions)[String(slug.split('-').join('_'))]
        : cardAssets(screenDimensions)[slug.replace('-', '_')];
    
    return (
        <div 
            className='category-item-card' 
            style={imageLeft
                ? styles(screenDimensions).categoryItemCard
                : styles(screenDimensions).altCategoryItemCard
            }
        >
            <img 
                alt={`${name} product image`} 
                src={imageSrc} 
                className='item-image'
                style={styles(screenDimensions).itemImage}
            />
            <div className='item-info' style={styles(screenDimensions).itemInfo}>
                {isNew &&
                    <span style={styles(screenDimensions).newProduct}>new product</span>
                }
                <span className='item-name' style={styles(screenDimensions).productName}>{name}</span>
                <span className='item-description' style={styles(screenDimensions).productDescription}>{description}</span>
                <AppButton 
                    label='see product' 
                    mode='primary' 
                    onClick={() => {}}
                />
            </div>
        </div>
    );
}
