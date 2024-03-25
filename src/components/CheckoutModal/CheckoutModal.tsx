import { Link } from "react-router-dom";
import { AppButton, CheckoutInvoiceItem } from "..";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CheckoutModal.styles";
import { useCartDetails } from "../../hooks/useCartDetails";

import CheckIcon from '../../assets/checkout/icon-order-confirmation.svg';
import { useState } from "react";

interface CheckoutModalProps{
    closeModal: () => void;
}

export function CheckoutModal({
    closeModal,
}:CheckoutModalProps) {
    const { screenDimensions } = useScreenDimensions();
    const { 
        cartItems,
        cartCount, 
        cartGrandTotal,
        emptyCart
    } = useCartDetails();

    const [showAll, setShowAll] = useState(false);

    const invoiceItems = showAll? cartItems : [cartItems[0]];

    return (
        <div className="checkout-modal" style={styles(screenDimensions).checkoutModal}>
            <div className="checkout-modal-body" style={styles(screenDimensions).checkoutModalBody}>
                <div className="checkout-modal-header" style={styles(screenDimensions).checkoutModalHeader}>
                    <img 
                        src={CheckIcon} 
                        alt="confirmation-icon" 
                        style={styles(screenDimensions).headerIcon}
                    />
                    <h3 
                        className="checkout-modal-title" 
                        style={styles(screenDimensions).headerTitle}
                    >Thank you <br/>for you order</h3>
                    <span 
                        className="checkout-modal-subtitle"
                        style={styles(screenDimensions).headerSubTitle}
                    >You will receive an email confirmation shortly</span>
                </div>
                <div className="checkout-invoice" style={styles(screenDimensions).checkoutInvoice}>
                    <div className="checkout-list" style={styles(screenDimensions).invoiceList}>
                        {invoiceItems.map((invoiceItem) => 
                            <CheckoutInvoiceItem key={invoiceItem.slug} invoiceItem={invoiceItem}/>
                        )}
                        {cartCount > 1 &&
                            <button 
                                className="invoice-footer"
                                onClick={() => setShowAll(!showAll)}
                                style={styles(screenDimensions).invoiceListFooter}
                            >
                                {showAll? 'View less' : `and ${cartCount-1} other item(s)`}
                            </button>
                        }
                    </div>
                    <div 
                        className="checkout-total-container" 
                        style={{
                            ...styles(screenDimensions).grandTotalContainer,
                            justifyContent: showAll? 'flex-end' : 'center',
                            paddingBottom: showAll? '10%' : '5%',
                        }}>
                        <span className="grand-total-label" style={styles(screenDimensions).grandTotalLabel}
                            >GRAND TOTAL</span>
                        <span className="grand-total-value" style={styles(screenDimensions).grandTotal}
                            >$ {cartGrandTotal.toLocaleString()}</span>
                    </div>
                </div>
                <Link to='/' style={styles(screenDimensions).homeLink} onClick={emptyCart}>
                    <AppButton
                        mode="primary"
                        label="back to home"
                        stylesOverride={{width: '100%'}}
                        onClick={closeModal}
                    />
                </Link>
            </div>
        </div>
    );
}
