import { useNavigate } from "react-router-dom";
import {AppButton, CartItem} from "..";
import { useCartDetails } from "../../hooks/useCartDetails";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CartModal.styles";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export function CartModal() {
    const navigate = useNavigate();

    const { gotoCheckout } = useAppNavigation(navigate);
    const { screenDimensions }  = useScreenDimensions();
    const { 
        cartCount, 
        cartTotal, 
        cartItems,
        emptyCart,
    } = useCartDetails();

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
                    onClick={gotoCheckout}
                />
            </div>
        </div>
    );
}
