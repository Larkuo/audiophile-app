import { useHover } from "../../hooks/useHover";
import { colors } from "../../theme/Theme";
import { styles } from "./RadioButton.styles";

interface RadioButtonProps{
    checked: boolean;
    label: string;
    value: string;
    onChangeValue?: (value: string) => void;
}

export function RadioButton({
    checked,
    label,
    value,
    onChangeValue,
}:RadioButtonProps){
    const { 
        hover, 
        setHoverTrue, 
        setHoverFalse 
    } = useHover();

    const borderColor = checked || hover? colors.primary : colors.checkoutBackground;
    
    return(
        <label 
            className="radio-button-container"
            onMouseEnter={setHoverTrue}
            onMouseLeave={setHoverFalse}
            style={{
                ...styles.radioButtonContainer,
                border: `2px solid ${borderColor}`,
            }}
        >
            <input 
                type="radio" 
                value={value}
                className="radio-button" 
                checked={checked}
                onChange={(event) => {
                    onChangeValue && onChangeValue(event.target.value);
                }}
                style={{
                    accentColor: checked? colors.primary : colors.checkoutBackground,
                }}
            />
            <span className="radio-button-label" style={styles.radioButtonLabel}>{label}</span>
        </label>
    );
}