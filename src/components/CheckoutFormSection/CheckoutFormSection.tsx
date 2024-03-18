import { TextInput } from "..";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CheckoutFormSection.styles";

export interface FormInputProps{
    inputType: 'text' | 'radio';
    label: string;
    width: number;
    placeholder?: string;
    radioOptions?: {label: string, value: string}[];
    onChangeInput?: (value: string) => void;
}

export interface CheckoutFormSectionProps{
    name: 'billing' | 'shipping' | 'payment';
    title: string;
    inputRows: FormInputProps[][];
}
export function CheckoutFormSection({
    // name,
    title,
    inputRows,
}:CheckoutFormSectionProps) {
    const { screenDimensions } = useScreenDimensions();

    return (
        <div className="checkout-form-section" style={styles(screenDimensions).checkoutFormSection}>
            <h6 className="section-title" style={styles(screenDimensions).sectionTitle}>
                {title}
            </h6>
            <div 
                className="section-input-container"
                style={styles(screenDimensions).sectionInputContainer}
            >
                {inputRows.map((inputRow, index) => 
                    <div 
                        className="section-input-row" 
                        style={styles(screenDimensions).sectionInputRow}
                        key={index}
                    >
                        {inputRow.map((sectionInput) => 
                            sectionInput.inputType === 'text' && 
                                <TextInput
                                    key={sectionInput.label}
                                    label={sectionInput.label}
                                    width={sectionInput.width}
                                    placeholder={sectionInput.placeholder}
                                    onChangeInput={sectionInput.onChangeInput}
                                />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
