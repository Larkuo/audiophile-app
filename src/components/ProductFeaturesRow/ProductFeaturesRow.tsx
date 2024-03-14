import { useParams } from "react-router-dom";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./ProductFeaturesRow.styles";
import { useProductDetails } from "../../hooks/useProductDetails";

export function ProductFeaturesRow() {
    const { productSlug } = useParams();

    const { screenDimensions } = useScreenDimensions();
    const { productDetails } = useProductDetails(productSlug || '');

    return (
        <div className="product-features-row" style={styles(screenDimensions).productFeaturesRow}>
            <div className="feature-section product-description" style={styles(screenDimensions).featuresSection}>
                <h3 
                    className="feature-section-title" 
                    style={styles(screenDimensions).featureSectionTitle}
                >FEATURES</h3>
                {productDetails && productDetails.features && productDetails.features.split('\n\n').map((featureText, index) =>
                    <div
                        key={index}
                        className="product-features"
                        style={styles(screenDimensions).productFeature}
                    >
                        <span>{featureText}</span>
                    </div>
                )}
            </div>
            <div className="feature-section product-box-items" style={styles(screenDimensions).inBoxSection}>
                <h3 
                    className="feature-section-title" 
                    style={styles(screenDimensions).featureSectionTitle}
                >IN THE box</h3>
                <div className="box-item-list" style={styles(screenDimensions).boxItemList}>
                    {productDetails && productDetails.includes && productDetails.includes.map((value, index) => 
                        <div 
                            className="product-boxitem-row" 
                            style={styles(screenDimensions).boxItemRow}
                            key={`${index} - ${value.item}`}
                        >
                            <span 
                                className="product-boxitem-quantity"
                                style={styles(screenDimensions).boxItemQuantity}
                            >{value.quantity}x</span>
                            <span 
                                className="product-boxitem"
                                style={styles(screenDimensions).boxItem}
                            >{value.item}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
