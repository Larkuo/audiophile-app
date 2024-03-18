import { CheckoutFormSectionProps } from "../../components";

export const FORM_SECTIONS_DATA: CheckoutFormSectionProps[] = [
    {
        title: 'billing details',
        name: 'billing',
        inputRows: [
            [
                {
                    inputType: 'text', 
                    label: 'Name', 
                    width: 45, 
                    placeholder: 'Alexei Ward', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
                {
                    inputType: 'text', 
                    label: 'Email', 
                    width: 45, 
                    placeholder: 'alexei@gmail.com', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
            ],
            [
                {
                    inputType: 'text', 
                    label: 'Phone Number', 
                    width: 45, 
                    placeholder: '+1202-555-0136', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
            ],
        ],
    },
    {
        title: 'shipping info',
        name: 'shipping',
        inputRows: [
            [
                {
                    inputType: 'text', 
                    label: 'Address', 
                    width: 100, 
                    placeholder: '1137 Williams Avenue', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
            ],
            [
                {
                    inputType: 'text', 
                    label: 'ZIP Code', 
                    width: 45, 
                    placeholder: '10001', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
                {
                    inputType: 'text', 
                    label: 'City', 
                    width: 45, 
                    placeholder: 'New York', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
            ],
            [
                {
                    inputType: 'text', 
                    label: 'Country', 
                    width: 45, 
                    placeholder: 'United States', 
                    onChangeInput: (value: string) => {console.log({value})}
                },
            ],
        ],
    },
    {
        title: 'payment details',
        name: 'payment',
        inputRows: [
            [
                {
                    inputType: 'radio', 
                    label: 'Payment Method', 
                    width: 45, 
                    radioOptions: [
                        {label: 'e-Money', value: 'e-money'},
                        {label: 'Cash on Delivery', value: 'cash'}
                    ], 
                    onChangeInput: (value: string) => {console.log({value})}
                },
            ],
        ],
    },
];