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
    minLength?: number;
    maxLength?: number;
    keyBoardType?: string;
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
    minLength,
    maxLength,
    keyBoardType = 'text',
}:TextInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<InputErrorInterface>({
        isError: false,
        message: '',
    });
    const [isFocus, setIsFocus] = useState(false);
    
    const { 
        hover, 
        setHoverTrue, 
        setHoverFalse 
    } = useHover();
    const { screenDimensions } = useScreenDimensions();

    function checkError(value: string){
        let currentError: InputErrorInterface = {} as InputErrorInterface;

        if(value && label.toLowerCase() === 'email'){
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

    const borderColor = error.isError ? colors.error 
            : hover? colors.primary : colors.checkoutBackground;

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
                type={keyBoardType}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                value={inputValue}
                onMouseEnter={setHoverTrue}
                onMouseLeave={setHoverFalse}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                style={{
                    ...styles.textInput,
                    border: isFocus? 'none' : `2px solid ${borderColor}`,
                    outline: isFocus ? `2px solid ${colors.primary}` : 'none',
                }}
                onChange={(event) => {
                    const textValue = event.target.value;
                    const saveValue = keyBoardType && keyBoardType === 'number'? /^\d+$/.test(textValue) : true;
                    if(saveValue || textValue === ''){
                        setInputValue(textValue);
                        onChangeInput && onChangeInput(textValue);
                        checkError(textValue);
                    }
                }}
            />
        </div>
    );
}
