import { styles } from './QuantityInput.styles';

interface QuantityInputProps{
    value: number;
    onChangeQuantity: (value: number) => void;
    minQuantity?: number;
    stylesOverride?: object;
}

export function QuantityInput({
    value,
    onChangeQuantity,
    minQuantity = 1,
    stylesOverride,
}: QuantityInputProps) {

    function increase(){
        onChangeQuantity(value + 1);
    }

    function decrease(){
        if(value > minQuantity){
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
                min={String(minQuantity)}
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
