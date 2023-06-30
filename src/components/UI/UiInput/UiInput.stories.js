import { useState } from 'react';
import UiInput from './UiInput'

export default {
    title : 'Ui-Kit/UiInput',
    component: UiInput,
};


const Template = (arg) => {
    const [value, setValue] = useState('');

    const handlInputChange = value => {
        setValue(value)
    }

    return (
        <UiInput
            {...arg}
            value={value}
            handlInputChange={handlInputChange}
        />
    )
}

const props = {
    value: '',
    handlInputChange: ()=>console.log('Input Change'),
    placeholder: 'placeholder',
    classes: '',
}

export const Default = Template.bind({});
Default.arg = {
    ...props
}
