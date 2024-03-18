import { useNavigate } from "react-router-dom";
import { 
    AppButton, 
    AppFooter, 
    AppHeader, 
    CartItem 
} from "../../components";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CheckoutPage.styles";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useHover } from "../../hooks/useHover";
import { colors } from "../../theme/Theme";
import {  useCartDetails } from "../../hooks/useCartDetails";

export function CheckoutPage() {
    const navigate = useNavigate();    

    const { screenDimensions } = useScreenDimensions();
    const { goBack } = useAppNavigation(navigate);
    const { hover, setHoverTrue, setHoverFalse } = useHover();
    const { 
        cartItems,
        cartCount, 
        cartTotal,
        cartShipping,
        cartTax,
        cartGrandTotal,
    } = useCartDetails();

    return (
        <div className="checkout-page" style={styles(screenDimensions).checkoutPage}>
            <div className='page-header' style={styles(screenDimensions).pageHeader}>
                <AppHeader bottomBorder={false}/>
            </div>
            <div className='goback-row' style={styles(screenDimensions).goBackRow}>
                <span 
                    className='goback-button'
                    style={{
                        ...styles(screenDimensions).goBackText,
                        color: hover? colors.primary : colors.borderGray,
                    }}
                    onClick={goBack}
                    onMouseEnter={setHoverTrue}
                    onMouseLeave={setHoverFalse}
                >Go Back</span>
            </div>
            <div className="checkout-page-content" style={styles(screenDimensions).checkoutPageContent}>
                <div className="checkout-form" style={styles(screenDimensions).checkoutForm}>
                    form
                </div>
                <div className="checkout-cart" style={styles(screenDimensions).checkoutCart}>
                    <div className="checkout-cart-header" style={styles(screenDimensions).cartHeader}>
                        <h2 className="checkout-cart-title" style={styles(screenDimensions).cartTitle}
                        >SUMMARY</h2>
                    </div>
                    {cartCount > 0 && cartItems.map((cartItem) => 
                        <CartItem 
                            key={cartItem.slug} 
                            cartItem={cartItem} 
                            isCheckout={true}
                        />
                    )}
                    <div className="checkout-cart-footer-row" style={styles(screenDimensions).cartFooterRow}>
                        <span className="checkout-cart-label" style={styles(screenDimensions).checkoutCartLabel}
                        >TOTAL</span>
                        <span className="checkout-cart-value" style={styles(screenDimensions).checkoutCartValue}
                        >$ {cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="checkout-cart-footer-row" style={styles(screenDimensions).cartFooterRow}>
                        <span className="checkout-cart-label" style={styles(screenDimensions).checkoutCartLabel}
                        >SHIPPING</span>
                        <span className="checkout-cart-value" style={styles(screenDimensions).checkoutCartValue}
                        >$ {cartShipping.toLocaleString()}</span>
                    </div>
                    <div className="checkout-cart-footer-row" style={styles(screenDimensions).cartFooterRow}>
                        <span className="checkout-cart-label" style={styles(screenDimensions).checkoutCartLabel}
                        >VAT(INCLUDED)</span>
                        <span className="checkout-cart-value" style={styles(screenDimensions).checkoutCartValue}
                        >$ {cartTax.toFixed(0).toLocaleString()}</span>
                    </div>
                    <div className="checkout-grand-total-row" style={styles(screenDimensions).grandTotalRow}>
                        <span className="checkout-cart-label" style={styles(screenDimensions).checkoutCartLabel}
                        >GRAND TOTAL</span>
                        <span className="checkout-grand-total-value" style={styles(screenDimensions).grandTotalValue}
                        >$ {cartGrandTotal.toLocaleString()}</span>
                    </div>
                    <AppButton 
                        label={'continue & pay'} 
                        mode={'primary'}
                        stylesOverride={styles(screenDimensions).payButton}
                        onClick={() => {}}
                    />
                </div>
            </div>
            <AppFooter />
        </div>
    );
}
