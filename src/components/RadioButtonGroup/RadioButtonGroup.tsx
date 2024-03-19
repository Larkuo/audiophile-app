import { useState } from "react";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./RadioButtonGroup.styles";
import { RadioButton } from "..";

interface RadioButtonGroupProps{
    width?: number;
    groupLabel: string;
    inititalValue?: string;
    radioOptions?: {label: string, value: string}[];
    onChangeValue?: (value: string) => void;
}

export function RadioButtonGroup({
    width = 45,
    groupLabel,
    inititalValue = '',
    radioOptions,
    onChangeValue,
}:RadioButtonGroupProps){
    const [selected, setSelected] = useState(inititalValue);
    const { screenDimensions } = useScreenDimensions();

    return (
        <div className="radio-button-group-container" style={styles(screenDimensions).radioGroupContainer}>
            <span className="radio-group-label"  style={styles(screenDimensions).groupLabel}
            >{groupLabel}</span>
            {radioOptions && radioOptions.length > 0 &&
                <div className="radio-button-group" 
                    style={{
                        ...styles(screenDimensions).radioButtonGroup,
                        width: `${width}%`
                    }}
                >
                    {radioOptions.map((radioOption) => 
                        <RadioButton
                            key={radioOption.value}
                            checked={selected === radioOption.value}
                            label={radioOption.label}
                            value={radioOption.value}
                            onChangeValue={(value: string) => {
                                onChangeValue && onChangeValue(value);
                                setSelected(value);
                            }}
                        />
                    )}
                </div>
            }
        </div>
    );
}
