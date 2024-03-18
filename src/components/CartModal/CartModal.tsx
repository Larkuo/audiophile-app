import { 
    AppButton, 
    QuantityInput 
} from "..";
import { CartItemInterface, useCartDetails } from "../../hooks/useCartDetails";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { CartItemAssets } from "./CardAssets";
import { styles } from "./CartModal.styles";

export function CartModal() {
    const { screenDimensions }  = useScreenDimensions();
    const { 
        cartCount, 
        cartTotal, 
        cartItems,
        emptyCart,
        updateCartItem,
    } = useCartDetails();

    function CartItem({cartItem}:{cartItem: CartItemInterface}){ 
        const cartItemImage = cartItem.slug.includes('mark')
                    ? CartItemAssets[String(cartItem.slug.split('-').join('_'))]
                    : CartItemAssets[cartItem.slug.replace('-', '_')];       
        return(
            <div className="cart-item" style={styles(screenDimensions).cartItemCard}>
                <div className="cart-item-info" style={styles(screenDimensions).cartItemInfo}>
                    <img 
                        src={cartItemImage}
                        alt={`cart-item-${cartItem.slug}`}
                        style={styles(screenDimensions).cartItemImage}
                    />
                    <div 
                        className="cart-item-text-container" 
                        style={styles(screenDimensions).cartItemTextContainer}
                    >
                        <span 
                            className="cart-item-name"
                            style={styles(screenDimensions).cartItemName}
                        >{cartItem.name}</span>
                        <span 
                            className="cart-item-price"
                            style={styles(screenDimensions).cartItemPrice}
                        >$ {cartItem.price}</span>
                    </div>
                </div>
                <QuantityInput 
                    value={cartItem.quantity} 
                    onChangeQuantity={(value: number) => 
                        updateCartItem(cartItem.slug, value)
                    } 
                    minQuantity={0}
                    stylesOverride={styles(screenDimensions).cartItemQuantityInput}
                />
            </div>
        );
    }

    return (
        <div className="cart-modal" style={styles(screenDimensions).cartModal}>
            <div className="cart-modal-body" style={styles(screenDimensions).cartModalBody}>
                <div className="cart-modal-header" style={styles(screenDimensions).cartHeader}>
                    <h2 
                        className="cart-title"
                        style={styles(screenDimensions).cartTitle}
                    >CART ({cartCount})</h2>
                    <button 
                        className="remove-all-button"
                        style={styles(screenDimensions).removeAllButton}
                        onClick={emptyCart}
                    >remove all</button>
                </div>
                {cartCount > 0 && cartItems.map((cartItem) => 
                    <CartItem key={cartItem.slug} cartItem={cartItem} />
                )}
                <div className="cart-modal-footer" style={styles(screenDimensions).cartFooter}>
                    <span 
                        className="cart-total-label"
                        style={styles(screenDimensions).cartTotalLabel}
                    >TOTAL</span>
                    <span 
                        className="cart-total-label"
                        style={styles(screenDimensions).cartTotalValue}
                    >$ {cartTotal.toLocaleString()}</span>
                </div>
                <AppButton 
                    label={'checkout'} 
                    mode={'primary'}
                    stylesOverride={styles(screenDimensions).checkoutButton}
                />
            </div>
        </div>
    );
}
