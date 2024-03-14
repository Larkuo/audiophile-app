import { useNavigate, useParams } from 'react-router-dom';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useProductDetails } from '../../hooks/useProductDetails';
import { styles } from './OtherProductsGroup.styles';
import { ProductDetailsOthersImages } from '../ProductDetailsInfoCard/ProductDetailsInfoCardAssests';
import { AppButton } from '..';
import { useAppNavigation } from '../../hooks/useAppNavigation';

export function OtherProductsGroup() {
    const { productSlug } = useParams();
    const navigate = useNavigate();

    const { screenDimensions } = useScreenDimensions();
    const { productDetails } = useProductDetails(productSlug || '');
    const { gotoProductDetails } = useAppNavigation(navigate);

    return (
        <div className='other-products-group' style={styles(screenDimensions).otherProductsGroup}>
            <h3 className='other-products-title' style={styles(screenDimensions).otherProductsTitle}>YOU MAY LIKE</h3>
            {productDetails && productDetails.others &&
                <div className='other-products-card-group' style={styles(screenDimensions).otherProductsCardGroup}>
                    {productDetails.others.map((otherProduct) => 
                        <div 
                            className='other-product-card' 
                            key={otherProduct.slug}
                            style={styles(screenDimensions).otherProductCard}
                        >
                            <img
                                src={otherProduct.slug.includes('mark')
                                        ? ProductDetailsOthersImages(screenDimensions)[String(otherProduct.slug.split('-').join('_'))]
                                        : ProductDetailsOthersImages(screenDimensions)[otherProduct.slug.replace('-', '_')]
                                    }
                                alt={`other-product-${otherProduct.name}`}
                                style={styles(screenDimensions).otherProductImage}
                            />
                            <span 
                                className='other-product-name'
                                style={styles(screenDimensions).otherProductName}
                            >{otherProduct.name}</span>
                            <AppButton 
                                label='see product' 
                                mode='primary' 
                                stylesOverride={{width: '75%'}}
                                onClick={() => gotoProductDetails(otherProduct.slug)}
                            />
                        </div>
                    )}
                </div>
            }
        </div>
    );
}
