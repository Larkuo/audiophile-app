import { styles } from './QuantityInput.styles';

interface QuantityInputProps{
    value: number;
    onChangeQuantity: (value: number) => void;
    stylesOverride?: object,
}

export function QuantityInput({
    value,
    stylesOverride,
    onChangeQuantity,
}: QuantityInputProps) {

    function increase(){
        onChangeQuantity(value + 1);
    }

    function decrease(){
        if(value > 1){
            onChangeQuantity(value - 1);
        }
    }

    const containerStyles = {
        ...styles.inputContainer,
        ...stylesOverride,
    }

    return (
        <div className='quantity-input-container' style={containerStyles}>
            <div 
                className='quantity-icon-section' 
                style={styles.iconSection}
                onClick={decrease}
            >-</div>
            <input
                type='number'
                min='1'
                value={value}
                onChange={(event) => {
                    onChangeQuantity && onChangeQuantity(Number(event.target.value));
                }}
                style={styles.input}
            />
            <div 
                className='quantity-icon-section' 
                style={styles.iconSection}
                onClick={increase}
            >+</div>
        </div>
    );
}
