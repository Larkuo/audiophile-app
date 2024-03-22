import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./RadioButtonGroup.styles";
import { RadioButton } from "..";
import { SCREEN_LIMITS } from "../../theme/Theme";

interface RadioButtonGroupProps{
    width?: number;
    groupLabel: string;
    selectedButton: string;
    radioOptions?: {label: string, value: string}[];
    onChangeValue?: (value: string) => void;
}

export function RadioButtonGroup({
    width = 45,
    groupLabel,
    selectedButton,
    radioOptions,
    onChangeValue,
}:RadioButtonGroupProps){
    const { screenDimensions } = useScreenDimensions();

    return (
        <div className="radio-button-group-container" style={styles(screenDimensions).radioGroupContainer}>
            <span className="radio-group-label"  style={styles(screenDimensions).groupLabel}
            >{groupLabel}</span>
            {radioOptions && radioOptions.length > 0 &&
                <div className="radio-button-group" 
                    style={{
                        ...styles(screenDimensions).radioButtonGroup,
                        width: `${screenDimensions.width <= SCREEN_LIMITS.mobile? 100 : width}%`
                    }}
                >
                    {radioOptions.map((radioOption) => 
                        <RadioButton
                            key={radioOption.value}
                            checked={selectedButton === radioOption.value}
                            label={radioOption.label}
                            value={radioOption.value}
                            onChangeValue={(value: string) => onChangeValue && onChangeValue(value)}
                        />
                    )}
                </div>
            }
        </div>
    );
}
