import { useParams } from "react-router-dom";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./AdditionalProductImages.styles";
import { ProductDetailsAssets } from "../ProductDetailsInfoCard/ProductDetailsInfoCardAssests";

export function AdditionalProductImages() {
    const { productSlug } = useParams();

    const { screenDimensions } = useScreenDimensions();

    const rowAssets = productSlug
        ? productSlug.includes('mark')
            ? ProductDetailsAssets(screenDimensions)[String(productSlug.split('-').join('_'))]
            : ProductDetailsAssets(screenDimensions)[productSlug.replace('-', '_')]
        : ProductDetailsAssets(screenDimensions).yx1;
    
    return (
        <div className="additional-product-images" style={styles(screenDimensions).additionalProductImages}>
            <div className="left-contanier" style={styles(screenDimensions).leftContainer}>
                <img 
                    src={rowAssets.gallery.first} 
                    alt={`${productSlug}-additional-first`}
                    style={styles(screenDimensions).leftImage}
                />
                <img 
                    src={rowAssets.gallery.second} 
                    alt={`${productSlug}-additional-second`}
                    style={styles(screenDimensions).leftImage}
                />
            </div>
            <div className="right-contanier" style={styles(screenDimensions).rightContainer}>
                <img 
                    src={rowAssets.gallery.third} 
                    alt={`${productSlug}-additional-third`}
                    style={styles(screenDimensions).rightImage}
                />
            </div>
        </div>
    );
}
