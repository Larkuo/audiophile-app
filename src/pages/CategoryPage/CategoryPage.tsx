import React from 'react';
import { styles } from './CategoryPage.styles';
import { AppFooter, AppHeader } from '../../components';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useParams } from 'react-router-dom';
import { CategoryItemProps, useCategoryDetails } from '../../hooks/useCategoryDetails';


export function CategoryPage() {
    const { pageCategory } = useParams();

    const {screenDimensions} = useScreenDimensions();
    const {
        categoryItems
    } = useCategoryDetails(pageCategory || 'headphones');

    return (
        <div className='category-page' style={styles(screenDimensions).categoryPage}>
        <div className='category-page-header' style={styles(screenDimensions).pageHeader}>
            <AppHeader />
            <h1 className='category-page-title' style={styles(screenDimensions).pageTitle}>{pageCategory}</h1>
        </div>
        <div>
            {categoryItems.map((item: CategoryItemProps, index: number) => 
                <div key={index}>
                    <span>Name: {item.name} | Price: {item.price}</span>
                    <span></span>
                </div>
            )}
        </div>
        <AppFooter />
        </div>
    );
}
