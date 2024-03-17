import { useCartDetails } from "../../hooks/useCartDetails";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CartModal.styles";

export function CartModal() {
    const { screenDimensions }  = useScreenDimensions();
    const { 
        cartCount, 
        cartTotal, 
        cartItems 
    } = useCartDetails();

    return (
        <div className="cart-modal" style={styles(screenDimensions).cartModal}>
            <div className="cart-modal-body" style={styles(screenDimensions).cartModalBody}>
                {cartCount > 0 && cartItems.map((cartItem) => 
                    <div className="cart-item" key={cartItem.slug}>
                        <span>Name: {cartItem.name}</span>
                        <span>Quantity: {cartItem.quantity}</span>
                        <span>Price: {cartItem.price}</span>
                        <span>Sub-total: {cartItem.quantity * cartItem.price}</span>
                    </div>
                )}
                <div>{cartTotal}</div>
            </div>
        </div>
    );
}
