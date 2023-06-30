import type { Meta, StoryObj } from '@storybook/react';

import UiButton from "./UiButton";


export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton,
}


const Template = (arg) => <UiButton {...arg} />

const props = {
    text: 'Button click',
    disabled: true,
    onClick: () => console.log('click'),
    theme: 'light',

}

export const Primary = {
    args: {
        ...props,
        label: 'Button',
        disabled: false,
        text: 'hello',
    }
};

export const Dark = {
    args: {...props,
        label: 'Button',
        disabled: false,
        theme: 'dark'
    }
};

export const Light = {
    args: {
        ...props,
        label: 'Button',
        disabled: false,
        
    }
};
export const Disabled = {
    args: {
        ...props,
        label: 'Button',
        disabled: true,
        
    }
};





// export const Primary = Template.bind({});

// Template.arg = {
//     ...props,
//     theme: 'dark'
// }

// export const Light = Template.bind({});

// Light.arg = {
//     ...props,
//     theme: 'light'
// }

// export const Dark = Template.bind({});

// Dark.arg = {
//     ...props,
//     theme: 'dark'
// }

// export const Disabled = Template.bind({});

// Disabled.arg = {
//     ...props,
//     disabled: true,
// }
















