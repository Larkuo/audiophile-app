import { CartItemInterface } from "../../hooks/useCartDetails";
import { CartItemAssets } from "../CartItem/CardAssets";
import { styles } from "./CheckoutInvoiceItem.styles";


export function CheckoutInvoiceItem({invoiceItem}:{invoiceItem: CartItemInterface}){
    const invoiceItemImage = invoiceItem.slug.includes('mark')
            ? CartItemAssets[String(invoiceItem.slug.split('-').join('_'))]
            : CartItemAssets[invoiceItem.slug.replace('-', '_')]; 
            
    return(
        <div className="checkout-list-item" style={styles.invoiceItem}>
            <div className="item-left-container" style={styles.itemLeftContainer}>
                <img 
                    src={invoiceItemImage} 
                    alt={`${invoiceItem.slug}-product-image`} 
                    style={styles.itemImage}
                />
                <div className="item-text-container" style={styles.itemTextContainer}>
                    <span className="item-name" style={styles.itemName}
                        >{invoiceItem.name}</span>
                    <span className="item-price" style={styles.itemPrice}
                        >$ {invoiceItem.price.toLocaleString()}</span>
                </div>
            </div>
            <span className="item-quantity" style={styles.itemQuantity}
                >x{invoiceItem.quantity}</span>
        </div>
    );
}