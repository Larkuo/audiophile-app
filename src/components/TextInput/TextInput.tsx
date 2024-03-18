import { useState } from "react";
import { useHover } from "../../hooks/useHover";
import { styles } from "./TextInput.styles";
import { SCREEN_LIMITS, colors } from "../../theme/Theme";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";

interface TextInputProps{
    label: string;
    width: number;
    placeholder?: string;
    onChangeInput?: (value: string) => void;
}

interface InputErrorInterface{
    isError: boolean;
    message: string;
}

export function TextInput({
    label,
    width,
    placeholder,
    onChangeInput,
}:TextInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<InputErrorInterface>({
        isError: false,
        message: '',
    });
    
    const { 
        hover, 
        setHoverTrue, 
        setHoverFalse 
    } = useHover();
    const { screenDimensions } = useScreenDimensions();

    function checkError(value: string){
        let currentError: InputErrorInterface = {} as InputErrorInterface;

        if(label.toLowerCase() === 'email'){
            const emailRegexp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');
            const isValid = emailRegexp.test(value);
            currentError = {
                isError: !isValid,
                message: 'Wrong format',
            }
            !isValid && setError(currentError);
        }else{
            currentError = {
                isError: false,
                message: '',
            };
            setError(currentError);
        }

        console.log(`Current ${label.toLowerCase()} value: `, value);
        console.log(`Current ${label.toLowerCase()} error: `, currentError);
    }

    return (
        <div className="text-input-container" style={{
            ...styles.textInputContainer,
            width: `${screenDimensions.width <= SCREEN_LIMITS.mobile? 100 : width}%`
        }}>
            <div className="input-label-container" style={{
                ...styles.inputLabelContainer,
                color: error.isError? colors.error : colors.black,
            }}>
                <span className="text-input-label" style={styles.inputLabel}>{label}</span>
                {error?.isError &&
                    <span className="text-input-label" style={styles.inputLabel}>{error.message}</span>
                }
            </div>
            <input
                className="text-input"
                style={{
                    ...styles.textInput,
                    border: `2px solid ${error.isError ? colors.error 
                        : hover? colors.primary : colors.checkoutBackground}`
                }}
                placeholder={placeholder}
                value={inputValue}
                onChange={(event) => {
                    const textValue = event.target.value;
                    setInputValue(textValue);
                    onChangeInput && onChangeInput(textValue);
                    checkError(textValue);
                }}
                onMouseEnter={setHoverTrue}
                onMouseLeave={setHoverFalse}
                onFocus={setHoverTrue}
                onBlur={setHoverFalse}
            />
        </div>
    );
}
