import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../hooks/useProductDetails';
import { styles } from './ProductDetailsPage.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { AppFooter, AppHeader, CategoriesCardGroup } from '../../components';

export function ProductDetailsPage() {
    const { productSlug } = useParams();
    const { screenDimensions } = useScreenDimensions();
    const { productDetails } = useProductDetails(productSlug || '');

    console.log({productDetails});

    return (
        <div className='product-details-page' style={styles(screenDimensions).productPage}>
            <div className='page-header' style={styles(screenDimensions).pageHeader}>
                <AppHeader bottomBorder={false}/>
            </div>
            ProductDetailsPage - {productDetails.name}

            <CategoriesCardGroup />
            <AppFooter />
        </div>
    );
}
