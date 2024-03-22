import { useState } from "react";
import { RadioButtonGroup, TextInput } from "..";
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import { styles } from "./CheckoutFormSection.styles";
import CashIcon from "../../assets/checkout/icon-cash-on-delivery.svg";

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
    name,
    title,
    inputRows,
}:CheckoutFormSectionProps) {
    const [paymentMethod, setPaymentMethod] = useState('e-money');

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
                {inputRows.map((inputRow, index) => (name === 'billing' || name === 'shipping') ? (
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
                ) : (
                    <div 
                        className="payment-details-container" 
                        key={'payment-method-row'} 
                        style={styles(screenDimensions).paymentDetailsContainer}
                    >
                        <RadioButtonGroup
                            width={inputRow[0].width}
                            selectedButton={paymentMethod}
                            groupLabel={inputRow[0].label}
                            radioOptions={inputRow[0].radioOptions}
                            onChangeValue={(value: string) => {
                                inputRow[0].onChangeInput && inputRow[0].onChangeInput(value);
                                setPaymentMethod(value);
                            }}
                        />
                        {paymentMethod === 'e-money'?
                            <div className="emoney-row" style={styles(screenDimensions).eMoneyRow}>
                                <TextInput
                                    key={'e-money-number'}
                                    label={'e-Money Number'}
                                    width={45}
                                    placeholder={'238521993'}
                                    keyBoardType={"number"}
                                    maxLength={9}
                                    minLength={9}
                                    onChangeInput={(value: string) => console.log('e-money number: ', value)}
                                />
                                <TextInput
                                    key={'e-money-pin'}
                                    label={'e-Money PIN'}
                                    width={45}
                                    placeholder={'6891'}
                                    keyBoardType={"number"}
                                    maxLength={4}
                                    minLength={4}
                                    onChangeInput={(value: string) => console.log('e-money PIN: ', value)}
                                />
                            </div>
                        :
                            <div className="cash-row" style={styles(screenDimensions).cashRow}>
                                <img 
                                    src={CashIcon} 
                                    alt={"cash-on-delivery-icon"}
                                    style={styles(screenDimensions).cashIcon}
                                />
                                <span className="cash-on-delivery-text" style={styles(screenDimensions).cashText}>
                                    The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                </span>
                            </div>
                        }
                    </div>
                )
                )}
            </div>
        </div>
    );
}
