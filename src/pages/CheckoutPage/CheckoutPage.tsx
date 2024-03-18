import { useNavigate } from "react-router-dom";
import { AppFooter, AppHeader } from "../../components";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CheckoutPage.styles";
import { useAppNavigation } from "../../hooks/useAppNavigation";


export function CheckoutPage() {
    const navigate = useNavigate();    

    const { screenDimensions } = useScreenDimensions();
    const { goBack } = useAppNavigation(navigate);

    return (
        <div className="checkout-page" style={styles(screenDimensions).checkoutPage}>
            <div className='page-header' style={styles(screenDimensions).pageHeader}>
                <AppHeader bottomBorder={false}/>
            </div>
            <div className='goback-row' style={styles(screenDimensions).goBackRow}>
                <span 
                    className='goback-button'
                    style={styles(screenDimensions).goBackText}
                    onClick={goBack}
                >Go Back</span>
            </div>
            <div className="checkout-page-content"></div>
            <AppFooter />
        </div>
    );
}
