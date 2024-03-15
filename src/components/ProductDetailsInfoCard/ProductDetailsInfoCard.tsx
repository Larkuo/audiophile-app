import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { ProductDetailsAssets } from './ProductDetailsInfoCardAssests';
import { useProductDetails } from '../../hooks/useProductDetails';
import { styles } from './ProductDetailsInfoCard.styles';
import { AppButton } from '../AppButton/AppButton';
import { QuantityInput } from '..';
import { useCartDetails } from '../../hooks/useCartDetails';

export function ProductDetailsInfoCard({
    cartQuantity,
    setCartQuantity,
}:{
    cartQuantity: number,
    setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { productSlug } = useParams();
    const navigate = useNavigate();
    
    const {} = useAppNavigation(navigate);
    const { screenDimensions } = useScreenDimensions();
    const { productDetails } = useProductDetails(productSlug || '');
    const {addCartItem} = useCartDetails();

    const cardAssets = productSlug
        ? productSlug.includes('mark')
            ? ProductDetailsAssets(screenDimensions)[String(productSlug.split('-').join('_'))]
            : ProductDetailsAssets(screenDimensions)[productSlug.replace('-', '_')]
        : ProductDetailsAssets(screenDimensions).yx1;

    return (
        <div className='product-details-info-card' style={styles(screenDimensions).productDetailsInfoCard}>
            <img
                src={cardAssets.image}
                className='product-details-info-image'
                alt={`${productDetails.slug} product image`}
                style={styles(screenDimensions).productImage}
            />
            <div className='product-info' style={styles(screenDimensions).productInfo}>
                {productDetails.new &&
                    <span style={styles(screenDimensions).newProduct}>new product</span>
                }
                <span 
                    className='product-name' 
                    style={styles(screenDimensions).productName}
                >{productDetails.name}</span>
                <span 
                    className='product-description' 
                    style={styles(screenDimensions).productDescription}
                >{productDetails.description}</span>
                <span className='product-price'>$ {productDetails.price && productDetails.price.toLocaleString('en-US')}</span>
                <div className='add-to-cart-row' style={styles(screenDimensions).addToCartRow}>
                    <QuantityInput
                        value={cartQuantity}
                        onChangeQuantity={(value: number) => setCartQuantity(value)}
                    />
                    <AppButton 
                        label='add to cart' 
                        mode='primary' 
                        stylesOverride={{width: '55%', height: '100%'}}
                        onClick={() => addCartItem({
                            slug: productDetails.slug,
                            name: productDetails.name,
                            price: productDetails.price,
                            quantity: cartQuantity,
                        })}
                    />
                </div>
            </div>
        </div>
    );
}
