import { QuantityInput } from "..";
import { CartItemInterface, useCartDetails } from "../../hooks/useCartDetails";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { CartItemAssets } from "./CardAssets";
import { styles } from "./CartItem.styles";

interface CartItemProps {
    cartItem: CartItemInterface;
    isCheckout?: boolean;
}

export function CartItem({
    cartItem,
    isCheckout = false,
}:CartItemProps){ 
    const { updateCartItem } = useCartDetails();
    const { screenDimensions } = useScreenDimensions();

    const cartItemImage = cartItem.slug.includes('mark')
                ? CartItemAssets[String(cartItem.slug.split('-').join('_'))]
                : CartItemAssets[cartItem.slug.replace('-', '_')];  
         
    return(
        <div className="cart-item" style={styles(screenDimensions, isCheckout).cartItemCard}>
            <div className="cart-item-info" style={styles(screenDimensions, isCheckout).cartItemInfo}>
                <img 
                    src={cartItemImage}
                    alt={`cart-item-${cartItem.slug}`}
                    style={styles(screenDimensions, isCheckout).cartItemImage}
                />
                <div 
                    className="cart-item-text-container" 
                    style={styles(screenDimensions, isCheckout).cartItemTextContainer}
                >
                    <span 
                        className="cart-item-name"
                        style={styles(screenDimensions, isCheckout).cartItemName}
                    >{cartItem.name}</span>
                    <span 
                        className="cart-item-price"
                        style={styles(screenDimensions, isCheckout).cartItemPrice}
                    >$ {cartItem.price}</span>
                </div>
            </div>
            {isCheckout?
                <span className="cart-item-quantity" style={styles(screenDimensions, isCheckout).cartItemPrice}
                >x{cartItem.quantity}</span>
            :
                <QuantityInput 
                    value={cartItem.quantity} 
                    onChangeQuantity={(value: number) => 
                        updateCartItem(cartItem.slug, value)
                    } 
                    minQuantity={0}
                    stylesOverride={styles(screenDimensions, isCheckout).cartItemQuantityInput}
                />
            }
        </div>
    );
}